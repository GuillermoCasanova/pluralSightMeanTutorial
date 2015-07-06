
var express = require('express'), 
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'); 

var env = process.env.NODE_ENV = process.env.NODE_ENV  || 'development'; 

var app = express(); 

function compile(str, path) {
    return stylus(str).set('filename', path); 
}


app.set('views', __dirname + '/server/views'); 
app.set('view engine', 'jade'); 
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }

));

app.use(express.static(__dirname + '/public')); 


if(env === 'development') {

    mongoose.connect('mongodb://localhost/multivision'); 

}
else {
    mongoose.connect('mongodb://guillermo:123456@ds031812.mongolab.com:31812/multivision'); 

}


var db = mongoose.connection; 

db.on('errors', console.error.bind('there was a connection error...'));

db.once('open', function callback() {
    console.log("You've connected the the DB"); 

}); 


var messageSchema = mongoose.Schema({message: String}); 

var Message = mongoose.model('Message', messageSchema); 

var mongoMessage; 

Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message; 
})


app.get('/partials/:partialsPath', function(req, res) {

    res.render('partials/' + req.params.partialsPath); 

});


app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage

    }); 
})


var port = process.env.PORT || 3030; 

app.listen(port);

console.log('Listening on port ' + port);
