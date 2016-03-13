/// <reference path="../typings/moment/moment.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var moment = require('moment');
var propertyRepo = (function () {
    function propertyRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyRepo.prototype.getProperty = function (id) {
        var findOptions = {};
        findOptions.where = { uniqueId: id };
        return models.property.findAll(findOptions);
    };
    propertyRepo.prototype.saveProperty = function (rentalObj) {
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
    };
    return propertyRepo;
})();
exports.propertyRepo = propertyRepo;
//# sourceMappingURL=propertyRepo.js.map