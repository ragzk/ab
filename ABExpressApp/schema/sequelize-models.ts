////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="./node.d.ts" />
/// <reference path="./sequelize.d.ts" />

import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var property:types.propertyModel;
export var propertyaddress:types.propertyaddressModel;
export var propertydescription:types.propertydescriptionModel;
export var propertyfeature:types.propertyfeatureModel;
export var propertyimage:types.propertyimageModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    property = <types.propertyModel> SEQUELIZE.define<types.propertyInstance, types.propertyPojo>('property', {
        'propertyId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name':Sequelize.STRING,
        'identifier':Sequelize.STRING,
        'dateAvailable':Sequelize.DATE,
        'rent':Sequelize.INTEGER,
        'category':Sequelize.STRING,
        'inspectionTimes':Sequelize.STRING,
        'latitude':Sequelize.DECIMAL,
        'longitude':Sequelize.DECIMAL,
        'type':Sequelize.STRING,
        'priceView':Sequelize.STRING,
        'bond':Sequelize.DECIMAL,
        'uniqueId':Sequelize.INTEGER,
        'headline':Sequelize.STRING,
        'isSold':Sequelize.INTEGER,
        'soldPrice':Sequelize.STRING,
        'soldDate':Sequelize.STRING,
        'modifiedTime':Sequelize.STRING,
        'status':Sequelize.STRING,
        'imageUrl':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getproperty:(property:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(property);
                    if (isNaN(id)) {
                        if (property['propertyId'] !== undefined) { where['propertyId'] = property['propertyId']}
                        if (property['name'] !== undefined) { where['name'] = property['name']}
                        if (property['identifier'] !== undefined) { where['identifier'] = property['identifier']}
                        if (property['dateAvailable'] !== undefined) { where['dateAvailable'] = property['dateAvailable']}
                        if (property['rent'] !== undefined) { where['rent'] = property['rent']}
                        if (property['category'] !== undefined) { where['category'] = property['category']}
                        if (property['inspectionTimes'] !== undefined) { where['inspectionTimes'] = property['inspectionTimes']}
                        if (property['latitude'] !== undefined) { where['latitude'] = property['latitude']}
                        if (property['longitude'] !== undefined) { where['longitude'] = property['longitude']}
                        if (property['type'] !== undefined) { where['type'] = property['type']}
                        if (property['priceView'] !== undefined) { where['priceView'] = property['priceView']}
                        if (property['bond'] !== undefined) { where['bond'] = property['bond']}
                        if (property['uniqueId'] !== undefined) { where['uniqueId'] = property['uniqueId']}
                        if (property['headline'] !== undefined) { where['headline'] = property['headline']}
                        if (property['isSold'] !== undefined) { where['isSold'] = property['isSold']}
                        if (property['soldPrice'] !== undefined) { where['soldPrice'] = property['soldPrice']}
                        if (property['soldDate'] !== undefined) { where['soldDate'] = property['soldDate']}
                        if (property['modifiedTime'] !== undefined) { where['modifiedTime'] = property['modifiedTime']}
                        if (property['status'] !== undefined) { where['status'] = property['status']}
                        if (property['imageUrl'] !== undefined) { where['imageUrl'] = property['imageUrl']}
                    } else {
                        where['propertyId'] = id;
                    }
                    return property.find({where: where});
                }
            }
        });
    
    propertyaddress = <types.propertyaddressModel> SEQUELIZE.define<types.propertyaddressInstance, types.propertyaddressPojo>('propertyaddress', {
        'propertyId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'streetNumber':Sequelize.STRING,
        'street':Sequelize.STRING,
        'suburb':Sequelize.STRING,
        'state':Sequelize.STRING,
        'postcode':Sequelize.INTEGER
        },
        {
            timestamps: false,
            classMethods: {
                getpropertyaddress:(propertyaddress:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertyaddress);
                    if (isNaN(id)) {
                        if (propertyaddress['propertyId'] !== undefined) { where['propertyId'] = propertyaddress['propertyId']}
                        if (propertyaddress['streetNumber'] !== undefined) { where['streetNumber'] = propertyaddress['streetNumber']}
                        if (propertyaddress['street'] !== undefined) { where['street'] = propertyaddress['street']}
                        if (propertyaddress['suburb'] !== undefined) { where['suburb'] = propertyaddress['suburb']}
                        if (propertyaddress['state'] !== undefined) { where['state'] = propertyaddress['state']}
                        if (propertyaddress['postcode'] !== undefined) { where['postcode'] = propertyaddress['postcode']}
                    } else {
                        where['propertyId'] = id;
                    }
                    return propertyaddress.find({where: where});
                }
            }
        });
    
    propertydescription = <types.propertydescriptionModel> SEQUELIZE.define<types.propertydescriptionInstance, types.propertydescriptionPojo>('propertydescription', {
        'propertyId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'propertydescription':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getpropertydescription:(propertydescription:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertydescription);
                    if (isNaN(id)) {
                        if (propertydescription['propertyId'] !== undefined) { where['propertyId'] = propertydescription['propertyId']}
                        if (propertydescription['propertydescription'] !== undefined) { where['propertydescription'] = propertydescription['propertydescription']}
                    } else {
                        where['propertyId'] = id;
                    }
                    return propertydescription.find({where: where});
                }
            }
        });
    
    propertyfeature = <types.propertyfeatureModel> SEQUELIZE.define<types.propertyfeatureInstance, types.propertyfeaturePojo>('propertyfeature', {
        'propertyId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'bedroom':Sequelize.INTEGER,
        'bathroom':Sequelize.INTEGER,
        'garages':Sequelize.INTEGER,
        'carports':Sequelize.INTEGER,
        'airConditioning':Sequelize.INTEGER,
        'alarmSystem':Sequelize.INTEGER,
        'pool':Sequelize.INTEGER,
        'otherFeatures':Sequelize.STRING,
        'propertyfeaturecol':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getpropertyfeature:(propertyfeature:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertyfeature);
                    if (isNaN(id)) {
                        if (propertyfeature['propertyId'] !== undefined) { where['propertyId'] = propertyfeature['propertyId']}
                        if (propertyfeature['bedroom'] !== undefined) { where['bedroom'] = propertyfeature['bedroom']}
                        if (propertyfeature['bathroom'] !== undefined) { where['bathroom'] = propertyfeature['bathroom']}
                        if (propertyfeature['garages'] !== undefined) { where['garages'] = propertyfeature['garages']}
                        if (propertyfeature['carports'] !== undefined) { where['carports'] = propertyfeature['carports']}
                        if (propertyfeature['airConditioning'] !== undefined) { where['airConditioning'] = propertyfeature['airConditioning']}
                        if (propertyfeature['alarmSystem'] !== undefined) { where['alarmSystem'] = propertyfeature['alarmSystem']}
                        if (propertyfeature['pool'] !== undefined) { where['pool'] = propertyfeature['pool']}
                        if (propertyfeature['otherFeatures'] !== undefined) { where['otherFeatures'] = propertyfeature['otherFeatures']}
                        if (propertyfeature['propertyfeaturecol'] !== undefined) { where['propertyfeaturecol'] = propertyfeature['propertyfeaturecol']}
                    } else {
                        where['propertyId'] = id;
                    }
                    return propertyfeature.find({where: where});
                }
            }
        });
    
    propertyimage = <types.propertyimageModel> SEQUELIZE.define<types.propertyimageInstance, types.propertyimagePojo>('propertyimage', {
        'propertyImageId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'propertyId':Sequelize.INTEGER,
        'imageId':Sequelize.STRING,
        'imageUrl':Sequelize.STRING,
        'imageIndex':Sequelize.INTEGER
        },
        {
            timestamps: false,
            classMethods: {
                getpropertyimage:(propertyimage:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertyimage);
                    if (isNaN(id)) {
                        if (propertyimage['propertyImageId'] !== undefined) { where['propertyImageId'] = propertyimage['propertyImageId']}
                        if (propertyimage['propertyId'] !== undefined) { where['propertyId'] = propertyimage['propertyId']}
                        if (propertyimage['imageId'] !== undefined) { where['imageId'] = propertyimage['imageId']}
                        if (propertyimage['imageUrl'] !== undefined) { where['imageUrl'] = propertyimage['imageUrl']}
                        if (propertyimage['imageIndex'] !== undefined) { where['imageIndex'] = propertyimage['imageIndex']}
                    } else {
                        where['propertyImageId'] = id;
                    }
                    return propertyimage.find({where: where});
                }
            }
        });
    
    property.hasMany(propertyaddress, {foreignKey: 'propertyId' });
    propertyaddress.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertydescription, {foreignKey: 'propertyId' });
    propertydescription.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertyfeature, {foreignKey: 'propertyId' });
    propertyfeature.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertyimage, {foreignKey: 'propertyId' });
    propertyimage.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    return exports;
}

