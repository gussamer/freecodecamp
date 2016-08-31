var getter = require('./getter.js');
for(var i=2;i<process.argv.length;i++){
    getter(process.argv[i],false);
}