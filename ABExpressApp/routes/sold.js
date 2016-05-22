var express = require('express');
var fs = require('fs');
var _ = require('lodash')


exports.sold = function (req, res) {
    var type = req.params.type || "All";
    var getPropertiesUrl = '/sold/' + type + '/getProperties';
    res.render('sold', {
        type: type,
        getPropertiesUrl: getPropertiesUrl
    });
};



module.exports.sold.getProperties = function (req, res) {
    var type = req.params.type;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getProperties("sold", type).then(function (data) {
        res.json(data);
    })
    
};


