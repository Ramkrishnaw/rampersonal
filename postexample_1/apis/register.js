var response = require('./../helpers/response');
var jwt = require("jwt-simple");
var User = require('./../models/User').User;
var helpers = require("./../helpers/utils");
var crypt = require('node-forge');


var registerparams = [
    'username',
    'password',
    'firstname',
    'lastname'
];

exports.register = function (req, res) {
    if (helpers.checkRequiredParams(registerparams, req)) {
        var salt = crypt.util.bytesToHex(crypt.random.getBytesSync(64));
        var md = crypt.md.sha256.create();
        md.update(req.body.password + salt);
        var password = md.digest().toHex();
        var token = crypt.util.bytesToHex(crypt.random.getBytesSync(64));

        var user = new User({
            userId: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            salt: salt,
            password: password,

            accessToken: token
        });
        user.save(function (err, data) {
            if (!err && data) {
                response.sendSuccessResponse(res, data, 201);
            } else {
                console.log(err);
                response.sendBadResponse(res, err.errmsg);
            }
        })
    }
    else {
        response.sendBadResponse(res);
    }
};