
var mongoose = require('mongoose'), 
    userModel = require('../models/User')
    courseModel = require('../models/Course'); 



module.exports = function(config) {

    // Connects using properties of the passed in config.db object data 
    mongoose.connect(config.db);
     
    var db = mongoose.connection; 

    db.on('errors', console.error.bind('there was a connection error...'));

    db.once('open', function callback() {
        console.log("You've connected the the DB"); 
    }); 


    // Use functions exported by their model files to create data
    // if not found 
    userModel.createDefaultUsers(); 
    courseModel.createDefaultCourses(); 

}
