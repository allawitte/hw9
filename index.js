var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/users_list';
MongoClient.connect(url, function(err, db) {
    if(err) {
        console.log("Unable to connect with database. Error.", err);
    }
    else {
        console.log("Connection is set for:", url);
        var collection = db.collection('users');
        var usersArr = [
            {"name":"Alex", "role":"admin", "login":"alex@com"},
            {"name":"Sim", "role":"user", "login":"sim-sim"},
            {"name":"Nadim", "role":"admin", "login":"nadhend"},
            {"name":"Alex", "role":"user", "login":"mylog"},
            {"name":"Anna", "role":"user", "login":"sunnyday"},
            {"name":"Max", "role":"user", "login":"fantasy"},
            {"name":"Sonny", "role":"user", "login":"latex"},
            {"name":"Ronny", "role":"admin", "login":"maxpermissions"},
            {"name":"Max", "role":"user", "login":"max@com"},
        ];

            collection.insert(usersArr, function(err, result) {
                if(err) {
                    console.log(err);
                }
                else {
                    collection.find().sort({'name':1}).toArray(function(err, result) {
                        if(err) {
                            console.log(err);
                        }
                        else if (result.length > 0) {
                            console.log(result);
                            collection.remove();
                            collection.find().sort({'name':1}).toArray(function(err, result) {
                                if(err) {
                                    console.log(err);
                                }
                                else {
                                    if(result.length == 0) {
                                        console.log('Collection is removed');
                                    }
                                }
                            });
                        }
                        else {
                            console.log('Requested document is not found');
                        }
                    });
                }
            });

    }
});
/**
 * Created by HP on 11/7/2016.
 */
