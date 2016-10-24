var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
obj['engines'] = {"node":"^4.4.5"};
var str = JSON.stringify(obj,null,4);
fs.writeFile('./package.json',str,'utf8');