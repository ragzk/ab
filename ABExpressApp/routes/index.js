var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var router = express.Router();
var statsLogging = require("../routes/statsLogging.js");
var soldProp = [];
var unSoldProp = [];

var sliderSoldDir = "./public/images/sliderImages/sold";
fs.readdir(sliderSoldDir , function (err, files) {
    _.each(files, function (file) { soldProp.push(sliderSoldDir + "/" + file); })
})

var sliderUnSoldDir = "./public/images/sliderImages/unsold";
fs.readdir(sliderUnSoldDir , function (err, files) {
    _.each(files, function (file) { unSoldProp.push(sliderUnSoldDir + "/" + file); })
})

/* GET home page. */
router.get('/getUnSoldProperties', function (req, res) {
    return ["sdfdsf", "sdfsdfsdf"];
});

router.get('/', function (req, res) {
    statsLogging.addLogging('index', null, req);
    if (!res.getHeader('Cache-Control'))
        res.setHeader('Cache-Control', 'public, max-age=' + (120000 / 1000));    
    res.render('index', {
        title: 'Property Consultants',
        scripts: ['javascripts/custom/slider.js'],
        soldProp: soldProp,
        unSoldProp: unSoldProp
    });
    
});

module.exports = router;