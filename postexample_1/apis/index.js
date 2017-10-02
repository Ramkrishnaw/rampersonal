/* File to add the APIs and exposing them as a module */

var APIs = [
    'register',
    'login',
    'nag',
    'testApi'
];

APIs.forEach(function (api) {
    module.exports[api] = require(__dirname + '/' + api)[api];
});