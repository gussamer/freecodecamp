var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err) throw err;
    var docs = db.collection('docs');
    var ins = JSON.stringify({firstName:process.argv[2],lastName:process.argv[3]});
    console.log(ins);
    docs.insertOne(ins,function(err,data){
        if(err) throw err;
        db.close();
    });
});