/// <reference path="../enums.ts" />
/// <reference path="../typings/moment/moment.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var moment = require('moment');
var _ = require('lodash');
var Promise = require('q');
//import rentalDefinitions = require('rentalDefinitions');
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
    propertyRepo.prototype.getProperties = function (tran, type) {
        var findOptions = {};
        var where = {};
        if (tran == "buy") {
            _.extend(where, {
                status: 'current',
                $or: [
                    {
                        type: 'residential'
                    },
                    {
                        type: 'land'
                    }
                ]
            });
        }
        if (tran == "rent") {
            _.extend(where, {
                status: 'current'
            });
        }
        if (tran == "sold") {
            _.extend(where, { status: 'sold' });
        }
        if (tran == "rent") {
            _.extend(where, { type: "rental" });
        }
        if (type == "inspection") {
            _.extend(where, { inspectionTimes: { ne: null } });
        }
        findOptions.where = where;
        findOptions.order = [['propertyId', 'DESC']];
        findOptions.include = [{ model: models.propertyaddress, required: false },
            { model: models.propertyfeature, required: false },
            { model: models.propertydescription, required: false }
        ];
        //var r = models.property.findAll({ where: { isRental: false, status: 'current' } });
        var r = models.property.findAll(findOptions);
        return r;
    };
    propertyRepo.prototype.getPropertyByUniqueId = function (uniqueId) {
        var findOptions = {};
        findOptions.where = { uniqueId: uniqueId };
        findOptions.include = [{ model: models.propertyaddress, required: false },
            { model: models.propertyfeature, required: false },
            { model: models.propertydescription, required: false },
            { model: models.propertyimage, required: false },
            { model: models.propertyagent, required: false, include: [{ model: models.agent }] }
        ];
        //var r = models.property.findAll({ where: { isRental: false, status: 'current' } });
        var r = models.property.find(findOptions);
        return r;
    };
    propertyRepo.prototype.saveProperty = function (rentalObj) {
        try {
            return this.getProperty1(rentalObj.uniqueID).then(function (e) {
                var loc = e;
                if (loc) {
                    if (loc.lastUpdateFileNumber < rentalObj.lastUpdateFileNumber) {
                        loc.headline = rentalObj.headline;
                        loc.uniqueId = rentalObj.uniqueID;
                        loc.identifier = rentalObj.uniqueID.toString();
                        loc.name = rentalObj.uniqueID.toString();
                        loc.dateAvailable = rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null;
                        loc.rent = rentalObj.rent ? parseFloat(rentalObj.rent._) : null;
                        loc.category = rentalObj.category ? rentalObj.category.name.toString() : "Land";
                        loc.inspectionTimes = rentalObj.inspectionTimes ? Array.isArray(rentalObj.inspectionTimes.inspection) ? rentalObj.inspectionTimes.inspection.toString() : rentalObj.inspectionTimes.inspection : null;
                        loc.longitude = rentalObj.geocode && rentalObj.geocode.longitude || null;
                        loc.latitude = rentalObj.geocode && rentalObj.geocode.latitude || null;
                        loc.type = rentalObj.type;
                        loc.priceView = rentalObj.priceView;
                        loc.bond = rentalObj.bond;
                        loc.soldDate = rentalObj.soldDetails ? rentalObj.soldDetails.date : null;
                        loc.soldPrice = rentalObj.soldDetails ? rentalObj.soldDetails.price.text : null;
                        loc.modifiedTime = rentalObj.modTime;
                        loc.imageUrl = rentalObj.imageUrl;
                        loc.status = rentalObj.status.toString();
                        loc.lastUpdateFileNumber = rentalObj.lastUpdateFileNumber;
                        loc.underOffer = rentalObj.underOffer ? rentalObj.underOffer.value == "yes" ? true : false : false;
                        return loc.save();
                    }
                    else {
                        return Promise.resolve(loc);
                    }
                }
                else {
                    loc = models.property.build({
                        headline: rentalObj.headline,
                        uniqueId: rentalObj.uniqueID,
                        identifier: rentalObj.uniqueID.toString(),
                        name: rentalObj.uniqueID.toString(),
                        dateAvailable: rentalObj.dateAvailable ? moment(rentalObj.dateAvailable).toDate() : null,
                        rent: rentalObj.rent ? parseFloat(rentalObj.rent._) : null,
                        category: rentalObj.category ? rentalObj.category.name.toString() : "Land",
                        inspectionTimes: rentalObj.inspectionTimes ? Array.isArray(rentalObj.inspectionTimes.inspection) ? rentalObj.inspectionTimes.inspection.toString() : rentalObj.inspectionTimes.inspection : null,
                        longitude: rentalObj.geocode && rentalObj.geocode.longitude || null,
                        latitude: rentalObj.geocode && rentalObj.geocode.latitude || null,
                        type: rentalObj.type,
                        priceView: rentalObj.priceView,
                        bond: rentalObj.bond,
                        soldDate: rentalObj.soldDetails ? rentalObj.soldDetails.date : null,
                        soldPrice: rentalObj.soldDetails ? rentalObj.soldDetails.price.text : null,
                        modifiedTime: rentalObj.modTime,
                        imageUrl: rentalObj.imageUrl,
                        status: rentalObj.status.toString(),
                        lastUpdateFileNumber: rentalObj.lastUpdateFileNumber,
                        underOffer: rentalObj.underOffer ? rentalObj.underOffer.value == "yes" ? true : false : false
                    });
                    try {
                        return loc.save();
                    }
                    catch (ex) {
                        throw ex;
                    }
                }
                //rentalObj.propertyId = +loc.propertyId;
                console.log(rentalObj.type + " " + rentalObj.fileName);
                //this._instance = loc
                //return this._instance;
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