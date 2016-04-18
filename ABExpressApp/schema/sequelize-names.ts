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
    propertyfeatureFields:propertyfeatureFields;
}

export class TableNames {
    property:string = 'property';
    propertyaddress:string = 'propertyaddress';
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
    Status:string = 'Status';
}
export var propertyFields:propertyFields = new propertyFields();


export class propertyaddressFields {
    id:string = 'id';
    name:string = 'name';
    identifier:string = 'identifier';
    postcode:string = 'postcode';
    propertyId:string = 'propertyId';
}
export var propertyaddressFields:propertyaddressFields = new propertyaddressFields();


export class propertyfeatureFields {
    id:string = 'id';
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
}
export var propertyfeatureFields:propertyfeatureFields = new propertyfeatureFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    propertyId:types.Reference = { tableName: 'property', primaryKey: 'propertyId', foreignKey: 'propertyId', as: undefined};
    id:types.Reference = { tableName: 'propertyaddress', primaryKey: 'id', foreignKey: 'id', as: undefined};
}

export var references:References = new References();
