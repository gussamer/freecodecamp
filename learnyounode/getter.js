module.exports = function(url,printlen){
    var http = require('http');
    var retdat = '';
    var adddata = function(data){retdat += data};
    var outdata = function(data){
        if(printlen)console.log(retdat.length);
        console.log(retdat);
    };
    http.get(url,function(resp){
        resp.setEncoding('utf8');
        resp.on('data',adddata);
        resp.on('error',console.error);
        resp.on('end',outdata);
    }).on('error',console.error);
};