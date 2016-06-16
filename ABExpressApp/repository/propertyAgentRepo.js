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
    propertyagentRepo.prototype.savepropertyagent = function (agent, propertyId) {
        try {
            var that = this;
            this.getpropertyagents(propertyId, agent.agentid).then(function (e) {
                var propertyAgent = e;
                if (propertyAgent) {
                }
                else {
                    return that.getagent(agent.agentid).then(function (abAgent) {
                        if (abAgent) {
                            propertyAgent = models.propertyagent.build({
                                propertyId: propertyId,
                                agentId: abAgent.agentId,
                                mydesktopAgentId: agent.agentid
                            });
                            return propertyAgent.save();
                        }
                        else {
                            abAgent = models.agent.build({
                                name: agent.name,
                                mobile: agent.telephone[0].text,
                                email: agent.email,
                                mydesktopAgentId: agent.agentid
                            });
                            abAgent.save().then(function (dbAgent) {
                                propertyAgent = models.propertyagent.build({
                                    propertyId: propertyId,
                                    agentId: dbAgent.agentId,
                                    mydesktopAgentId: agent.agentid
                                });
                                return propertyAgent.save();
                            });
                        }
                    });
                }
                //this._instance = propertyAgent;
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