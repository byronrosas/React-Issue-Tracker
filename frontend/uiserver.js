const express = require('express');
const app = express();

// proxy, access to backend,avoid error of CORS
const proxy = require('http-proxy-middleware');
// proccess.env.  (access to real environment variables)
// with dotenv, allow access to .env instead the real environment variables
require('dotenv').config({path:'./sample.env'}); 


const apiProxyTarget = process.env.API_PROXY_TARGET;

if(apiProxyTarget)
{
	app.use('/graphql',proxy({target:apiProxyTarget}));
}

const UI_API_ENDPOINT = process.env. UI_API_ENDPOINT || 'http://localhost:3000/graphql'; 
const env = { UI_API_ENDPOINT };


app.get('/js/env.js', function(req, res) {  
	res.send(`window.ENV = ${JSON.stringify(env)}`) 
})


const port = process.env.UI_SERVER_PORT || 8000;


app.use(express.static('public'));
app.listen(port, function () {  console.log(`UI started on port ${port}`); });