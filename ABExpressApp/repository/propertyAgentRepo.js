/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');
var propertyagentRepo = (function () {
    function propertyagentRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyagentRepo.prototype.getpropertyagents = function (id, mydesktopAgentId) {
        var findOptions = {};
        var transaction = {};
        transaction.ISOLATION_LEVELS = { READ_UNCOMMITTED: 'READ_UNCOMMITTED' };
        transaction.LOCK = { UPDATE: 'UPDATE' };
        findOptions.where = { propertyId: id, mydesktopAgentId: mydesktopAgentId };
        findOptions.include = [{ model: models.agent, required: false }];
        var queryOptions = {};
        queryOptions.transaction = transaction;
        var r = models.propertyagent.find(findOptions, queryOptions);
        return r;
    };
    propertyagentRepo.prototype.getpropertyagentsByEmail = function (id, email) {
        var findOptions = {};
        var transaction = {};
        transaction.ISOLATION_LEVELS = { READ_UNCOMMITTED: 'READ_UNCOMMITTED' };
        transaction.LOCK = { UPDATE: 'UPDATE' };
        findOptions.where = { propertyId: id, email: email };
        findOptions.include = [{ model: models.agent, required: false }];
        var queryOptions = {};
        queryOptions.transaction = transaction;
        var r = models.propertyagent.find(findOptions, queryOptions);
        return r;
    };
    propertyagentRepo.prototype.getagent = function (mydesktopAgentId) {
        var findOptions = {};
        findOptions.where = { mydesktopAgentId: mydesktopAgentId };
        var transaction = {};
        transaction.ISOLATION_LEVELS = { READ_UNCOMMITTED: 'READ_UNCOMMITTED' };
        transaction.LOCK = { UPDATE: 'UPDATE' };
        var queryOptions = {};
        queryOptions.transaction = transaction;
        var r = models.agent.find(findOptions, queryOptions);
        return r;
    };
    propertyagentRepo.prototype.getagentByEmail = function (email) {
        var findOptions = {};
        findOptions.where = { email: email };
        var transaction = {};
        transaction.ISOLATION_LEVELS = { READ_UNCOMMITTED: 'READ_UNCOMMITTED' };
        transaction.LOCK = { UPDATE: 'UPDATE' };
        var queryOptions = {};
        queryOptions.transaction = transaction;
        var r = models.agent.find(findOptions, queryOptions);
        return r;
    };
    propertyagentRepo.prototype.savepropertyagent = function (agent, propertyId) {
        try {
            var that = this;
            if (agent.email == undefined) {
                return;
            }
            return that.getagentByEmail(agent.email).then(function (abAgent) {
                if (abAgent) {
                    that.getpropertyagents(propertyId, abAgent.mydesktopAgentId).then(function (e) {
                        var propertyAgent = e;
                        if (propertyAgent) {
                        }
                        else {
                            propertyAgent = models.propertyagent.build({
                                propertyId: propertyId,
                                agentId: abAgent.agentId,
                                mydesktopAgentId: abAgent.mydesktopAgentId
                            });
                            return propertyAgent.save();
                        }
                    });
                }
                else {
                    abAgent = models.agent.build({
                        name: agent.name,
                        mobile: agent.telephone[0].text,
                        email: agent.email,
                        mydesktopAgentId: agent.agentid
                    });
                    abAgent.save().then(function (dbAgent) {
                        var propertyAgent = models.propertyagent.build({
                            propertyId: propertyId,
                            agentId: dbAgent.agentId,
                            mydesktopAgentId: agent.agentid
                        });
                        return propertyAgent.save();
                    });
                }
            });
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyagentRepo;
})();
exports.propertyagentRepo = propertyagentRepo;
//# sourceMappingURL=propertyAgentRepo.js.map