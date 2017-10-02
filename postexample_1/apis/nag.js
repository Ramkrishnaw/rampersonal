var User = require('./../models/User').User;
var response = require('./../helpers/response');

exports.nag = function (req, res) {
    User.find({}, function (err, doc) {
        res.send(doc);
    })

};