console.log(process.argv.reduce(function(total, arg){
    if(typeof(arg)==='number') return total+arg;
    else if(typeof(arg)==='string'&&!isNaN(parseInt(arg))){
        try{
            return total+parseInt(arg);
        }catch(ex){
            return total;
        }
    }else return total;
},0));