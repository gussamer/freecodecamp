var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err) throw err;
    var coll = db.collection('prices');
    coll.aggregate([{$match:{size:process.argv[2]}}
        ,{$group:{_id:'name',avg:{$avg:'$price'}}}]).toArray(function(err,docs){
        if(err) throw err;
        console.log((docs[0].avg).toFixed(2));
    });
    db.close();
});