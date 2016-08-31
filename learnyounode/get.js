module.exports = function(url,callb){
    var http = require('http');
    var ret = '';
    var adddata = function(data){ret += data;};
    var outdata = function(data){callb(ret);};
    http.get(url,function(resp){
        resp.setEncoding('utf8');
        resp.on('data',adddata);
        resp.on('error',console.error);
        resp.on('end',outdata);
    }).on('error',console.error);
};