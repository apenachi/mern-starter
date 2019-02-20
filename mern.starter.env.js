//  mern-starter.env.js
//  notice there is no need for module.exports since this might be require once
//  set as many variables you need ...but this is set on current project ONLY!!

process.env['NODE_ENV'] = "testing"
process.env['CONSUMER_KEY'] = ""
process.env['CONSUMER_SECRET'] = ""
process.env['ACCESS_TOKEN_KEY'] = ""
process.env['ACCESS_TOKEN_SECRET'] = ""

// 
// Use as shown below
var env = require('./mern.starter.env');

var mongoString = process.env.MONGO_URL ? process.env.MONGO_URL +'/Collecton' : 'Collecton';
console.log('mongoString', mongoString);


//  ***********  BEST WAY TO SET NODE_ENV is globally
//  NODE_ENV should be set globally as shown below
//  windows -> set NODE_ENV=development but this is set on current project ONLY!!
//  [aypmacpro]$:echo export NODE_ENV=development >> ~/.bash_profile
//  [aypmacpro]$:subl ~/.bash_profile open to add above line