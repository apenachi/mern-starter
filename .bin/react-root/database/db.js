var mongoose = require('mongoose');
var chalk = require('chalk');

// Replace uri and database values as needed
config = {
	uri : {
		dev: 'localhost',
		prod: process.env.MONGODB_URI
	},
	database: {
		name: 'mern-starter',
		options: {
			user: '',
			pass: ''
		}
	},
};

//	Most likely MONGODB_URI is not setup until deployment
var mongoUrl = config.uri.prod || config.uri.dev;

var mongoDB = 'mongodb://' + mongoUrl + '/' + config.database.name;

// mongod --dbpath /usr/local/lib/MongoDB/data/ --profile 1 --slowms 2000
	

mongoose.connect(mongoDB, config.database.options, function(err) {
	mongoose.Promise = global.Promise;
	if (err) {
		console.log(chalk.white.bgRed.bold('Mongoose %s exception %s'), mongoose.version, err);
	} else {
		console.log(chalk.black.bgCyan('Mongoose %s successfully connected to:'), mongoose.version, ' ' + mongoDB);
	}
});

var db = mongoose.connection;

module.exports = db;
