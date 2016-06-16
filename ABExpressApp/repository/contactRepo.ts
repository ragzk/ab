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

export class contactRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.contactInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }

    save(obj: any) {
        try {
            var that = this;
            var contact = models.contact.build({
                name: obj.name,
                email: obj.email,
                subject: obj.subject,
                message: obj.message
            });
            var r = contact.save().then(function (e) {
                return e;
            }
            );
            return r;
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }

}


