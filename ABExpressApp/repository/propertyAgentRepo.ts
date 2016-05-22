/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');

export class propertyagentRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertyagentInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getpropertyagents(id: number, mydesktopAgentId: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { propertyId: id, mydesktopAgentId: mydesktopAgentId };
        findOptions.include = [{ model: models.agent, required: false }];
        var r = models.propertyagent.find(findOptions);
        return r;
    }

    getagent(mydesktopAgentId: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { mydesktopAgentId: mydesktopAgentId };
        var r = models.agent.find(findOptions);
        return r;
    }

    savepropertyagent(agent: IListingAgent, propertyId: number) {
        try {
            var that = this;
            return this.getpropertyagents(propertyId, agent.agentid).then(function (e) {
                var propertyAgent = e;
                if (propertyAgent) {
                    //if (propertyAgent. != img.url || image.imageIndex != img.index) {
                    //image.imageId = img.id;
                    //image.imageIndex = img.index;
                    //image.imageUrl = img.url;
                    //image.save();
                    //}
                }
                else {
                    return that.getagent(agent.agentid).then(function (abAgent) {
                        if (abAgent) {

                            propertyAgent = models.propertyagent.build({
                                propertyId: <any>propertyId,
                                agentId: abAgent.agentId,
                                mydesktopAgentId: <any>agent.agentid
                            });
                            return propertyAgent.save();
                        }
                        else {
                            abAgent = models.agent.build({
                                name: agent.name,
                                mobile: agent.telephone[0].text,
                                email: agent.email,
                                mydesktopAgentId: <any>agent.agentid
                            });
                            abAgent.save().then(function (dbAgent) {
                                propertyAgent = models.propertyagent.build({
                                    propertyId: <any>propertyId,
                                    agentId: dbAgent.agentId,
                                    mydesktopAgentId: <any>agent.agentid
                                });

                                return propertyAgent.save();
                            });
                        }
                        
                    });
                }
                //this._instance = propertyAgent;
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }
    //models.locations.create();
}


