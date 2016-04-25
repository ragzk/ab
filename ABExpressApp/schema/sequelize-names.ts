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
    propertyFields:propertyFields;
    propertyaddressFields:propertyaddressFields;
    propertydescriptionFields:propertydescriptionFields;
    propertyfeatureFields:propertyfeatureFields;
}

export class TableNames {
    property:string = 'property';
    propertyaddress:string = 'propertyaddress';
    propertydescription:string = 'propertydescription';
    propertyfeature:string = 'propertyfeature';
}
export var tableNames:TableNames = new TableNames();

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
    isRental:string = 'isRental';
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
    propertyaddress:string = 'propertyaddress';
    propertydescription:string = 'propertydescription';
    propertyfeature:string = 'propertyfeature';
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


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    propertyId:types.Reference = { tableName: 'property', primaryKey: 'propertyId', foreignKey: 'propertyId', as: undefined};
}

export var references:References = new References();
