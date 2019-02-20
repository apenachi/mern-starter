#!/usr/bin/env node --harmony       

// var co = require('co');
// var prompt = require('co-prompt');
// var commander = require('commander');

var fse = require('fs-extra')
var exec = require('child_process').exec;

//console.log('process.argv ', process.argv);
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

console.log('process.cwd: ', process.cwd())
console.log('__dirname', __dirname )
// return

process.argv.forEach(function(x, i){
	console.log('process.argv %s:  - %s', i, x)
})

var input = process.argv[2];
// var argument = process.argv[2].indexOf(':') > 0 ? true : false;
var project = input;

// Check for valid name
var isValid = /^[\w\-\_\s]+$/gi.test(project);
//process.argv[2].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

console.log('is valid ', isValid);
console.log('project', project);
var argument = input.split(':').length > 0 ? input.split(':')[0] : false;
console.log('---> ', argument);

if(process.argv.length <= 2 || !isValid) {
   console.log("Usage: mern-starter " +  "<my-mern-starter-app>");
   process.exit(0);
}
// If installed global __dirname will point to another location
// therefore fse.copySync('./bin/react-root', __dirname + '/'+ project)
try {
	fse.copySync(__dirname + '/.bin/react-root',  process.cwd() + '/'+ project)
	console.log("success!")

} catch (err) {
	console.error(err)
}
console.log('Done ....!')
process.exit(-1);

		// fse.mkdirs(project + '/server/model', function(err){
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/server/routes', function(err){
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/app/components', function(err) {
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/app/views', function(err) {
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/public/css', function(err) {
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/public/js', function(err) {
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/public/img', function(err) {
		// 	if(err) throw (err);
		// });
		// fse.mkdirs(project + '/client/public/libraries');


// process.exit();

// commander
//  .arguments('[file]')
//  .option('-u, --username <username>', 'The user to authenticate as')
//  .option('-p, --password <password>', 'The user\'s password')
//  .action(function(file) {
//     co(function *() {   // ES6 support yield option
//       var username = yield prompt('username: ');
//       var password = yield prompt.password('password: ');
//       console.log('user: %s pass: %s file: %s', username, password, file);
//     });
//  })
//  .parse(process.argv);




// #!/usr/bin/env node
// [aypmacpro]$: npm install -g
// /usr/local/bin     // shortcut install here and actual module is install below
// /usr/local/lib/node_modules/node-tryout/node-tryout.js
// [aypmacpro]$:npm link    use npm link while developing
// [aypmacpro]$:npm install --save co co-prompt

