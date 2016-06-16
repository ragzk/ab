/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');

export class propertyDescriptionRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertydescriptionInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getPropertyDescription(id: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { propertyId: id };
        var r = models.propertydescription.find({ where: { propertyId: id } });
        return r;
    }

    savePropertyDescription(rentalObj: IRental) {
        try {
            return this.getPropertyDescription(rentalObj.propertyId).then(function (e) {
                var description = e;
                if (description) {
                    description.propertyId.PropertyId = rentalObj.propertyId;
                    description.propertydescription = rentalObj.description;
                }
                else {
                    description = models.propertydescription.build({
                        propertyId: <any>rentalObj.propertyId,
                        propertydescription: rentalObj.description
                    });
                }
                description.save();
                this._instance = description;
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }
    //models.locations.create();
}


