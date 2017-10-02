/* File to add the Models and exposing them as a module */
/**
 * *************************************************************
 * MongoDb config starts here
 * *************************************************************
 */

global.Mongoose = require('mongoose');
global.autoIncrement = require('mongoose-auto-increment');



// load models
var mongooseSchemas = [
    'User'
];

// Connect to MongoDB;
Mongoose.Promise = global.Promise;
var connection = Mongoose.connect('mongodb://localhost:27017/MyDb');
autoIncrement.initialize(connection);


// Import mongoose schema
mongooseSchemas.forEach(function (schema) {
    module.exports[schema] = require(__dirname + '/' + schema)[schema];
});


/**
 * *************************************************************
 * MongoDb config ends here
 * *************************************************************
 */