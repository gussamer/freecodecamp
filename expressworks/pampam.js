var express = require('express');
var app = express();
app.put('/message/:id', function (req, res) {
    var ret = require('crypto').createHash('sha1').update(new Date().toDateString()+req.params.id).digest('hex');
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(ret);
});
app.listen(process.argv[2]);