/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
import moment = require('moment');
var _ = require('lodash');
var Promise = require('q');
//import rentalDefinitions = require('rentalDefinitions');

export class agentRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.agentInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getagents() {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { isActive: 1};
        var r = models.agent.findAll(findOptions);
        return r;
    }

    getagent(id: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = {agentId: id, isActive: 1 };
        var r = models.agent.find(findOptions);
        return r;
    }

}


