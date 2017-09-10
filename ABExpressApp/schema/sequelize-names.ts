////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    agentFields:agentFields;
    contactFields:contactFields;
    propertyFields:propertyFields;
    propertyaddressFields:propertyaddressFields;
    propertyagentFields:propertyagentFields;
    propertyappraisalFields:propertyappraisalFields;
    propertydescriptionFields:propertydescriptionFields;
    propertyfeatureFields:propertyfeatureFields;
    propertyimageFields:propertyimageFields;
    statsloggingFields:statsloggingFields;
}

export class TableNames {
    agent:string = 'agent';
    contact:string = 'contact';
    property:string = 'property';
    propertyaddress:string = 'propertyaddress';
    propertyagent:string = 'propertyagent';
    propertyappraisal:string = 'propertyappraisal';
    propertydescription:string = 'propertydescription';
    propertyfeature:string = 'propertyfeature';
    propertyimage:string = 'propertyimage';
    statslogging:string = 'statslogging';
}
export var tableNames:TableNames = new TableNames();

export class agentFields {
    agentId:string = 'agentId';
    name:string = 'name';
    mobile:string = 'mobile';
    telephone:string = 'telephone';
    workphone:string = 'workphone';
    email:string = 'email';
    facebook:string = 'facebook';
    linkedin:string = 'linkedin';
    mydesktopAgentId:string = 'mydesktopAgentId';
    isActive:string = 'isActive';
    rateMyAgentUrl:string = 'rateMyAgentUrl';
    agentImageUrl:string = 'agentImageUrl';
    agentDescription:string = 'agentDescription';
    rateMyAgentTestimonialUrl:string = 'rateMyAgentTestimonialUrl';
    designation:string = 'designation';
    twitterAddress:string = 'twitterAddress';
    instagramAddress:string = 'instagramAddress';
    propertyagent:string = 'propertyagent';
}
export var agentFields:agentFields = new agentFields();


export class contactFields {
    contactId:string = 'contactId';
    name:string = 'name';
    email:string = 'email';
    subject:string = 'subject';
    message:string = 'message';
}
export var contactFields:contactFields = new contactFields();


export class propertyFields {
    propertyId:string = 'propertyId';
    name:string = 'name';
    identifier:string = 'identifier';
    dateAvailable:string = 'dateAvailable';
    rent:string = 'rent';
    category:string = 'category';
    inspectionTimes:string = 'inspectionTimes';
    latitude:string = 'latitude';
    longitude:string = 'longitude';
    type:string = 'type';
    priceView:string = 'priceView';
    bond:string = 'bond';
    uniqueId:string = 'uniqueId';
    headline:string = 'headline';
    isSold:string = 'isSold';
    soldPrice:string = 'soldPrice';
    soldDate:string = 'soldDate';
    modifiedTime:string = 'modifiedTime';
    status:string = 'status';
    imageUrl:string = 'imageUrl';
    lastUpdateFileNumber:string = 'lastUpdateFileNumber';
    underOffer:string = 'underOffer';
    propertyaddress:string = 'propertyaddress';
    propertyagent:string = 'propertyagent';
    propertydescription:string = 'propertydescription';
    propertyfeature:string = 'propertyfeature';
    propertyimage:string = 'propertyimage';
}
export var propertyFields:propertyFields = new propertyFields();


export class propertyaddressFields {
    propertyId:string = 'propertyId';
    streetNumber:string = 'streetNumber';
    street:string = 'street';
    suburb:string = 'suburb';
    state:string = 'state';
    postcode:string = 'postcode';
    property:string = 'property';
}
export var propertyaddressFields:propertyaddressFields = new propertyaddressFields();


export class propertyagentFields {
    propertyAgentId:string = 'propertyAgentId';
    agentId:string = 'agentId';
    propertyId:string = 'propertyId';
    mydesktopAgentId:string = 'mydesktopAgentId';
    agent:string = 'agent';
    property:string = 'property';
}
export var propertyagentFields:propertyagentFields = new propertyagentFields();


export class propertyappraisalFields {
    propertyappraisalId:string = 'propertyappraisalId';
    fullName:string = 'fullName';
    email:string = 'email';
    phoneNumber:string = 'phoneNumber';
    streetName:string = 'streetName';
    suburbPostcode:string = 'suburbPostcode';
    bedroom:string = 'bedroom';
    bathroom:string = 'bathroom';
    garage:string = 'garage';
    additionalDetails:string = 'additionalDetails';
    message:string = 'message';
    propertyAddress:string = 'propertyAddress';
}
export var propertyappraisalFields:propertyappraisalFields = new propertyappraisalFields();


export class propertydescriptionFields {
    propertyId:string = 'propertyId';
    propertydescription:string = 'propertydescription';
    property:string = 'property';
}
export var propertydescriptionFields:propertydescriptionFields = new propertydescriptionFields();


export class propertyfeatureFields {
    propertyId:string = 'propertyId';
    bedroom:string = 'bedroom';
    bathroom:string = 'bathroom';
    garages:string = 'garages';
    carports:string = 'carports';
    airConditioning:string = 'airConditioning';
    alarmSystem:string = 'alarmSystem';
    pool:string = 'pool';
    otherFeatures:string = 'otherFeatures';
    propertyfeaturecol:string = 'propertyfeaturecol';
    property:string = 'property';
}
export var propertyfeatureFields:propertyfeatureFields = new propertyfeatureFields();


export class propertyimageFields {
    propertyImageId:string = 'propertyImageId';
    propertyId:string = 'propertyId';
    imageId:string = 'imageId';
    imageUrl:string = 'imageUrl';
    imageIndex:string = 'imageIndex';
    property:string = 'property';
}
export var propertyimageFields:propertyimageFields = new propertyimageFields();


export class statsloggingFields {
    statsloggingId:string = 'statsloggingId';
    route:string = 'route';
    propertyId:string = 'propertyId';
    ipAddress:string = 'ipAddress';
    dateTime:string = 'dateTime';
    isMobile:string = 'isMobile';
    userAgent:string = 'userAgent';
}
export var statsloggingFields:statsloggingFields = new statsloggingFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    propertyId:types.Reference = { tableName: 'property', primaryKey: 'propertyId', foreignKey: 'propertyId', as: undefined};
    agentId:types.Reference = { tableName: 'agent', primaryKey: 'agentId', foreignKey: 'agentId', as: undefined};
}

export var references:References = new References();
