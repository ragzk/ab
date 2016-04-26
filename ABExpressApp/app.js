var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tsrequire = require('typescript-require');
var request = require('request');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var trans = require('./routes/buy');
var property = require('./routes/property');
var _ = require('lodash');

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

app.use('/', index);
app.use('/users', users);
app.get('/buy', trans.buy);
app.get('/buy/:type', trans.buy);
app.get('/buy/:type/getProperties', trans.buy.getProperties);

app.get('/property/:suburb/:street/:streetNumber/:uniqueId', property.details);
app.get('/property/getProperty/:uniqueId', property.details.getProperty);

app.get('/api/getUnSoldProperties', api.getUnSoldProperties);
app.get('/api/getSoldProperties', api.getSoldProperties);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
//});

/*start chokidar*/
var chokidar = require('chokidar');

var watcher = chokidar.watch('./public/xmlfiles/', {
    ignored: /[\/\\]\./,
    persistent: true
});


watcher
  .on('add', function (filePath) 
      {
        //console.log(event, path.extname(filePath));
        if (path.extname(filePath) == ".xml") {
            addFileCheck(filePath);
        }

});

var addFileCheck = function (xmlPath) {
    var fs = require('fs'),
        xml2js = require('xml2js');
    
    
    var parser = new xml2js.Parser({ explicitArray : false, mergeAttrs: true });
    fs.readFile(xmlPath, function (err, data) {
        parser.parseString(data, function (err, result) {
            if (result && result.propertyList) {
                var propertyList = toCamelCase(result.propertyList);
                processProperty(propertyList, fs, request, path, xmlPath);
                var fileName = path.basename(xmlPath)
                //fs.renameSync(xmlPath, "./public/processedXmlFiles/" + fileName);
                //fs.createReadStream(xmlPath).pipe(fs.createWriteStream("./public/processedXmlFiles/" + fileName));
         //       fs.createReadStream(xmlPath).pipe(fs.createWriteStream("./pubic/processedXmlFiles"));
            }
        });
    });
}

var processProperty = function (propertyJSON, fs, request, path, xmlPath) {  
    var processRentalJSONModule = require('./processRentalJSONModule.js');
    processRentalJSONModule.init(propertyJSON, fs, request, path, xmlPath);
}   


//watcher
//    .on('add', function (filePath) {
//    if (path.extname(filePath) == "xml") {
//        addFileCheck(filePath);
//    }});

/*end chokidar*/


/* start db orm */
//var db = require('./dbConnection/dbConnection.js');

/* end db orm */

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


function toCamelCase(obj) {
    return _.transform(obj, function (result, val, key) {
        if (_.isObject(val)) {
            val = toCamelCase(val);
        }
        result[camelize(key)] = val;
    });
}

function camelize(key) {
    return _.isString(key) && (key.substring(0, 1).toLowerCase() + key.substring(1)) || key;
}