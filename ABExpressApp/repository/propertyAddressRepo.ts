/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');

export class propertyAddressRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertyaddressInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getPropertyAddress(id: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { propertyId: id };
        var r = models.propertyaddress.find({ where: { propertyId: id } });
        return r;
    }

    savePropertyAddress(rentalObj: IRental) {
        try {
            return this.getPropertyAddress(rentalObj.propertyId).then(function (e) {
                var address = e;
                if (address) {
                    address.propertyId.PropertyId = rentalObj.propertyId;
                    address.streetNumber = rentalObj.address.streetNumber;
                    address.street = rentalObj.address.street;
                    address.suburb = rentalObj.address.suburb;
                    address.state = rentalObj.address.state;
                    address.postcode = rentalObj.address.postcode;
                }
                else {
                    address = models.propertyaddress.build({
                        propertyId: <any>rentalObj.propertyId,
                        streetNumber: rentalObj.address.streetNumber,
                        street: rentalObj.address.street,
                        suburb: rentalObj.address.suburb,
                        state: rentalObj.address.state,
                        postcode: rentalObj.address.postcode,
                    });
                }
                address.save();
                this._instance = address;
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }
    //models.locations.create();
}


