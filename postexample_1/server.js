var express = require("express"),
    app = express(),
    helpers = require("./helpers/utils"),
    jwt = require("jwt-simple"),
    logger = require('morgan'),
    routes = require('./routes/index'),
    expressValidator = require('express-validator'),
    bodyparser = require("body-parser"),
    User = require('./models/User').User,
    session = require('express-session');
app.use(session({
        secret: 'ssshhhhh',
        cookie: {maxAge: 60000},
        resave: true,
        saveUninitialized: true
    })
);



app.use(bodyparser.json());
app.use(logger('dev'));
app.use(expressValidator());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/', routes);
app.set('models', require('./models'));
app.set('models', User);
app.use(bodyparser.json());
app.use(express.static(__dirname + "/../postexample_1"));
app.get("/", function (req, res) {
    res.redirect("/index.html");
});
module.exports = app;

