var express = require('express');
var fs = require('fs');
var _ = require('lodash')


exports.details = function (req, res) {
    var suburb = req.params.suburb;
    var streetNumber = req.params.streetNumber;
    var street = req.params.street;
    var uniqueId = req.params.uniqueId;
    res.render('property', {
        uniqueId: uniqueId
    });
};

exports.details = function (req, res) {
    var suburb = req.params.suburb;
    var streetNumber = req.params.streetNumber;
    var streetNumber2 = req.params.streetNumber2;
    
    var street = req.params.street;
    var uniqueId = req.params.uniqueId;
    res.render('property', {
        uniqueId: uniqueId
    });
};



module.exports.details.getProperty = function (req, res) {
    var uniqueId = req.params.uniqueId;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getPropertyByUniqueId(uniqueId).then(function (data) {
        res.json(data);
    })
};






