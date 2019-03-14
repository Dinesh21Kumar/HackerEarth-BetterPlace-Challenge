var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongodb:27017/";
var Promise = require('promise');


function connection() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("connection to mongo is successuful");
                resolve(db);
            }
        });
    });

}


function find(conn) {
    var mysort = {
        Videoviews: -1
    };
    var dbo = conn.db("BetterPlace");
    return new Promise(function (resolve, reject) {
        dbo.collection("channels").find().sort(mysort).toArray(function (err, result) {
            if (err) {
                reject(err);
            } else {
                console.log(result);
                conn.close();
                resolve(result);
            }

        });
    });

}

module.exports = {
    connection: connection,
    find: find
}