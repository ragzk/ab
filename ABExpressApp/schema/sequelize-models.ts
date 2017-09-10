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

export var agent:types.agentModel;
export var contact:types.contactModel;
export var property:types.propertyModel;
export var propertyaddress:types.propertyaddressModel;
export var propertyagent:types.propertyagentModel;
export var propertyappraisal:types.propertyappraisalModel;
export var propertydescription:types.propertydescriptionModel;
export var propertyfeature:types.propertyfeatureModel;
export var propertyimage:types.propertyimageModel;
export var statslogging:types.statsloggingModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    agent = <types.agentModel> SEQUELIZE.define<types.agentInstance, types.agentPojo>('agent', {
        'agentId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name':Sequelize.STRING,
        'mobile':Sequelize.STRING,
        'telephone':Sequelize.STRING,
        'workphone':Sequelize.STRING,
        'email':Sequelize.STRING,
        'facebook':Sequelize.STRING,
        'linkedin':Sequelize.STRING,
        'mydesktopAgentId':Sequelize.INTEGER,
        'isActive':Sequelize.INTEGER,
        'rateMyAgentUrl':Sequelize.STRING,
        'agentImageUrl':Sequelize.STRING,
        'agentDescription':Sequelize.STRING,
        'rateMyAgentTestimonialUrl':Sequelize.STRING,
        'designation':Sequelize.STRING,
        'twitterAddress':Sequelize.STRING,
        'instagramAddress':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getagent:(agent:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(agent);
                    if (isNaN(id)) {
                        if (agent['agentId'] !== undefined) { where['agentId'] = agent['agentId']}
                        if (agent['name'] !== undefined) { where['name'] = agent['name']}
                        if (agent['mobile'] !== undefined) { where['mobile'] = agent['mobile']}
                        if (agent['telephone'] !== undefined) { where['telephone'] = agent['telephone']}
                        if (agent['workphone'] !== undefined) { where['workphone'] = agent['workphone']}
                        if (agent['email'] !== undefined) { where['email'] = agent['email']}
                        if (agent['facebook'] !== undefined) { where['facebook'] = agent['facebook']}
                        if (agent['linkedin'] !== undefined) { where['linkedin'] = agent['linkedin']}
                        if (agent['mydesktopAgentId'] !== undefined) { where['mydesktopAgentId'] = agent['mydesktopAgentId']}
                        if (agent['isActive'] !== undefined) { where['isActive'] = agent['isActive']}
                        if (agent['rateMyAgentUrl'] !== undefined) { where['rateMyAgentUrl'] = agent['rateMyAgentUrl']}
                        if (agent['agentImageUrl'] !== undefined) { where['agentImageUrl'] = agent['agentImageUrl']}
                        if (agent['agentDescription'] !== undefined) { where['agentDescription'] = agent['agentDescription']}
                        if (agent['rateMyAgentTestimonialUrl'] !== undefined) { where['rateMyAgentTestimonialUrl'] = agent['rateMyAgentTestimonialUrl']}
                        if (agent['designation'] !== undefined) { where['designation'] = agent['designation']}
                        if (agent['twitterAddress'] !== undefined) { where['twitterAddress'] = agent['twitterAddress']}
                        if (agent['instagramAddress'] !== undefined) { where['instagramAddress'] = agent['instagramAddress']}
                    } else {
                        where['agentId'] = id;
                    }
                    return agent.find({where: where});
                }
            }
        });
    
    contact = <types.contactModel> SEQUELIZE.define<types.contactInstance, types.contactPojo>('contact', {
        'contactId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name':Sequelize.STRING,
        'email':Sequelize.STRING,
        'subject':Sequelize.STRING,
        'message':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getcontact:(contact:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(contact);
                    if (isNaN(id)) {
                        if (contact['contactId'] !== undefined) { where['contactId'] = contact['contactId']}
                        if (contact['name'] !== undefined) { where['name'] = contact['name']}
                        if (contact['email'] !== undefined) { where['email'] = contact['email']}
                        if (contact['subject'] !== undefined) { where['subject'] = contact['subject']}
                        if (contact['message'] !== undefined) { where['message'] = contact['message']}
                    } else {
                        where['contactId'] = id;
                    }
                    return contact.find({where: where});
                }
            }
        });
    
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
        'imageUrl':Sequelize.STRING,
        'lastUpdateFileNumber':Sequelize.INTEGER,
        'underOffer':Sequelize.INTEGER
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
                        if (property['lastUpdateFileNumber'] !== undefined) { where['lastUpdateFileNumber'] = property['lastUpdateFileNumber']}
                        if (property['underOffer'] !== undefined) { where['underOffer'] = property['underOffer']}
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
    
    propertyagent = <types.propertyagentModel> SEQUELIZE.define<types.propertyagentInstance, types.propertyagentPojo>('propertyagent', {
        'propertyAgentId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'agentId':Sequelize.INTEGER,
        'propertyId':Sequelize.INTEGER,
        'mydesktopAgentId':Sequelize.INTEGER
        },
        {
            timestamps: false,
            classMethods: {
                getpropertyagent:(propertyagent:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertyagent);
                    if (isNaN(id)) {
                        if (propertyagent['propertyAgentId'] !== undefined) { where['propertyAgentId'] = propertyagent['propertyAgentId']}
                        if (propertyagent['agentId'] !== undefined) { where['agentId'] = propertyagent['agentId']}
                        if (propertyagent['propertyId'] !== undefined) { where['propertyId'] = propertyagent['propertyId']}
                        if (propertyagent['mydesktopAgentId'] !== undefined) { where['mydesktopAgentId'] = propertyagent['mydesktopAgentId']}
                    } else {
                        where['propertyAgentId'] = id;
                    }
                    return propertyagent.find({where: where});
                }
            }
        });
    
    propertyappraisal = <types.propertyappraisalModel> SEQUELIZE.define<types.propertyappraisalInstance, types.propertyappraisalPojo>('propertyappraisal', {
        'propertyappraisalId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'fullName':Sequelize.STRING,
        'email':Sequelize.STRING,
        'phoneNumber':Sequelize.STRING,
        'streetName':Sequelize.STRING,
        'suburbPostcode':Sequelize.STRING,
        'bedroom':Sequelize.INTEGER,
        'bathroom':Sequelize.INTEGER,
        'garage':Sequelize.INTEGER,
        'additionalDetails':Sequelize.STRING,
        'message':Sequelize.STRING,
        'propertyAddress':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getpropertyappraisal:(propertyappraisal:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(propertyappraisal);
                    if (isNaN(id)) {
                        if (propertyappraisal['propertyappraisalId'] !== undefined) { where['propertyappraisalId'] = propertyappraisal['propertyappraisalId']}
                        if (propertyappraisal['fullName'] !== undefined) { where['fullName'] = propertyappraisal['fullName']}
                        if (propertyappraisal['email'] !== undefined) { where['email'] = propertyappraisal['email']}
                        if (propertyappraisal['phoneNumber'] !== undefined) { where['phoneNumber'] = propertyappraisal['phoneNumber']}
                        if (propertyappraisal['streetName'] !== undefined) { where['streetName'] = propertyappraisal['streetName']}
                        if (propertyappraisal['suburbPostcode'] !== undefined) { where['suburbPostcode'] = propertyappraisal['suburbPostcode']}
                        if (propertyappraisal['bedroom'] !== undefined) { where['bedroom'] = propertyappraisal['bedroom']}
                        if (propertyappraisal['bathroom'] !== undefined) { where['bathroom'] = propertyappraisal['bathroom']}
                        if (propertyappraisal['garage'] !== undefined) { where['garage'] = propertyappraisal['garage']}
                        if (propertyappraisal['additionalDetails'] !== undefined) { where['additionalDetails'] = propertyappraisal['additionalDetails']}
                        if (propertyappraisal['message'] !== undefined) { where['message'] = propertyappraisal['message']}
                        if (propertyappraisal['propertyAddress'] !== undefined) { where['propertyAddress'] = propertyappraisal['propertyAddress']}
                    } else {
                        where['propertyappraisalId'] = id;
                    }
                    return propertyappraisal.find({where: where});
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
    
    statslogging = <types.statsloggingModel> SEQUELIZE.define<types.statsloggingInstance, types.statsloggingPojo>('statslogging', {
        'statsloggingId':{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'route':Sequelize.STRING,
        'propertyId':Sequelize.STRING,
        'ipAddress':Sequelize.STRING,
        'dateTime':Sequelize.DATE,
        'isMobile':Sequelize.INTEGER,
        'userAgent':Sequelize.STRING
        },
        {
            timestamps: false,
            classMethods: {
                getstatslogging:(statslogging:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(statslogging);
                    if (isNaN(id)) {
                        if (statslogging['statsloggingId'] !== undefined) { where['statsloggingId'] = statslogging['statsloggingId']}
                        if (statslogging['route'] !== undefined) { where['route'] = statslogging['route']}
                        if (statslogging['propertyId'] !== undefined) { where['propertyId'] = statslogging['propertyId']}
                        if (statslogging['ipAddress'] !== undefined) { where['ipAddress'] = statslogging['ipAddress']}
                        if (statslogging['dateTime'] !== undefined) { where['dateTime'] = statslogging['dateTime']}
                        if (statslogging['isMobile'] !== undefined) { where['isMobile'] = statslogging['isMobile']}
                        if (statslogging['userAgent'] !== undefined) { where['userAgent'] = statslogging['userAgent']}
                    } else {
                        where['statsloggingId'] = id;
                    }
                    return statslogging.find({where: where});
                }
            }
        });
    
    property.hasMany(propertyaddress, {foreignKey: 'propertyId' });
    propertyaddress.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    agent.hasMany(propertyagent, {foreignKey: 'agentId' });
    propertyagent.belongsTo(agent, {as: undefined, foreignKey: 'agentId' });

    
    property.hasMany(propertyagent, {foreignKey: 'propertyId' });
    propertyagent.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertydescription, {foreignKey: 'propertyId' });
    propertydescription.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertyfeature, {foreignKey: 'propertyId' });
    propertyfeature.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    property.hasMany(propertyimage, {foreignKey: 'propertyId' });
    propertyimage.belongsTo(property, {as: undefined, foreignKey: 'propertyId' });

    
    return exports;
}

