var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.propertyAppraisal = function (req, res) {
    statsLogging.addLogging('propertyAppraisal', null, req);
    var data = { title: "Property Appraisal" };
    if (req.xhr) {
        res.render('propertyAppraisal', { layout: false, data: data});
    }
    else {
        res.render('propertyAppraisal', { data: data});
    }    
};


exports.save = function (req, res) {
    var email = req.body.email;
    var fullname = req.body.fullname;
    var propertyAddress = req.body.propertyAddress;
    var phoneNumber = req.body.phoneNumber;
    var that = this;
    statsLogging.addLogging('propertyAppraisal/save', null, req);
    var propertyAppraisalObject = {
        email: email,
        fullname: fullname,
        phoneNumber: phoneNumber,
        propertyAddress: propertyAddress
    }    
    
    var propertyAppraisalReport = require("../repository/propertyAppraisalRepo");
    var repo = new propertyAppraisalReport.propertyAppraisalRepo();
    repo.save(propertyAppraisalObject).then(function (data) {
        var nodemailer = require('nodemailer');
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                XOAuth2: {
                    user: "microappjs@gmail.com", // Your gmail address.
                    clientId: "1096973232812-b901igt0jb3to3ptj614tu2759l3uqr9.apps.googleusercontent.com",
                    clientSecret: "tEkIy6xS47FYKu0-1RhP9GAv",
                    refreshToken: "1/95bFZVj1070dYff1xIN2iFlPYHz5wrLipGAW142inpc"
                }
            }
        });
        
        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: '<microappjs@gmail.com>', // sender address
            to: 'kamrag@gmail.com', // list of receivers , ab@abproperties.com.au
            subject: 'Property Appraisal requested', // Subject line
            text: 'Property Appraisal requested by ' + data.fullName + ' for property ' + data.propertyAddress + ' ( email address: ' + data.email + ' phone number ' + data.phoneNumber + ' )', // plaintext body
        };
        
        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json(error);
            }
            res.json(info.response);
        });


         //MAILGUN
        //var api_key = 'key-8cfe39e36149da9600caa5dce02f9aa1';
        //var domain = 'abtest-mx-test.com';
        //var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
        
        //var data = {
        //    from: 'Excited User <me@samples.mailgun.org>',
        //    to: 'kamrag@gmail.com',
        //    subject: 'Hello',
        //    text: 'Testing some Mailgun awesomness!'
        //};  
        
        //mailgun.messages().send(data, function (error, body) {
        //    console.log(body);
        //});

        //var sendgrid = require("sendgrid")("microappjs", "janison1!");
        //var email = new sendgrid.Email();
        
        //email.addTo("kamrag@gmail.com");
        //email.setFrom("microappjs@gmail.com");
        //email.setSubject("Sending with SendGrid is Fun");
        //email.setHtml("and easy to do anywhere, even with Node.js");
        
        //var emailSent = function (e) {
        //    console.log(e);
        //}
        //try {
        //    sendgrid.send(email, emailSent);
        //}
        //catch(err) {
        //    console.log(err);
        //}

        return res.json('success');
    })
}
