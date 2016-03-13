////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////
"use strict";
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    var _this = this;
    if (exports.initialized) {
        return;
    }
    var sequelize = new Sequelize(database, username, password, options);
    exports.property = sequelize.define('property', {
        'propertyId': 'number',
        'name': 'string',
        'identifier': 'string',
        'dateAvailable': 'Date',
        'rent': 'number',
        'category': 'string',
        'inspectionTimes': 'string',
        'latitude': 'string',
        'longitude': 'string',
        'isRental': 'boolean',
        'priceView': 'string',
        'bond': 'string'
    }, {
        timestamps: false,
        classMethods: {
            getproperty: function (property) {
                var where = {};
                if (property['propertyId'] !== undefined) {
                    where['propertyId'] = property['propertyId'];
                }
                if (property['name'] !== undefined) {
                    where['name'] = property['name'];
                }
                if (property['identifier'] !== undefined) {
                    where['identifier'] = property['identifier'];
                }
                if (property['dateAvailable'] !== undefined) {
                    where['dateAvailable'] = property['dateAvailable'];
                }
                if (property['rent'] !== undefined) {
                    where['rent'] = property['rent'];
                }
                if (property['category'] !== undefined) {
                    where['category'] = property['category'];
                }
                if (property['inspectionTimes'] !== undefined) {
                    where['inspectionTimes'] = property['inspectionTimes'];
                }
                if (property['latitude'] !== undefined) {
                    where['latitude'] = property['latitude'];
                }
                if (property['longitude'] !== undefined) {
                    where['longitude'] = property['longitude'];
                }
                if (property['isRental'] !== undefined) {
                    where['isRental'] = property['isRental'];
                }
                if (property['priceView'] !== undefined) {
                    where['priceView'] = property['priceView'];
                }
                if (property['bond'] !== undefined) {
                    where['bond'] = property['bond'];
                }
                return _this.find({ where: where });
            }
        }
    });
    exports.propertyaddress = sequelize.define('propertyaddress', {
        'id': 'number',
        'name': 'string',
        'identifier': 'string',
        'postcode': 'string',
        'propertyId': 'number'
    }, {
        timestamps: false,
        classMethods: {
            getpropertyaddress: function (propertyaddress) {
                var where = {};
                if (propertyaddress['id'] !== undefined) {
                    where['id'] = propertyaddress['id'];
                }
                if (propertyaddress['name'] !== undefined) {
                    where['name'] = propertyaddress['name'];
                }
                if (propertyaddress['identifier'] !== undefined) {
                    where['identifier'] = propertyaddress['identifier'];
                }
                if (propertyaddress['postcode'] !== undefined) {
                    where['postcode'] = propertyaddress['postcode'];
                }
                if (propertyaddress['propertyId'] !== undefined) {
                    where['propertyId'] = propertyaddress['propertyId'];
                }
                return _this.find({ where: where });
            }
        }
    });
    exports.propertyfeature = sequelize.define('propertyfeature', {
        'id': 'number',
        'propertyId': 'number',
        'bedroom': 'number',
        'bathroom': 'number',
        'garages': 'number',
        'carports': 'number',
        'airConditioning': 'boolean',
        'alarmSystem': 'boolean',
        'pool': 'boolean',
        'otherFeatures': 'string',
        'propertyfeaturecol': 'string'
    }, {
        timestamps: false,
        classMethods: {
            getpropertyfeature: function (propertyfeature) {
                var where = {};
                if (propertyfeature['id'] !== undefined) {
                    where['id'] = propertyfeature['id'];
                }
                if (propertyfeature['propertyId'] !== undefined) {
                    where['propertyId'] = propertyfeature['propertyId'];
                }
                if (propertyfeature['bedroom'] !== undefined) {
                    where['bedroom'] = propertyfeature['bedroom'];
                }
                if (propertyfeature['bathroom'] !== undefined) {
                    where['bathroom'] = propertyfeature['bathroom'];
                }
                if (propertyfeature['garages'] !== undefined) {
                    where['garages'] = propertyfeature['garages'];
                }
                if (propertyfeature['carports'] !== undefined) {
                    where['carports'] = propertyfeature['carports'];
                }
                if (propertyfeature['airConditioning'] !== undefined) {
                    where['airConditioning'] = propertyfeature['airConditioning'];
                }
                if (propertyfeature['alarmSystem'] !== undefined) {
                    where['alarmSystem'] = propertyfeature['alarmSystem'];
                }
                if (propertyfeature['pool'] !== undefined) {
                    where['pool'] = propertyfeature['pool'];
                }
                if (propertyfeature['otherFeatures'] !== undefined) {
                    where['otherFeatures'] = propertyfeature['otherFeatures'];
                }
                if (propertyfeature['propertyfeaturecol'] !== undefined) {
                    where['propertyfeaturecol'] = propertyfeature['propertyfeaturecol'];
                }
                return _this.find({ where: where });
            }
        }
    });
}
exports.initialize = initialize;
