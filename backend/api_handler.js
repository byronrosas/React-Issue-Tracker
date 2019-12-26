const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config({ path: './sample.env' });
const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const issue = require('./issue.js');

const resolvers = {
  Query: {
    about: about.getMessage,
    issueList: issue.list,
    issue: issue.get
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    issueAdd: issue.add,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./schemas/schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log('Error', error);
    return error;
  },
});

function installHandler(app)
{
	const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
	console.log('CORS setting:', enableCors);
	// middleware apollo
	server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };