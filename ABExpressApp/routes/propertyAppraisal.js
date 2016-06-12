var express = require('express');
var fs = require('fs');
var _ = require('lodash')

exports.propertyAppraisal = function (req, res) {
    res.render('propertyAppraisal');
};


exports.save = function (req, res) {
    var email = req.body.email;
    var fullname = req.body.fullname;
    var propertyAddress = req.body.propertyAddress;
    var phoneNumber = req.body.phoneNumber;
    var that = this;
    
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
        
        //generator.on('token', function (token) {
        //    console.log('New token for %s: %s', token.user, token.accessToken);
        //});        
        
        // create reusable transporter object using the default SMTP transport
        //var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
        
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
        
        
        //var transporter = nodemailer.createTransport({
        //    service: 'Gmail',
        //    auth: {
        //        user: 'microappjs@gmail.com',
        //        pass: 'Asdf1!Asdf'
        //    }
        //});
        
        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: '<microappjs@gmail.com>', // sender address
            to: 'kamrag@gmail.com', // list of receivers
            subject: 'Property Appraisal requested', // Subject line
            text: 'Property Appraisal requested by ' + data.fullName + ' for property ' + data.propertyAddress + ' ( email address: ' + data.email + ' phone number ' + data.phoneNumber + ' )', // plaintext body
        };
        
        // send mail with defined transport object
        return smtpTransport.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json(error);
            }
            return res.json(info.response);
        });

    })

        

}