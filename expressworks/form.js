var express = require('express');
var path = require('path');
var bodyparse = require('body-parser');
var app = express();
app.use(bodyparse.urlencoded({extended: false}));
app.post('/form', function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);