var User = require('./../models/User').User;
var response = require('./../helpers/response');
exports.testApi = function (req, res) {
    if (req.session.user.accessToken) {
        res.send('you successsfully accessed testApi');
    }
    else{
        res.send('unotherized user');
    }

};



