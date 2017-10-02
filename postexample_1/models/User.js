/* User model */
var Mongoose = require("mongoose");
var user = new Mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        index: {
            unique: true
        }
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    }

});


// Asynchronous Pre Hooks
// This will generate the password hash before saving to database
// user.pre('save', function (next) {
//   var md = Crypt.md.sha256.create();
//   md.update(this.password + this.salt);
//   this.password = md.digest().toHex();
//   next();
// });

module.exports.User = Mongoose.model('User', user);