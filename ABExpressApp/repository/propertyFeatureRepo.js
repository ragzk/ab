/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');
var propertyFeatureRepo = (function () {
    function propertyFeatureRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyFeatureRepo.prototype.getPropertyFeature = function (id) {
        var findOptions = {};
        findOptions.where = { propertyId: id };
        var r = models.propertyfeature.find({ where: { propertyId: id } });
        return r;
    };
    propertyFeatureRepo.prototype.savePropertyFeature = function (rentalObj) {
        try {
            return this.getPropertyFeature(rentalObj.propertyId).then(function (e) {
                rentalObj.features.airConditioningDB = rentalObj.features.airConditioning == "true" ? 1 : 0;
                rentalObj.features.alarmSystemDB = rentalObj.features.alarmSystem == "true" ? 1 : 0;
                var feature = e;
                if (feature) {
                    feature.propertyId.PropertyId = rentalObj.propertyId;
                    feature.bedroom = rentalObj.features.bedrooms;
                    feature.bathroom = rentalObj.features.bathrooms;
                    feature.garages = rentalObj.features.garages;
                    feature.carports = rentalObj.features.carports;
                    feature.airConditioning = rentalObj.features.airConditioningDB;
                    feature.alarmSystem = rentalObj.features.alarmSystemDB;
                    feature.pool = rentalObj.features.pool;
                    feature.otherFeatures = rentalObj.features.otherFeatures;
                }
                else {
                    feature = models.propertyfeature.build({
                        propertyId: rentalObj.propertyId,
                        bedroom: rentalObj.features.bedrooms,
                        bathroom: rentalObj.features.bathrooms,
                        garages: rentalObj.features.garages,
                        carports: rentalObj.features.carports,
                        airConditioning: rentalObj.features.airConditioningDB,
                        alarmSystem: rentalObj.features.alarmSystemDB,
                        pool: rentalObj.features.pool,
                        otherFeatures: rentalObj.features.otherFeatures,
                    });
                }
                feature.save();
                this._instance = feature;
            });
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyFeatureRepo;
})();
exports.propertyFeatureRepo = propertyFeatureRepo;
//# sourceMappingURL=propertyFeatureRepo.js.map