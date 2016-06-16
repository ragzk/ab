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
    exports.agent = exports.SEQUELIZE.define('agent', {
        'agentId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'name': Sequelize.STRING,
        'mobile': Sequelize.STRING,
        'telephone': Sequelize.STRING,
        'workphone': Sequelize.STRING,
        'email': Sequelize.STRING,
        'facebook': Sequelize.STRING,
        'linkedin': Sequelize.STRING,
        'mydesktopAgentId': Sequelize.INTEGER,
        'isActive': Sequelize.INTEGER,
        'rateMyAgentUrl': Sequelize.STRING,
        'rateMyAgentTestimonialUrl': Sequelize.STRING
    }, {
        timestamps: false,
        classMethods: {
            getagent: function (agent) {
                var where = {};
                var id = parseInt(agent);
                if (isNaN(id)) {
                    if (agent['agentId'] !== undefined) {
                        where['agentId'] = agent['agentId'];
                    }
                    if (agent['name'] !== undefined) {
                        where['name'] = agent['name'];
                    }
                    if (agent['mobile'] !== undefined) {
                        where['mobile'] = agent['mobile'];
                    }
                    if (agent['telephone'] !== undefined) {
                        where['telephone'] = agent['telephone'];
                    }
                    if (agent['workphone'] !== undefined) {
                        where['workphone'] = agent['workphone'];
                    }
                    if (agent['email'] !== undefined) {
                        where['email'] = agent['email'];
                    }
                    if (agent['facebook'] !== undefined) {
                        where['facebook'] = agent['facebook'];
                    }
                    if (agent['linkedin'] !== undefined) {
                        where['linkedin'] = agent['linkedin'];
                    }
                    if (agent['mydesktopAgentId'] !== undefined) {
                        where['mydesktopAgentId'] = agent['mydesktopAgentId'];
                    }
                    if (agent['isActive'] !== undefined) {
                        where['isActive'] = agent['isActive'];
                    }
                    if (agent['rateMyAgentUrl'] !== undefined) {
                        where['rateMyAgentUrl'] = agent['rateMyAgentUrl'];
                    }
                    if (agent['rateMyAgentTestimonialUrl'] !== undefined) {
                        where['rateMyAgentTestimonialUrl'] = agent['rateMyAgentTestimonialUrl'];
                    }
                }
                else {
                    where['agentId'] = id;
                }
                return agent.find({ where: where });
            }
        }
    });
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
        'type': Sequelize.STRING,
        'priceView': Sequelize.STRING,
        'bond': Sequelize.DECIMAL,
        'uniqueId': Sequelize.INTEGER,
        'headline': Sequelize.STRING,
        'isSold': Sequelize.INTEGER,
        'soldPrice': Sequelize.STRING,
        'soldDate': Sequelize.STRING,
        'modifiedTime': Sequelize.STRING,
        'status': Sequelize.STRING,
        'imageUrl': Sequelize.STRING,
        'lastUpdateFileNumber': Sequelize.INTEGER
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
                    if (property['type'] !== undefined) {
                        where['type'] = property['type'];
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
                    if (property['isSold'] !== undefined) {
                        where['isSold'] = property['isSold'];
                    }
                    if (property['soldPrice'] !== undefined) {
                        where['soldPrice'] = property['soldPrice'];
                    }
                    if (property['soldDate'] !== undefined) {
                        where['soldDate'] = property['soldDate'];
                    }
                    if (property['modifiedTime'] !== undefined) {
                        where['modifiedTime'] = property['modifiedTime'];
                    }
                    if (property['status'] !== undefined) {
                        where['status'] = property['status'];
                    }
                    if (property['imageUrl'] !== undefined) {
                        where['imageUrl'] = property['imageUrl'];
                    }
                    if (property['lastUpdateFileNumber'] !== undefined) {
                        where['lastUpdateFileNumber'] = property['lastUpdateFileNumber'];
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
        'propertyId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'streetNumber': Sequelize.STRING,
        'street': Sequelize.STRING,
        'suburb': Sequelize.STRING,
        'state': Sequelize.STRING,
        'postcode': Sequelize.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            getpropertyaddress: function (propertyaddress) {
                var where = {};
                var id = parseInt(propertyaddress);
                if (isNaN(id)) {
                    if (propertyaddress['propertyId'] !== undefined) {
                        where['propertyId'] = propertyaddress['propertyId'];
                    }
                    if (propertyaddress['streetNumber'] !== undefined) {
                        where['streetNumber'] = propertyaddress['streetNumber'];
                    }
                    if (propertyaddress['street'] !== undefined) {
                        where['street'] = propertyaddress['street'];
                    }
                    if (propertyaddress['suburb'] !== undefined) {
                        where['suburb'] = propertyaddress['suburb'];
                    }
                    if (propertyaddress['state'] !== undefined) {
                        where['state'] = propertyaddress['state'];
                    }
                    if (propertyaddress['postcode'] !== undefined) {
                        where['postcode'] = propertyaddress['postcode'];
                    }
                }
                else {
                    where['propertyId'] = id;
                }
                return propertyaddress.find({ where: where });
            }
        }
    });
    exports.propertyagent = exports.SEQUELIZE.define('propertyagent', {
        'propertyAgentId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'agentId': Sequelize.INTEGER,
        'propertyId': Sequelize.INTEGER,
        'mydesktopAgentId': Sequelize.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            getpropertyagent: function (propertyagent) {
                var where = {};
                var id = parseInt(propertyagent);
                if (isNaN(id)) {
                    if (propertyagent['propertyAgentId'] !== undefined) {
                        where['propertyAgentId'] = propertyagent['propertyAgentId'];
                    }
                    if (propertyagent['agentId'] !== undefined) {
                        where['agentId'] = propertyagent['agentId'];
                    }
                    if (propertyagent['propertyId'] !== undefined) {
                        where['propertyId'] = propertyagent['propertyId'];
                    }
                    if (propertyagent['mydesktopAgentId'] !== undefined) {
                        where['mydesktopAgentId'] = propertyagent['mydesktopAgentId'];
                    }
                }
                else {
                    where['propertyAgentId'] = id;
                }
                return propertyagent.find({ where: where });
            }
        }
    });
    exports.propertydescription = exports.SEQUELIZE.define('propertydescription', {
        'propertyId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'propertydescription': Sequelize.STRING
    }, {
        timestamps: false,
        classMethods: {
            getpropertydescription: function (propertydescription) {
                var where = {};
                var id = parseInt(propertydescription);
                if (isNaN(id)) {
                    if (propertydescription['propertyId'] !== undefined) {
                        where['propertyId'] = propertydescription['propertyId'];
                    }
                    if (propertydescription['propertydescription'] !== undefined) {
                        where['propertydescription'] = propertydescription['propertydescription'];
                    }
                }
                else {
                    where['propertyId'] = id;
                }
                return propertydescription.find({ where: where });
            }
        }
    });
    exports.propertyfeature = exports.SEQUELIZE.define('propertyfeature', {
        'propertyId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'bedroom': Sequelize.INTEGER,
        'bathroom': Sequelize.INTEGER,
        'garages': Sequelize.INTEGER,
        'carports': Sequelize.INTEGER,
        'airConditioning': Sequelize.INTEGER,
        'alarmSystem': Sequelize.INTEGER,
        'pool': Sequelize.INTEGER,
        'otherFeatures': Sequelize.STRING,
        'propertyfeaturecol': Sequelize.STRING
    }, {
        timestamps: false,
        classMethods: {
            getpropertyfeature: function (propertyfeature) {
                var where = {};
                var id = parseInt(propertyfeature);
                if (isNaN(id)) {
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
    exports.propertyimage = exports.SEQUELIZE.define('propertyimage', {
        'propertyImageId': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'propertyId': Sequelize.INTEGER,
        'imageId': Sequelize.STRING,
        'imageUrl': Sequelize.STRING,
        'imageIndex': Sequelize.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            getpropertyimage: function (propertyimage) {
                var where = {};
                var id = parseInt(propertyimage);
                if (isNaN(id)) {
                    if (propertyimage['propertyImageId'] !== undefined) {
                        where['propertyImageId'] = propertyimage['propertyImageId'];
                    }
                    if (propertyimage['propertyId'] !== undefined) {
                        where['propertyId'] = propertyimage['propertyId'];
                    }
                    if (propertyimage['imageId'] !== undefined) {
                        where['imageId'] = propertyimage['imageId'];
                    }
                    if (propertyimage['imageUrl'] !== undefined) {
                        where['imageUrl'] = propertyimage['imageUrl'];
                    }
                    if (propertyimage['imageIndex'] !== undefined) {
                        where['imageIndex'] = propertyimage['imageIndex'];
                    }
                }
                else {
                    where['propertyImageId'] = id;
                }
                return propertyimage.find({ where: where });
            }
        }
    });
    exports.property.hasMany(exports.propertyaddress, { foreignKey: 'propertyId' });
    exports.propertyaddress.belongsTo(exports.property, { as: undefined, foreignKey: 'propertyId' });
    exports.agent.hasMany(exports.propertyagent, { foreignKey: 'agentId' });
    exports.propertyagent.belongsTo(exports.agent, { as: undefined, foreignKey: 'agentId' });
    exports.property.hasMany(exports.propertyagent, { foreignKey: 'propertyId' });
    exports.propertyagent.belongsTo(exports.property, { as: undefined, foreignKey: 'propertyId' });
    exports.property.hasMany(exports.propertydescription, { foreignKey: 'propertyId' });
    exports.propertydescription.belongsTo(exports.property, { as: undefined, foreignKey: 'propertyId' });
    exports.property.hasMany(exports.propertyfeature, { foreignKey: 'propertyId' });
    exports.propertyfeature.belongsTo(exports.property, { as: undefined, foreignKey: 'propertyId' });
    exports.property.hasMany(exports.propertyimage, { foreignKey: 'propertyId' });
    exports.propertyimage.belongsTo(exports.property, { as: undefined, foreignKey: 'propertyId' });
    return exports;
}
exports.initialize = initialize;
//# sourceMappingURL=sequelize-models.js.map