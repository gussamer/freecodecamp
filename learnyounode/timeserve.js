var net = require('net');
var server = net.createServer(function(sock){
    var d = new Date();
    var dt = d.getFullYear()+'-'+(d.getMonth()+1>9?'':'0')+(d.getMonth()+1)+'-'+(d.getDate()>9?'':'0')+d.getDate()+' '+(d.getHours()>9?'':'0')+d.getHours()+':'+(d.getMinutes()>9?'':'0')+d.getMinutes()+'\n';
    sock.write(dt);
    sock.end("");
});
server.listen(process.argv[2]);