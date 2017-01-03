var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");
//exports.agent = function (req, res) {
//    var name = req.params.name || "All";
//    res.render('agent', {
//        name: name
//    });
//};

//exports.agent = function (req, res) {
//    var agentId = req.params.agentId;
//    res.render('agent', {
//        agentId: agentId
//    });
//};

exports.agent = function (req, res) {
    var agentId = req.params.agentId;
    var name = req.params.name;
    statsLogging.addLogging('agent/' + name, null, req);
    var data = {
        agentId: agentId,
        title: "Agent - " + name
    };
    if (req.xhr) {
        res.render('agent', { layout: false, data: data });
    }
    else {
        res.render('agent', { data: data});
    }
    //res.render('agent', {layout: !req.xhr, data: data});

};

module.exports.agentDetails = function (req, res) {
    var id = req.params.agentId;
    var agentReport = require("../repository/agentRepo");
    var repo = new agentReport.agentRepo();
    repo.getagent(id).then(function (data) {
        res.json(data);
    })
};



//module.exports.agent.getAgents = function (req, res) {
//    var agentReport = require("../repository/agentRepo");
//    var repo = new agentReport.agentRepo();
//    repo.getagents().then(function (data) {
//        res.json(data);
//    })
//};



