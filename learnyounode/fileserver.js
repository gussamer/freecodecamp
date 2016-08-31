var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var file = fs.createReadStream(process.argv[3]);
    file.on('open',function(){
        file.pipe(res);
    });
    file.on('error',function(err){
        res.end(err);
    });
}).listen(process.argv[2]);