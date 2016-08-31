var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/'+process.argv[2],function(err,db){
    if(err) throw err;
    var users = db.collection('users');
    var q = {username:"tinatime"};
    var upd = {$set:{age:40}};
    users.update(q,upd,function(err,data){
        if(err) throw err;
        console.log(data);
        db.close();
    });
    db.close();
});