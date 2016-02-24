/*globals require,exports,console,module,__dirname*/
var path = require('path');

// 3rd party
var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

// app
var env = require('./environment');
var angularRoutes = require('../client/app/routes');

var app = express();

// Attach models and services to each request to make our lives easier
app.use(function (req, res, next) {
    'use strict';

    next();
});

// Set the handlebars templating system
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '..', 'server', 'templates'));

var PUBLIC_PATH = path.join(__dirname, '..', 'client');
app.use(express.static(PUBLIC_PATH));

// Parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

function renderAngularIndex(req, res) {
    'use strict';

    res.render('index', { env: env });
}

// Add a basic route – index page
app.get('/',
    function (req, res) {
    'use strict';
    renderAngularIndex(req, res);

});

app.use(function(req, res, next) {
    'use strict';

    var key = req.originalUrl;
    var index = key.indexOf('?');
    if (index > 0) {
        key = key.substring(0, index);
    }
    console.log('Check for Angular route. originalUrl: ' + req.method + ' ' + req.originalUrl);
    if (angularRoutes[key] !== undefined) {
        console.log({req:req}, 'Angular bookmarked page');
        renderAngularIndex(req, res);
    } else {
        next();
    }
});


module.exports = app;