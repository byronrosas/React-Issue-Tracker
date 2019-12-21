const express = require('express');
const app = express();
const fs = require('fs');
const {MongoClient} = require('mongodb');
const {GraphQLScalarType,Kind} = require('graphql');
require('dotenv').config({ path: './sample.env' });
// const {kind} = require('graphql/languaje');
// apollo server
const {ApolloServer,UserInputError} = require('apollo-server-express');

let aboutMessage = "Issue Tracker API v1.0";
// const issuesDB = [  
// 	{    
// 		id: 1, 
// 		status: 'New', 
// 		owner: 'Ravan', 
// 		effort: 5,    
// 		created: new Date('2019-01-15'), 
// 		due: undefined,    
// 		title: 'Error in console when clicking Add', 
// 	},  
// 	{    
// 		id: 2, 
// 		status: 'Assigned', 
// 		owner: 'Eddie', 
// 		effort: 14,    
// 		created: new Date('2019-01-16'), 
// 		due: new Date('2019-02-01'),    
// 		title: 'Missing bottom border on panel',  
// 	}, 
// ];


const port = process.env.API_SERVER_PORT || 3000;
// DATABASE
const url = process.env.DB_URL || "mongodb://localhost/issuetracker";
// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname 
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/issuetracker?retryWrites=true';
// mLab URL - replace UUU with user, PPP with password, XXX with hostname 
// const url = 'mongodb://UUU:PPP@XXX.mlab.com:33533/issuetracker';
let db;
// END DATABASE

// Definitions 
// about:String!  (!) is mandatory
// better in other file
// const typeDefs = `
// 	type Query{
// 		about:String!
// 	}
// 	type Mutation{
// 		setAboutMessage(message:String!):String
// 	}
// `; 


const GraphQLDate = new GraphQLScalarType({
	name:"GraphQLDate",
	description: 'A Date() type in GraphQL as a scalar', 
	serialize(value){
		return value.toISOString();
	},
	parseValue(value) {    
		// return new Date(value);  
		const dateValue = new Date(value);
		return isNaN(dateValue)? undefined:dateValue;
	},
	parseLiteral(ast) {    
		// return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;  
		if (ast.kind == Kind.STRING) 
		{
			const dateValue = new Date(ast.value);
			return isNaN(dateValue)? undefined:dateValue;
		}  
	}, 
});


function validateIssue(issue)
{	
	const errors=[];
	if(issue.title.length<3){
		errors.push('Field "title" must be at least 3 characters long.');
	}
	if(issue.status == 'Assigned' && !issue.owner) 
	{    
		errors.push('Field "owner" is required when status is "Assigned"');  
	}
	if(errors.length>0)
	{
		throw new UserInputError('Invalid input(s)',{errors});
	}
}

// resolvers
// setAboutMessage; if function name is like to key property, it set  setAboutMessage else { setAboutMessage: setOtherNameAboutMessage } 
const resolvers = {
	Query:{
		about:()=>aboutMessage,
		issueList
	},
	Mutation:{
		setAboutMessage,
		issueAdd
	},
	GraphQLDate
}

async function issueAdd(_,{ issue })
{	
	validateIssue(issue);
	issue.created = new Date();
	// issue.id = issuesDB.length+1;
	 issue.id = await getNextSequence('issues');
	// if(issue.status==undefined) issue.status='new';
	// issuesDB.push(issue);
	const result = await db.collection('issues').insertOne(issue);
 	
	// return issue;
	const savedIssue = await db.collection('issues').findOne({ _id: result.insertedId });  
	return savedIssue; 
}


async function issueList()
{
	// return issuesDB;
	const issues= await db.collection('issues').find({}).toArray();
	return issues;
}

// DATABASE
async function connectToDb(){
	const client = new MongoClient(url,{userNewUrlParser:true});
	await client.connect();
	console.log('Connected to MongoDB at', url); 
	db=client.db();
}

async function getNextSequence(name) {  
	const result = await db.collection('counters').findOneAndUpdate({ _id: name },
		{ $inc: { current: 1 } },{ returnOriginal: false },);  
	return result.value.current; 
}


// END DATABASE


// function for mutation args : (obj,args,context,info)
function setAboutMessage(_,{message}){
	return aboutMessage=message;
}


// create apollo server with two params (typeDefs,resolvers)
// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers
// });




// middleware for static files
// const fileServerMiddleware = express.static('frontend');



// mount middleware
// app.use('/',fileServerMiddleware)


const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';

const server = new ApolloServer({
	typeDefs:fs.readFileSync('./schemas/schema.graphql','utf-8'),
	resolvers,
	formatError:error=>{
		console.log("Error",error);
		return error;
	}
});
console.log("EVB",process.env.ENABLE_CORS);
console.log('CORS setting:', enableCors);

// middleware apollo
server.applyMiddleware({app,path:'/graphql',cors:enableCors});
// DATABASE
(async function(){
	try{
		await connectToDb();
		app.listen(port,function(){
			console.log(`API Inventio listen by port ${port}`);
		})

	}catch(err){
		console.log("Error",err);
	}
})()
// END DATABASE


