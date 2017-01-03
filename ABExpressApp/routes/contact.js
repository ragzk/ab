var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.contact = function (req, res) {
    statsLogging.addLogging('contact', null, req);
    var data = { title: "Contact" };
    if (req.xhr) {
        res.render('contact', { layout: false, data: data });
    }
    else {
        res.render('contact', { data: data});
    }        
    
};


exports.save = function (req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var subject = req.body.subject;
    var message = req.body.message;
    var that = this;
    statsLogging.addLogging('contact/save', null, req);
    var contactObject = {
        email: email,
        name: name,
        subject: subject,
        message: message
    }
    
    var contactReport = require("../repository/contactRepo");
    var repo = new contactReport.contactRepo();
    repo.save(contactObject).then(function () {
        var success = { success: true };
        return res.json(success);
    });

    //return true;
}


