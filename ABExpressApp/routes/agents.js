var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

exports.agents = function (req, res) {
    statsLogging.addLogging('agents', null, req);
    var data = { title: "Agents" };
    if (req.xhr) {
        res.render('agents', { layout: false, data: data });
    }
    else {
        res.render('agents', { data: data});
    }
};

module.exports.getAgents = function (req, res) {
    var id = req.params.agentId;
    var agentReport = require("../repository/agentRepo");
    var repo = new agentReport.agentRepo();
    repo.getagents().then(function (data) {
        res.json(data);
    })
};
