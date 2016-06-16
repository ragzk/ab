/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');

export class propertyFeatureRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertyfeatureInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getPropertyFeature(id: number) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { propertyId: id };
        var r = models.propertyfeature.find({ where: { propertyId: id } });
        return r;
    }

    savePropertyFeature(rentalObj: IRental) {
        try {
            return this.getPropertyFeature(rentalObj.propertyId).then(function (e) {
                var feature = e;
                if (feature) {
                    feature.propertyId.PropertyId = rentalObj.propertyId;
                    feature.bedroom = rentalObj.features.bedrooms;
                    feature.bathroom = rentalObj.features.bathrooms;
                    feature.garages = rentalObj.features.garages;
                    feature.carports = rentalObj.features.carports;
                    feature.airConditioning = rentalObj.features.airConditioning;
                    feature.alarmSystem = rentalObj.features.alarmSystem;   
                    feature.pool = rentalObj.features.pool;   
                    feature.otherFeatures = rentalObj.features.otherFeatures;   
                }
                else {
                    feature = models.propertyfeature.build({
                        propertyId: <any>rentalObj.propertyId,
                        bedroom: rentalObj.features.bedrooms,
                        bathroom: rentalObj.features.bathrooms,
                        garages: rentalObj.features.garages,
                        carports: rentalObj.features.carports,
                        airConditioning: rentalObj.features.airConditioning,
                        alarmSystem: rentalObj.features.alarmSystem,
                        pool: rentalObj.features.pool,
                        otherFeatures: rentalObj.features.otherFeatures,
                    });
                }
                feature.save();
                this._instance = feature;
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }
    //models.locations.create();
}


