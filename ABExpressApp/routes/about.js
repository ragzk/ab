var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var router = express.Router();
var statsLogging = require("../routes/statsLogging.js");

router.get('/about', function (req, res) {
    statsLogging.addLogging('about', null, req);
    var data = { title: "About us" };
    if (req.xhr) {
        res.render('about', { layout: false, data: data });
    }
    else {
        res.render('about', {data : data});
    }
    
});

module.exports = router;