/// <reference path="../enums.ts" />
/// <reference path="../typings/moment/moment.d.ts" />


import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
import moment = require('moment');
//import rentalDefinitions = require('rentalDefinitions');


export class propertyRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertyInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getProperty1(id: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { uniqueId: id };
        var r = models.property.find({ where: { uniqueId: id } });
        return r;

    }

    saveProperty(rentalObj: IRental) {        
        try {
            return this.getProperty1(rentalObj.uniqueID).then(function (e) {
                var loc = e;
                    if (loc) {
                        loc.headline = rentalObj.headline;
                        loc.uniqueId = rentalObj.uniqueID;
                        loc.identifier = rentalObj.uniqueID.toString();
                        loc.name = rentalObj.uniqueID.toString();
                        loc.dateAvailable = rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null;
                        loc.rent = rentalObj.rent ? parseFloat(rentalObj.rent._) : null;
                        loc.category = rentalObj.category ? rentalObj.category.name.toString() : "Land1";
                        loc.inspectionTimes = rentalObj.inspectionTimes ? Array.isArray(rentalObj.inspectionTimes.inspection) ? rentalObj.inspectionTimes.inspection.toString() : rentalObj.inspectionTimes.inspection : null;
                        loc.longitude = rentalObj.geocode.longitude || null;
                        loc.latitude = rentalObj.geocode.latitude || null;
                        loc.isRental = rentalObj.priceView ? false : true;
                        loc.priceView = rentalObj.priceView;
                        loc.bond = rentalObj.bond
                        loc.soldDate = rentalObj.soldDetails ? rentalObj.soldDetails.date : null;
                        loc.soldPrice = rentalObj.soldDetails ? rentalObj.soldDetails.price.text : null;
                        loc.modifiedTime = rentalObj.modTime;
                        loc.Status = rentalObj.status.toString();
                    }
                    else {
                        loc = models.property.build({
                            headline: rentalObj.headline,
                            uniqueId: rentalObj.uniqueID,
                            identifier: rentalObj.uniqueID.toString(),
                            name: rentalObj.uniqueID.toString(),
                            dateAvailable: rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null,
                            rent: rentalObj.rent ? parseFloat(rentalObj.rent._) : null,
                            category: rentalObj.category ? rentalObj.category.name.toString() : "Land1",
                            inspectionTimes: rentalObj.inspectionTimes ? Array.isArray(rentalObj.inspectionTimes.inspection) ? rentalObj.inspectionTimes.inspection.toString() : rentalObj.inspectionTimes.inspection : null,
                            longitude: rentalObj.geocode.longitude || null,
                            latitude: rentalObj.geocode.latitude || null,
                            isRental: rentalObj.priceView ? false : true,
                            priceView: rentalObj.priceView,
                            bond: rentalObj.bond,
                            soldDate: rentalObj.soldDetails ? rentalObj.soldDetails.date : null,
                            soldPrice: rentalObj.soldDetails ? rentalObj.soldDetails.price.text : null,
                            modifiedTime: rentalObj.modTime,
                            Status: rentalObj.status.toString()
                        });
                }
                    loc.save();
                    this._instance = loc
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }

    //models.locations.create();
}


