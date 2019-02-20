var Article = require('../../database/models/Article.js');
var article = require('express').Router();
var bodyParser = require('body-parser');
var chalk = require('chalk');

article
	.use(function (req, res, next) {
		console.log(chalk.white.bgMagenta('METHOD: %s - URL: /api/articles%s'), req.method, req.url);
		next();
	})
	.get('/', function(req, res) {
		Article.find({}, function(err, doc){
			if(err){
				console.log(chalk.white.bgRed.bold(err));
				res.send(err);
			} else {
				res.send(doc);
			}
		})
	})
	.post('/', function(req, res){
		var newArticle = new Article(req.body.article);
		console.log(req.body.article)
		Article.create(newArticle, function(err){
			if(err){
				console.log(chalk.white.bgRed.bold(err));
				res.send(err)
			} else {
				res.send("Article Saved");
			}
		})
	})
	.delete('/', function(req, res) {
		Article.remove({}, function(err) {
			if(err) {
				console.log(chalk.white.bgRed.bold(err));
				res.send(err)
			} else {
				res.send('Articles Deleted')
			}
		})
	})	
	.put('/:id', function (req, res) { console.log('No PUT Implementation ...!')})
	.delete('/:id', function (req, res) { console.log('No DELETE Implementation ...!')})


module.exports = article;