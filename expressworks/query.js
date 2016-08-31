var express = require('express');
var fs = require('fs');
var file;
fs.readFile(process.argv[3],function(err,data){
    if(err) throw err;
    file = JSON.parse(data);
});
var app = express();
app.get('/books', function (req, res){
    res.json(file);
});
app.listen(process.argv[2]);