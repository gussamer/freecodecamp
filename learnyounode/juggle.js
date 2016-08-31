var gets = require('./gets.js');
var callb = function(dat){console.log(dat);};
gets(process.argv.slice(2,process.argv.length),callb);