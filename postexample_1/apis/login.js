var response = require('./../helpers/response');

var User = require('./../models/User').User;
var jwt = require("jwt-simple");
var response = require('./../helpers/response');
var helpers = require("./../helpers/utils");
var crypt = require('node-forge');
var _ = require('underscore');
var requiredParams = [
    'u_name',
    'u_pwd'
];

exports.login = function (req, res) {
    helpers.verifyParams(req, requiredParams);
    req.getValidationResult()
        .then(function (result) {
            if (!result.isEmpty()) {
                response.sendBadResponse(res, result.array());
                return;
            }
            User.findOne({userId: req.body.u_name}, function (err, user) {
                if (err) {
                    response.sendBadResponse(res, 'Incorrect userId or password');
                } else {
                    if (_.isEmpty(user)) {
                        response.sendNotFoundResponse(res, 'User not found.')
                    } else {
                        var md = crypt.md.sha256.create();
                        md.update(req.body.u_pwd + user.salt);
                        passwordDigest = md.digest().toHex();
                        if (passwordDigest == user.password) {
                            res.send({
                                status:200,
                                msg:'welcome to the home page'+"  "+user.userId,
                                id:user.userId,
                                token:user.accessToken
                            });

                        } else {
                            response.sendBadResponse(res, 'Incorrect password');
                        }
                    }
                }

            })
        })

}
