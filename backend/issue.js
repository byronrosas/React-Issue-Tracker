const { UserInputError } = require('apollo-server-express');
const { getDB,getNextSequence } = require('./db.js');



function validate(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Field "title" must be at least 3 characters long.');
  }
  if (issue.status === 'Assigned' && !issue.owner) {
    errors.push('Field "owner" is required when status is "Assigned"');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { issue }) {
  const db = getDB(); 
  validateIssue(issue);
  const newIssue = { ...issue };
  newIssue.created = new Date();
  // issue.id = issuesDB.length+1;
  newIssue.id = await getNextSequence('issues');
  // if(issue.status==undefined) issue.status='new';
  // issuesDB.push(issue);
  const result = await db.collection('issues').insertOne(newIssue);

  // return issue;
  const savedIssue = await db.collection('issues').findOne({ _id: result.insertedId });
  return savedIssue;
}

async function list(_,{ status }) {
  console.log("_",_);
  console.log("STATUS",status);
  const db = getDB();  
  const filter = {};
  if (status) filter.status = status;
  const issues = await db.collection('issues').find(filter).toArray();
  return issues;
}

async function get(_,{ id })
{
	const db = getDB();
	const issue = await db.collection('issues').findOne({ id });
	return issue;
}
module.exports = { list, add, get };