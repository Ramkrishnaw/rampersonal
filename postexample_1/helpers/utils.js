var _ = require('underscore');
exports.checkRequiredParams = function (registerparams, req) {
    var status = true;
    _.forEach(registerparams, function (param) {
        if (!req.body[param]) status = false;
    });
    return status;
};
exports.verifyParams = function (req, params) {
    _.each(params, function (param) {
        req.check(param, 'Missing ' + param + ' parameter').notEmpty();
    })
};
