var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.sold = function (req, res) {
    var type = req.params.type || "All";
    var route = req.params.type ? 'sold/' + req.params.type  : 'sold';
    statsLogging.addLogging(route , null, req);
    var getPropertiesUrl = '/sold/' + type + '/getProperties';
    var data = {
        type: type,
        getPropertiesUrl: getPropertiesUrl,
        title: "Sold Properties"
    };
    if (req.xhr) {
        res.render('sold', { layout: false, data: data });
    }
    else {
        res.render('sold', {
            data: data
        });
    }    
};



module.exports.sold.getProperties = function (req, res) {
    var type = req.params.type;
    var propertyReport = require("../repository/propertyRepo");
    var repo = new propertyReport.propertyRepo();
    repo.getProperties("sold", type).then(function (data) {
        res.json(data);
    })
    
};


