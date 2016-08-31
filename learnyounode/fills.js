var fs = require('fs');
fs.readdir(process.argv[2],function(err,files){
    if(err) throw err;
    else{
        if(typeof(process.argv[3])==='string'){
            files.every(function(val){
                if(val.match(new RegExp('\\.'+process.argv[3]+'$','g'))){
                    console.log(val);
                    return true;
                }else return false;
            });
        }else{
            files.every(function(val){
                console.log(val);
                return true;
            });
        }
    }
});