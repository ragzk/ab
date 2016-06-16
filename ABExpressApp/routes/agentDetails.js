var express = require('express');
var fs = require('fs');
var _ = require('lodash')
var statsLogging = require("../routes/statsLogging.js");

module.exports.agentDetails = function (req, res) {
    var id = req.params.agentId;
    var agentReport = require("../repository/agentRepo");
    statsLogging.addLogging('agents', null, req);
    var repo = new agentReport.agentRepo();
    repo.getagent(id).then(function (data) {
        res.json(data);
    })
};
