const express = require('express');
const app = express();
const fs = require('fs');
const {GraphQLScalarType,Kind} = require('graphql');
// const {kind} = require('graphql/languaje');
// apollo server
const {ApolloServer} = require('apollo-server-express');

let aboutMessage = "Issue Tracker API v1.0";
const issuesDB = [  
	{    
		id: 1, 
		status: 'New', 
		owner: 'Ravan', 
		effort: 5,    
		created: new Date('2019-01-15'), 
		due: undefined,    
		title: 'Error in console when clicking Add', 
	},  
	{    
		id: 2, 
		status: 'Assigned', 
		owner: 'Eddie', 
		effort: 14,    
		created: new Date('2019-01-16'), 
		due: new Date('2019-02-01'),    
		title: 'Missing bottom border on panel',  
	}, 
];


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
		return new Date(value);  
	},
	parseLiteral(ast) {    
		return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;  
	}, 
});


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

function issueAdd(_,{issue})
{
	issue.created = new Date();
	issue.id = issuesDB.length+1;
	if(issue.status==undefined) issue.status='new';
	issuesDB.push(issue);
	return issue;
}

function issueList()
{
	return issuesDB;
}

// function for mutation args : (obj,args,context,info)
function setAboutMessage(_,{message}){
	return aboutMessage=message;
}


// create apollo server with two params (typeDefs,resolvers)
// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers
// });
const server = new ApolloServer({
	typeDefs:fs.readFileSync('./schemas/schema.graphql','utf-8'),
	resolvers
});




// middleware for static files
const fileServerMiddleware = express.static('frontend');

// middleware apollo
server.applyMiddleware({app,path:'/graphql'});

// mount middleware
app.use('/',fileServerMiddleware)

app.listen(3000,function(){
	console.log("Inventio listen by port 3000")
})

