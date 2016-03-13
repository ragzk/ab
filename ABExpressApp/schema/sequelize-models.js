////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.property = exports.SEQUELIZE.define('property', {
        'propertyId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'name': Sequelize.STRING,
        'identifier': Sequelize.STRING,
        'dateAvailable': Sequelize.DATE,
        'rent': Sequelize.INTEGER,
        'category': Sequelize.STRING,
        'inspectionTimes': Sequelize.STRING,
        'latitude': Sequelize.DECIMAL,
        'longitude': Sequelize.DECIMAL,
        'isRental': Sequelize.INTEGER,
        'priceView': Sequelize.STRING,
        'bond': Sequelize.DECIMAL,
        'uniqueId': Sequelize.INTEGER,
        'headline': Sequelize.STRING
    }, {
        timestamps: false,
        classMethods: {
            getproperty: function (property) {
                var where = {};
                var id = parseInt(property);
                if (isNaN(id)) {
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
                    if (property['uniqueId'] !== undefined) {
                        where['uniqueId'] = property['uniqueId'];
                    }
                    if (property['headline'] !== undefined) {
                        where['headline'] = property['headline'];
                    }
                }
                else {
                    where['propertyId'] = id;
                }
                return property.find({ where: where });
            }
        }
    });
    exports.propertyaddress = exports.SEQUELIZE.define('propertyaddress', {
        'id': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'name': Sequelize.STRING,
        'identifier': Sequelize.STRING,
        'postcode': Sequelize.STRING,
        'propertyId': Sequelize.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            getpropertyaddress: function (propertyaddress) {
                var where = {};
                var id = parseInt(propertyaddress);
                if (isNaN(id)) {
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
                }
                else {
                    where['propertyId'] = id;
                }
                return propertyaddress.find({ where: where });
            }
        }
    });
    exports.propertyfeature = exports.SEQUELIZE.define('propertyfeature', {
        'id': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'propertyId': Sequelize.INTEGER,
        'bedroom': Sequelize.INTEGER,
        'bathroom': Sequelize.INTEGER,
        'garages': Sequelize.INTEGER,
        'carports': Sequelize.INTEGER,
        'airConditioning': Sequelize.BLOB,
        'alarmSystem': Sequelize.BLOB,
        'pool': Sequelize.BLOB,
        'otherFeatures': Sequelize.STRING,
        'propertyfeaturecol': Sequelize.STRING
    }, {
        timestamps: false,
        classMethods: {
            getpropertyfeature: function (propertyfeature) {
                var where = {};
                var id = parseInt(propertyfeature);
                if (isNaN(id)) {
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
                }
                else {
                    where['propertyId'] = id;
                }
                return propertyfeature.find({ where: where });
            }
        }
    });
    return exports;
}
exports.initialize = initialize;
//# sourceMappingURL=sequelize-models.js.map