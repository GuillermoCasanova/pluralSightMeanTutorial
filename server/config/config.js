
var path = require('path'); 

var rootPath =  path.normalize(__dirname + '/../../' ); 

module.exports = {

    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://guillermo:123456@ds031812.mongolab.com:31812/multivision', 
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}