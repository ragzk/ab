var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var trans = require('./routes/buy');
var transRent = require('./routes/rent');
var transSold = require('./routes/sold');
var transAgent = require('./routes/agent');
var transAgents = require('./routes/agents');
var property = require('./routes/property');
var propertyAppraisal = require('./routes/propertyAppraisal.js');
var transContact = require('./routes/contact.js');
var transAbout = require('./routes/about');
var _ = require('lodash');

var app = express();
var Promise = require('q');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

var compression = require('compression');
app.use(compression());

app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


app.use('/', index);
app.use('/users', users);
app.get('/buy', trans.buy);
app.get('/buy/:type', trans.buy);
app.get('/buy/:type/getProperties', trans.buy.getProperties);

app.get('/rent', transRent.rent);
app.get('/rent/:type', transRent.rent);
app.get('/rent/:type/getProperties', transRent.rent.getProperties);

app.get('/sold', transSold.sold);
app.get('/sold/:type', transSold.sold);
app.get('/sold/:type/getProperties', transSold.sold.getProperties);

app.get('/agent', transAgent.agent);
app.get('/agent/:agentId', transAgent.agent);
app.get('/agent/:name/:agentId', transAgent.agent);
app.get('/agentDetails/:agentId', transAgent.agentDetails);

app.get('/agents', transAgents.agents);
app.get('/agents/getAgents', transAgents.getAgents);

app.get('/propertyAppraisal', propertyAppraisal.propertyAppraisal);
app.get('/contact', transContact.contact);

app.get('/about', transAbout);


app.get('/property/:suburb/:street/:streetNumber/:uniqueId', property.details);
app.get('/property/:suburb/:street/:streetNumber/:streetNumber2/:uniqueId', property.details);

app.get('/property/getProperty/:uniqueId', property.details.getProperty);

app.get('/api/getUnSoldProperties', api.getUnSoldProperties);
app.get('/api/getSoldProperties', api.getSoldProperties);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/propertyAppraisal/save', function (req, res) {
    return propertyAppraisal.save(req, res);
});

app.post('/contact/save', function (req, res) {
    return transContact.save(req, res);
});

app.get('/:file(*)', function (req, res, next) {
    var file = req.params.file
    , path = __dirname + '/public/applicationForm/' + file;
    var fs = require('fs');

    fs.readFile(path, function (err, content) {
        if (err) {
            res.writeHead(400, { 'Content-type': 'text/html' })
            console.log(err);
            res.end("No such file");
        } else {
            //specify Content will be an attachment
            res.setHeader('Content-disposition', 'attachment; filename=' + file);
            res.end(content);
        }
    });
    //res.download(path);
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.send('OOPS!. Something went wrong. This link does not exists.', 404);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
//});

app.listen(90);

/*start chokidar*/
var chokidar = require('chokidar');

var watcher = chokidar.watch('./public/xmlfiles/', {
    ignored: /[\/\\]\./,
    persistent: true
});

var filesToProcess = [];

watcher
  .on('add', function (filePath) 
      {
        //console.log(event, path.extname(filePath));
    if (path.extname(filePath) == ".xml") {
        setTimeout(function () {
            addFileToProcess(filePath);
            counter--;
        }, (counter++ * interval));
            
    }
});
var promise = null;
var interval = 8000;
var counter = 1;

var addFileToProcess = function (xmlPath) {
    filesToProcess.push(xmlPath)
    var that = this;
    //return promiseWhile(function () { return filesToProcess.length > 0 }, function () {
    //    var xmlPath = filesToProcess.pop();
    //    if (xmlPath) {
    //        console.log("------------" + xmlPath + "-----------------");
    //        filesToProcess.splice(xmlPath, 1);
            

    //        return addFileCheck(xmlPath).then(function () {
    //            console.log("DONE" + xmlPath + "DONE");
    //            return Promise.when([]);
    //        });
    //    }
    //});
    //_.forEach(filesToProcess, function (xPath) {
    //    //if (promise) {
    //    //    filesToProcess.splice(xPath, 1);
    //    //    interval = interval - 15000;
    //    //    promise.then(function () {
    //    //        setTimeout(function () {
    //    //            that.promise = addFileCheck(xPath);
    //    //        }, counter * interval);  });
    //    //}
    //    //else {
    //    filesToProcess.splice(xPath, 1);
    //    counter++;
    //        setTimeout(function () {
    //            that.promise = addFileCheck(xPath);
    //        }, (counter * interval));
            
    //    //}
    //})
    
    that.promise = addFileCheck(xmlPath);
    promise = null;
    //counter = 0;
    //_.forEach(filesToProcess, function (xPath) {
    //    addFileCheck(xPath).then(function () { 
    //        return
    //    });
    //})
}

var addFileCheck = function (xmlPath) {
    var fs = require('fs');

    var data = fs.readFileSync(xmlPath)
    return parseXmlFile(data).then(function (result) {
        if (result && result.propertyList) {
            var propertyList = toCamelCase(result.propertyList);
            var processed = false;
            return processProperty(propertyList, fs, request, path, xmlPath);
        }
        else {
            return Promise.when([]);
        }
    
    });


}

var parseXmlFile = function (data) {
    var deferred = Promise.defer();
    var xml2js = require('xml2js')
    var parser = new xml2js.Parser({ explicitArray : false, mergeAttrs: true });    
    var result = parser.parseString(data, function (err, stdout, stderr) {
            if (err) {
                return deferred.reject(err);
            }
            return deferred.resolve(stdout);
        });
    return deferred.promise;
}

var processProperty = function (propertyJSON, fs, request, path, xmlPath) {
    var processRentalJSONModule = require('./processRentalJSONModule.js');
    console.log("processRentalJSONModule.init called");
    return processRentalJSONModule.init(propertyJSON, fs, request, path, xmlPath);
}   

function promiseWhile(condition, body) {
    var done = Promise.defer();
    
    function loop() {
        // When the result of calling `condition` is no longer true, we are
        // done.
        if (!condition()) return done.resolve();
        // Use `when`, in case `body` does not return a promise.
        // When it completes loop again otherwise, if it fails, reject the
        // done promise
        Promise.when(body(), loop, done.reject);
    }
    
    // Start running the loop in the next tick so that this function is
    // completely async. It would be unexpected if `body` was called
    // synchronously the first time.
    Promise.nextTick(loop);
    
    // The promise
    return done.promise;
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