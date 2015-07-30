
var mongoose = require('mongoose'), 
    userModel = require('../models/User'); 


module.exports = function(config) {

    mongoose.connect(config.db);
     
    var db = mongoose.connection; 

    db.on('errors', console.error.bind('there was a connection error...'));

    db.once('open', function callback() {
        console.log("You've connected the the DB"); 

    }); 

    userModel.createDefaultUsers(); 

}
