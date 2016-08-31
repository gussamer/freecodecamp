var fs = require('fs');
var filecon = fs.readFileSync(process.argv[2]);
var filestr = filecon.toString();
var lines = (filestr.match(/\n/g)||[]);
console.log(lines.length);