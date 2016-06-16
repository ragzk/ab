/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var _ = require('lodash');
var Promise = require('q');
//import rentalDefinitions = require('rentalDefinitions');
var agentRepo = (function () {
    function agentRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    agentRepo.prototype.getagents = function () {
        var findOptions = {};
        findOptions.where = { isActive: 1 };
        var r = models.agent.findAll(findOptions);
        return r;
    };
    agentRepo.prototype.getagent = function (id) {
        var findOptions = {};
        findOptions.where = { agentId: id, isActive: 1 };
        var r = models.agent.find(findOptions);
        return r;
    };
    return agentRepo;
})();
exports.agentRepo = agentRepo;
//# sourceMappingURL=agentRepo.js.map