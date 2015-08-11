

var Course = require('mongoose').model('Course'); 

exports.getCourses = function(req, res) {

    Course.find({}).exec(function(err, collection) {


        res.send(collection);
   

    })

};


exports.getCoursesById = function(req, res) {


    Course.findOne({_id: req.params.id}).exec(function(err, collection) {

        // Sends back the course found to the client request
        res.send(collection); 

    })


};
