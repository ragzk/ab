/// <reference path="../typings/moment/moment.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var moment = require('moment');
var propertyRepo = (function () {
    function propertyRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyRepo.prototype.getProperty1 = function (id) {
        var findOptions = {};
        findOptions.where = { uniqueId: id };
        var r = models.property.find({ where: { uniqueId: id } });
        return r;
    };
    propertyRepo.prototype.saveProperty = function (rentalObj) {
        try {
            this.getProperty1(rentalObj.uniqueID).then(function (e) {
                var loc = e;
                if (loc) {
                    loc.headline = rentalObj.headline;
                    loc.uniqueId = rentalObj.uniqueID;
                    loc.identifier = rentalObj.uniqueID.toString();
                    loc.name = rentalObj.uniqueID.toString();
                    loc.dateAvailable = rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null;
                    loc.rent = parseFloat(rentalObj.rent._);
                    loc.category = rentalObj.category.name.toString();
                    loc.inspectionTimes = rentalObj.inspectionTimes.inspection;
                    loc.longitude = rentalObj.geocode.longitude || null;
                    loc.latitude = rentalObj.geocode.latitude || null;
                    loc.isRental = rentalObj.priceView ? false : true;
                    loc.priceView = rentalObj.priceView;
                    loc.bond = rentalObj.bond;
                }
                else {
                    loc = models.property.build({
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
                this._instance = loc;
            });
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyRepo;
})();
exports.propertyRepo = propertyRepo;
//# sourceMappingURL=propertyRepo.js.map