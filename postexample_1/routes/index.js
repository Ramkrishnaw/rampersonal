var express = require("express");
var app = express();
var response = require('./../helpers/response');
var User = require('./../models/User').User;
var api = require('./../apis/index');
var router = express.Router();
var _=require('underscore');
router.post('/register', api.register);
router.post('/login', api.login);
router.get('/users',isAuthenticated, api.nag);
router.get('/testApi', isAuthenticated, api.testApi);
module.exports = router;


function isAuthenticated(req, res, next) {
    var token = req.headers.token || req.query.token;
    if (token) {
        User.findOne({accessToken: token}, function (err, user) {
            if (err) {
                response.sendInvalidAccessTokenResponse(res, err);
            } else {
                if (_.isEmpty(user)) {
                    response.sendInvalidAccessTokenResponse(res, 'Invalid access token');
                } else {
                    req.session.user = user;
                    console.log(user);
                    next();
                }
            }
        })
    } else {
        response.sendInvalidAccessTokenResponse(res, 'Please login to perform this action');
    }
}








