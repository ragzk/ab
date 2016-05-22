var express = require('express');
var fs = require('fs');
var _ = require('lodash')


exports.rent = function (req, res) {
    var type = req.params.type || "All";
    var getPropertiesUrl = '/rent/' + type + '/getProperties';
    res.render('rent', {
        type: type,
        getPropertiesUrl: getPropertiesUrl
    });
};



module.exports.rent.getProperties = function (req, res) {
    var type = req.params.type;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getProperties("rent", type).then(function (data) {
        res.json(data);
    })
    
};


