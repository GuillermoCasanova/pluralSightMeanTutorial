
var mongoose = require('mongoose'), 
    encrypt = require('../utilities/encryption'); 

module.exports = function(config) {

    mongoose.connect(config.db);
     
    var db = mongoose.connection; 

    db.on('errors', console.error.bind('there was a connection error...'));

    db.once('open', function callback() {
        console.log("You've connected the the DB"); 

    }); 

    var userSchema = mongoose.Schema({
        firstName: String, 
        lastName: String, 
        username: String,
        salt: String, 
        hashed_pwd: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch){

            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd; 
        }
    }

    var User = mongoose.model('User', userSchema); 

    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            var salt, hash; 
            salt = encrypt.createSalt(); 
            hash = encrypt.hashPwd(salt, 'joe'); 
            User.create({firstName: 'Joe', lastName: 'Eames', username: 'Fearless', salt: salt, hashed_pwd: hash, roles:['admin']});
            salt = encrypt.createSalt(); 
            hash = encrypt.hashPwd(salt, 'maria'); 
            User.create({firstName: 'Maria', lastName: 'Lunita', username: 'MariaXXX', salt: salt, hashed_pwd: hash, roles:[] });
            salt = encrypt.createSalt(); 
            hash = encrypt.hashPwd(salt, 'dan'); 
            User.create({firstName: 'Dan', lastName: 'Wallop', username: 'Danny77', salt: salt, hashed_pwd: hash });
        }

        if(err) {
            console.log("nothing here"); 
        }
    });

}
