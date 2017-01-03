var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.details = function (req, res) {
    var suburb = req.params.suburb;
    var streetNumber = req.params.streetNumber;
    var street = req.params.street;
    var uniqueId = req.params.uniqueId;
    statsLogging.addLogging('property', uniqueId, req);
    var data = {
        uniqueId: uniqueId
    };
    if (req.xhr) {
        res.render('property', {
            layout: false, 
            data: data
        });
    }
    else {
        res.render('property', {
            uniqueId: uniqueId
        });

    } 
};

exports.details = function (req, res) {
    var suburb = req.params.suburb;
    var streetNumber = req.params.streetNumber;
    var streetNumber2 = req.params.streetNumber2;
    
    var street = req.params.street;
    var uniqueId = req.params.uniqueId;
    statsLogging.addLogging('property', uniqueId, req);
    var data = {
        uniqueId: uniqueId,
        title: "Property " + streetNumber + " " + streetNumber2 + " " + street
    };    
    if (req.xhr) {
        res.render('property', {
            layout: false, 
            data: data
        });
    }
    else {
        res.render('property', {
            data: data
        });

    } 
};



module.exports.details.getProperty = function (req, res) {
    var uniqueId = req.params.uniqueId;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getPropertyByUniqueId(uniqueId).then(function (data) {
        res.json(data);
    })
};






