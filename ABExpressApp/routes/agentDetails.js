var express = require('express');
var fs = require('fs');
var _ = require('lodash')


module.exports.agentDetails = function (req, res) {
    var id = req.params.agentId;
    var agentReport = require("../repository/agentRepo");
    var repo = new agentReport.agentRepo();
    repo.getagent(id).then(function (data) {
        res.json(data);
    })
};
