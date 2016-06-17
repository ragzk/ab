/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
import moment = require('moment');
var _ = require('lodash');
var Promise = require('q');

export class statsLoggingRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.statsloggingInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { host: this._dbConfig.host, define: { freezeTableName: true } });
    }

    save(obj: any) {
        try {
            var that = this;
            var statsLogging = models.statslogging.build({
                route: obj.route,
                propertyId: obj.propertyId,
                ipAddress: obj.ipAddress,
                dateTime: moment(moment.utc()).toDate(),
                isMobile: obj.isMobile,
                userAgent: obj.userAgent
            });
            return statsLogging.save();
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }

}


