var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err) throw err;
    var coll = db.collection('parrots');
    var q = {age:{$gt:parseInt(process.argv[2])}};
    coll.count(q,function(err,count){
        if(err) throw err;
        console.log(count);
    });
    db.close();
});