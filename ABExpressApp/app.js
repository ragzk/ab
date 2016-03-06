﻿var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tsrequire = require('typescript-require');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/public', express.static(path.join(__dirname, '/public')));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/*start chokidar*/
var chokidar = require('chokidar');

var watcher = chokidar.watch('file', {
    ignored: /[\/\\]\./,
    persistent: true
});



watcher = chokidar.watch('.', { ignored: /[\/\\]\./ }).on('all', function (event, filePath)  {
    console.log(event, path.extname(filePath));
if (path.extname(filePath) == ".xml") {
        addFileCheck(filePath);
}}
);


var addFileCheck = function (xmlPath) {
    var fs = require('fs'),
        xml2js = require('xml2js');
    
    
    var parser = new xml2js.Parser({ explicitArray : false, mergeAttrs: true });
    fs.readFile(xmlPath, function (err, data) {
        parser.parseString(data, function (err, result) {
            if (result && result.propertyList) {
                processProperty(result.propertyList, fs, request, path);
            }
        });
    });
}



var processProperty = function (propertyJSON, fs, request, path) {
    var processRentalJSONModule = require('./processRentalJSONModule.js');
    processRentalJSONModule.processRentalJSONInstance(propertyJSON, fs, request, path);
}   

watcher
    .on('add', function (filePath) {
    if (path.extname(filePath) == "xml") {
        addFileCheck(filePath);
    }});


//var watchedPaths = watcher.getWatched();
//console.log(watchedPaths);

/*end chokidar*/


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
