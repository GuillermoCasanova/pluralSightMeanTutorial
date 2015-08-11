
// Brings in mongoose module
var mongoose = require('mongoose'); 


// Creates a schema ruleset for data of each course to follow 
var coursesSchema = mongoose.Schema({

    name: {

        type: String,
        require: '{PATH} is required!' 
    },

    featured: {

        type: Boolean,
        require: '{PATH} is required!' 
    },

    published: {

        type: Date,
        require: '{PATH} is required!' 
    },
    tags : [String]

});


// Creates the model for 'Course' based of the coursesSchema
var Course = mongoose.model('Course', coursesSchema); 


// Creates courses if the Courses Mongo collection is empty 
function createDefaultCourses() {

    Course.find({}).exec(function(err, collection) {

        if(collection.length === 0) {

            Course.create({name: 'C# for sociopaths', featured: true, published:  new Date('1/1/2015'), tags: ['C#']});
            Course.create({name: 'C# for mothers', featured: false, published: new Date('1/5/203'), tags: ['C#']});
            Course.create({name: 'Crap course for cappy people', featured: true, published: new Date('4/9/2014'), tags: ['C#']});
            Course.create({name: 'A survival guide to nothing', featured: false, published: new Date('3/12/2015'), tags: ['C#']});
            Course.create({name: 'Death match for mathicnes etc', featured: true, published: new Date('6/6/2013'), tags: ['C#']});
            Course.create({name: 'How to keep your soul and livng', featured: true, published: new Date('2/7/2009'), tags: ['C#']});
            Course.create({name: 'another thing to do ', featured: true, published: new Date('7/2/2013'), tags: ['C#']});
            Course.create({name: 'How to deal with narcissists', featured: true, published: new Date('20/6/2007'), tags: ['C#']});
            Course.create({name: 'Cod reviews for jerks', featured: false, published: new Date('10/6/2015'), tags: ['C#']});
            Course.create({name: 'Learning how to live with Pandas', featured: false, published: new Date('1/1/2014'), tags: ['C#']});
             
        }

    })

}

exports.createDefaultCourses = createDefaultCourses; 


