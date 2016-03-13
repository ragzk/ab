/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');

export class propertyAddressRepo {
    _dbConfig: dbConfig.dbConfig;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getLocation(id: number) {

        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { id: id };
        return models.propertyaddress.findAll(findOptions);
    }

    saveLocation(rentalObj: IRental) {
        var loc = models.propertyaddress.build({
            identifier: rentalObj.address.suburb.display,
            name: rentalObj.address.suburb.text,
            postcode: rentalObj.address.postcode,
        });
    }

    //models.locations.create();
}


