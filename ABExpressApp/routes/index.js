var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var router = express.Router();
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
    res.render('index', {
        title: 'Express',
        scripts: ['javascripts/custom/slider.js'],
        soldProp: soldProp,
        unSoldProp: unSoldProp
    });
    
});


module.exports = router;