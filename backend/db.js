require('dotenv').config({ path: './sample.env' });
const { MongoClient } = require('mongodb');


let db;

async function connectDB(){
	const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
	// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname
	// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/issuetracker?retryWrites=true';
	// mLab URL - replace UUU with user, PPP with password, XXX with hostname
	// const url = 'mongodb://UUU:PPP@XXX.mlab.com:33533/issuetracker';	
	const client = new MongoClient(url, { userNewUrlParser: true });
	await client.connect();
	console.log('Connected to MongoDB at', url);
	db = client.db();
}

async function getNextSequence(name)
{
  const result = await db.collection('counters').findOneAndUpdate({ _id: name },{ $inc: { current: 1 } }, { returnOriginal: false });
  return result.value.current;
}

function getDB()
{
	return db;
}

module.exports = { connectDB,getNextSequence,getDB };