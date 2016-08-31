var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    var para = url.parse(req.url, true);
    var time = new Date(para.query['iso']);
    if(para.pathname==='/api/parsetime'){
        var restime = {
            'hour':time.getHours()
            ,'minute':time.getMinutes()
            ,'second':time.getSeconds()
        };
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(restime));
        res.end();
    }else if(para.pathname==='/api/unixtime'){
        var restime = {
            'unixtime':time.getTime()
        };
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(restime));
        res.end();
    }
}).listen(process.argv[2]);