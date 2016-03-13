/// <reference path="../typings/moment/moment.d.ts" />


import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
import moment = require('moment');


export class propertyRepo {
    _dbConfig: dbConfig.dbConfig;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getProperty(id: number) {

        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { uniqueId: id };
        return models.property.findAll(findOptions);
    }

    saveProperty(rentalObj: IRental) {        

        try {
            var loc = this.getProperty(rentalObj.uniqueID);
            if (this.getProperty(rentalObj.uniqueID)) {
            }
            else {

                var loc = models.property.build({
                    headline: rentalObj.headline,
                    uniqueId: rentalObj.uniqueID,
                    identifier: rentalObj.uniqueID.toString(),
                    name: rentalObj.uniqueID.toString(),
                    dateAvailable: rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null,
                    rent: parseFloat(rentalObj.rent._),
                    category: rentalObj.category.name.toString(),
                    inspectionTimes: rentalObj.inspectionTimes.inspection,
                    longitude: rentalObj.geocode.longitude || null,
                    latitude: rentalObj.geocode.latitude || null,
                    isRental: rentalObj.priceView ? false : true,
                    priceView: rentalObj.priceView,
                    bond: rentalObj.bond
                });
            }
            loc.save();
        }
        catch (ex) {
            throw ex;
        }
    }

    //models.locations.create();
}


