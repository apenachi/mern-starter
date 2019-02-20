##  To MySelf 
##  to test if this will run when publish do $ npm install . -g  where . = mern-starter 
##  bin folder during install does not get copy therefore use .bin (hidden)
##  TODO --> configure files to use [project] var supplied when running
##  $ mern-starter [appname]
##  // main : when module is require in another module -> var mod = require('mod');

##  Re-installing node js will update to latest node and npm versions, the only catch is if any app
##  using a previously version might need 
##  npm root -g  //gets global dir of intalled npm packages
##  npm outdated -g --depth=0 //find all outdated packages
##  npm update -g             //updates all global packages
##  below lines is needed to run app with $mern-starter [appname]
##  "bin": {
##    "mern-starter": "./mern-starter.js"
##  },

##  working with Bower
##  bower.json same as package.json => $:bower install bootstrap --save
##  .bowerrc is the bower config file => { "directory" : "client/public/libraries" }
##  bower install