module.exports = function(urls,callb){
    var get = require('./get.js');
    var i = 0;
    var col = function(dat){
        callb(dat);
        i++;
        if(i==urls.length)return;
        else get(urls[i],col);
    };
    get(urls[i],col);
};