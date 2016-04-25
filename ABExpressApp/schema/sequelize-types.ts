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

import types = require('./sequelize-types'); // important so we can use same fully qualified names in all generated files

export interface PropertyId { PropertyId:number; }


var asserters:{[typeName:string]:(pojo:any, allowUndefined?:boolean) => void} = {};

//////////////////////////////////////////////////////////////////////////////
//
//
//               property
//
//
//////////////////////////////////////////////////////////////////////////////


export interface propertyPojo
{
    propertyId?:PropertyId;
    name?:string;
    identifier?:string;
    dateAvailable?:Date;
    rent?:number;
    category?:string;
    inspectionTimes?:string;
    latitude?:number;
    longitude?:number;
    isRental?:boolean;
    priceView?:string;
    bond?:number;
    uniqueId?:number;
    headline?:string;
    isSold?:boolean;
    soldPrice?:string;
    soldDate?:string;
    modifiedTime?:string;
    status?:string;
    imageUrl?:string;
    propertyaddress?:propertyaddressPojo[];
    propertydescription?:propertydescriptionPojo[];
    propertyfeature?:propertyfeaturePojo[];
}

export interface propertyInstance extends sequelize.Instance<propertyInstance, propertyPojo>, propertyPojo { }

export interface propertyModel extends sequelize.Model<propertyInstance, propertyPojo> {
    getproperty(propertyId:PropertyId):sequelize.PromiseT<propertyInstance>;
    getproperty(property:propertyPojo):sequelize.PromiseT<propertyInstance>;
}

export function assertValidproperty(pojo:propertyPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid property provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid property provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'propertyId': assertValidFieldType('property', 'propertyId', pojo, 'number'); break;
            case 'name': assertValidFieldType('property', 'name', pojo, 'string'); break;
            case 'identifier': assertValidFieldType('property', 'identifier', pojo, 'string'); break;
            case 'dateAvailable': assertValidFieldType('property', 'dateAvailable', pojo, 'Date'); break;
            case 'rent': assertValidFieldType('property', 'rent', pojo, 'number'); break;
            case 'category': assertValidFieldType('property', 'category', pojo, 'string'); break;
            case 'inspectionTimes': assertValidFieldType('property', 'inspectionTimes', pojo, 'string'); break;
            case 'latitude': assertValidFieldType('property', 'latitude', pojo, 'number'); break;
            case 'longitude': assertValidFieldType('property', 'longitude', pojo, 'number'); break;
            case 'isRental': assertValidFieldType('property', 'isRental', pojo, 'boolean'); break;
            case 'priceView': assertValidFieldType('property', 'priceView', pojo, 'string'); break;
            case 'bond': assertValidFieldType('property', 'bond', pojo, 'number'); break;
            case 'uniqueId': assertValidFieldType('property', 'uniqueId', pojo, 'number'); break;
            case 'headline': assertValidFieldType('property', 'headline', pojo, 'string'); break;
            case 'isSold': assertValidFieldType('property', 'isSold', pojo, 'boolean'); break;
            case 'soldPrice': assertValidFieldType('property', 'soldPrice', pojo, 'string'); break;
            case 'soldDate': assertValidFieldType('property', 'soldDate', pojo, 'string'); break;
            case 'modifiedTime': assertValidFieldType('property', 'modifiedTime', pojo, 'string'); break;
            case 'status': assertValidFieldType('property', 'status', pojo, 'string'); break;
            case 'imageUrl': assertValidFieldType('property', 'imageUrl', pojo, 'string'); break;
            case 'propertyaddress': assertValidFieldType('property', 'propertyaddress', pojo, 'propertyaddressPojo[]'); break;
            case 'propertydescription': assertValidFieldType('property', 'propertydescription', pojo, 'propertydescriptionPojo[]'); break;
            case 'propertyfeature': assertValidFieldType('property', 'propertyfeature', pojo, 'propertyfeaturePojo[]'); break;
            default:
                throw new Error('Invalid property provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['property'] = assertValidproperty;





//////////////////////////////////////////////////////////////////////////////
//
//
//               propertyaddress
//
//
//////////////////////////////////////////////////////////////////////////////


export interface propertyaddressPojo
{
    propertyId?:PropertyId;
    streetNumber?:string;
    street?:string;
    suburb?:string;
    state?:string;
    postcode?:number;
    property?:propertyPojo;
}

export interface propertyaddressInstance extends sequelize.Instance<propertyaddressInstance, propertyaddressPojo>, propertyaddressPojo { }

export interface propertyaddressModel extends sequelize.Model<propertyaddressInstance, propertyaddressPojo> {
    getpropertyaddress(propertyId:PropertyId):sequelize.PromiseT<propertyaddressInstance>;
    getpropertyaddress(propertyaddress:propertyaddressPojo):sequelize.PromiseT<propertyaddressInstance>;
}

export function assertValidpropertyaddress(pojo:propertyaddressPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyaddress provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyaddress provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'propertyId': assertValidFieldType('propertyaddress', 'propertyId', pojo, 'number'); break;
            case 'streetNumber': assertValidFieldType('propertyaddress', 'streetNumber', pojo, 'string'); break;
            case 'street': assertValidFieldType('propertyaddress', 'street', pojo, 'string'); break;
            case 'suburb': assertValidFieldType('propertyaddress', 'suburb', pojo, 'string'); break;
            case 'state': assertValidFieldType('propertyaddress', 'state', pojo, 'string'); break;
            case 'postcode': assertValidFieldType('propertyaddress', 'postcode', pojo, 'number'); break;
            case 'property': assertValidFieldType('propertyaddress', 'property', pojo, 'propertyPojo'); break;
            default:
                throw new Error('Invalid propertyaddress provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['propertyaddress'] = assertValidpropertyaddress;





//////////////////////////////////////////////////////////////////////////////
//
//
//               propertydescription
//
//
//////////////////////////////////////////////////////////////////////////////


export interface propertydescriptionPojo
{
    propertyId?:PropertyId;
    propertydescription?:string;
    property?:propertyPojo;
}

export interface propertydescriptionInstance extends sequelize.Instance<propertydescriptionInstance, propertydescriptionPojo>, propertydescriptionPojo { }

export interface propertydescriptionModel extends sequelize.Model<propertydescriptionInstance, propertydescriptionPojo> {
    getpropertydescription(propertyId:PropertyId):sequelize.PromiseT<propertydescriptionInstance>;
    getpropertydescription(propertydescription:propertydescriptionPojo):sequelize.PromiseT<propertydescriptionInstance>;
}

export function assertValidpropertydescription(pojo:propertydescriptionPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertydescription provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertydescription provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'propertyId': assertValidFieldType('propertydescription', 'propertyId', pojo, 'number'); break;
            case 'propertydescription': assertValidFieldType('propertydescription', 'propertydescription', pojo, 'string'); break;
            case 'property': assertValidFieldType('propertydescription', 'property', pojo, 'propertyPojo'); break;
            default:
                throw new Error('Invalid propertydescription provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['propertydescription'] = assertValidpropertydescription;





//////////////////////////////////////////////////////////////////////////////
//
//
//               propertyfeature
//
//
//////////////////////////////////////////////////////////////////////////////


export interface propertyfeaturePojo
{
    propertyId?:PropertyId;
    bedroom?:number;
    bathroom?:number;
    garages?:number;
    carports?:number;
    airConditioning?:boolean;
    alarmSystem?:boolean;
    pool?:boolean;
    otherFeatures?:string;
    propertyfeaturecol?:string;
    property?:propertyPojo;
}

export interface propertyfeatureInstance extends sequelize.Instance<propertyfeatureInstance, propertyfeaturePojo>, propertyfeaturePojo { }

export interface propertyfeatureModel extends sequelize.Model<propertyfeatureInstance, propertyfeaturePojo> {
    getpropertyfeature(propertyId:PropertyId):sequelize.PromiseT<propertyfeatureInstance>;
    getpropertyfeature(propertyfeature:propertyfeaturePojo):sequelize.PromiseT<propertyfeatureInstance>;
}

export function assertValidpropertyfeature(pojo:propertyfeaturePojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyfeature provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyfeature provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'propertyId': assertValidFieldType('propertyfeature', 'propertyId', pojo, 'number'); break;
            case 'bedroom': assertValidFieldType('propertyfeature', 'bedroom', pojo, 'number'); break;
            case 'bathroom': assertValidFieldType('propertyfeature', 'bathroom', pojo, 'number'); break;
            case 'garages': assertValidFieldType('propertyfeature', 'garages', pojo, 'number'); break;
            case 'carports': assertValidFieldType('propertyfeature', 'carports', pojo, 'number'); break;
            case 'airConditioning': assertValidFieldType('propertyfeature', 'airConditioning', pojo, 'boolean'); break;
            case 'alarmSystem': assertValidFieldType('propertyfeature', 'alarmSystem', pojo, 'boolean'); break;
            case 'pool': assertValidFieldType('propertyfeature', 'pool', pojo, 'boolean'); break;
            case 'otherFeatures': assertValidFieldType('propertyfeature', 'otherFeatures', pojo, 'string'); break;
            case 'propertyfeaturecol': assertValidFieldType('propertyfeature', 'propertyfeaturecol', pojo, 'string'); break;
            case 'property': assertValidFieldType('propertyfeature', 'property', pojo, 'propertyPojo'); break;
            default:
                throw new Error('Invalid propertyfeature provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['propertyfeature'] = assertValidpropertyfeature;





var BOOLEAN_TYPE:string = typeof(true);
var NUMBER_TYPE:string = typeof(1);
var STRING_TYPE:string = typeof('');
var FUNCTION_TYPE:string = typeof(function() {});
var DATE_EXPECTED_TYPE:string = 'Date';
var BUFFER_EXPECTED_TYPE:string = 'Buffer';
var BUFFER_EXISTS:boolean = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node

function assertValidFieldType(pojoName:string, fieldName:string, pojo:any, expectedType:string):void {

    var value:any = pojo[fieldName];
    var actualType:string = typeof value;

    if (value === undefined || value === null) {
        return;
    }

    switch(expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;

        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue:number = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;

        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;

        case DATE_EXPECTED_TYPE:
            var getTime:Function = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue:number = value.getTime();
                if (isNaN(timeValue)){
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }

            if (actualType === STRING_TYPE) {
                var newDate:Date = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;

        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }

            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }

    // one pojo of array of array of pojos?
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType:string = expectedType.substr(0, expectedType.length - 6);

        var asserter:Function = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }

        if (isNaN(value.length)) {
            err();
        }
        for(var i:number = 0; i<value.length; i++) {
            try {
                asserter(value[i], true);
            } catch(e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }

        // all instances valid
        return;
    }

    var asserter:Function = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }

    try {
        asserter(value, true);
    } catch(e) {
        err(e.message);
    }

    function err(extraMessage?:string):void {
        var message:string = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }

    function expectedTypeErr():void {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}

function safeValue(value:any):string {

    if (value === undefined || value === null) {
        return typeof value;
    }

    var s:string = value.toString();
    return s.substr(0, 100);
}

export interface Reference {
    tableName:string;
    primaryKey:string;
    foreignKey:string;
    as:string;
}