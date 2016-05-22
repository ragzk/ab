var express = require('express');
var fs = require('fs');
var _ = require('lodash')

exports.agents = function (req, res) {
    res.render('agents');
};

module.exports.getAgents = function (req, res) {
    var id = req.params.agentId;
    var agentReport = require("../repository/agentRepo");
    var repo = new agentReport.agentRepo();
    repo.getagents().then(function (data) {
        res.json(data);
    })
};
