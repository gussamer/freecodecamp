var ls = require('./dirlis.js');
var res = ls(process.argv[2],process.argv[3],function(err,data){
    if(err) console.log(err);
    else{
        data.forEach(function(val){
            console.log(val);
        });
    }
});