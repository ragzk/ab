var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.buy = function (req, res) {
    var type = req.params.type || "All";
    var getPropertiesUrl = '/buy/' + type + '/getProperties';
    var route = req.params.type ? 'buy/' + req.params.type  : 'buy';
    statsLogging.addLogging(route , null, req);
    res.render('buy', {
        type: type,
        getPropertiesUrl: getPropertiesUrl
    });
};

//exports.buy.displayDetails = function (req, res) {
//    var suburb = req.params.suburb;
//    var streetNumber = req.params.streetNumber;
//    var street = req.params.street;
//    res.render('buy', {
//        suburb: suburb
//    });
//};


module.exports.buy.getProperties = function (req, res) {
    var type = req.params.type;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getProperties("buy", type).then(function (data) {
        res.json(data);
    })
    
};


