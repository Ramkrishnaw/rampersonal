/* HTTP response helper file which contains all the request/responses functions */

/* Function to send bad response
 *
 * @param {Object} res The response object
 * @param {String} msg The message
 **/
exports.sendBadResponse = function (res, msg) {

    var message = msg || 'Bad Request';
    res.status(400).send({
        "error": {
            "status": 400,
            "timestamp": Date.now(),
            "errorCode": 0,
            "message": message
        }
    })
};

/* Function to send not found response
 *
 * @param {Object} res The response object
 * @param {String} msg The message
 **/
exports.sendNotFoundResponse = function (res, msg) {
    var message = msg || 'Not Found';
    res.status(404).send({
        "error": {
            "status": 404,
            "timestamp": Date.now(),
            "errorCode": 0,
            "message": message
        }
    })
};

/* Function to send success response
 *
 * @param {Object} res The response object
 * @param {Object} data The data object which wants to send in response
 * @param {Integer} code The status code
 **/
exports.sendSuccessResponse = function (res, data, code,msg) {
    code = code || 200;
    res.status(code).send({
        data: data,
        msg:msg
    })
};


/* Function to send invalid access token response
 *
 * @param {Object} res The response object
 * @param {String} msg The message
 **/
exports.sendInvalidAccessTokenResponse = function (res, msg) {
    var message = msg || 'Invalid access token';
    res.status(401).send({
        "error": {
            "status": 401,
            "timestamp": Date.now(),
            "errorCode": 0,
            "message": message
        }
    })
};


/* Function to send unauthorized response
 *
 * @param {Object} res The response object
 * @param {String} msg The message
 **/
exports.sendUnauthorizedResponse = function (res, msg) {
    var message = msg || 'Unauthorized';
    res.status(403).send({
        "error": {
            "status": 403,
            "timestamp": Date.now(),
            "errorCode": 0,
            "message": message
        }
    })
};
