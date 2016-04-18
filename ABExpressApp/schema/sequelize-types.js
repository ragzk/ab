////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////
var asserters = {};
function assertValidproperty(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid property provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid property provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'propertyId':
                assertValidFieldType('property', 'propertyId', pojo, 'number');
                break;
            case 'name':
                assertValidFieldType('property', 'name', pojo, 'string');
                break;
            case 'identifier':
                assertValidFieldType('property', 'identifier', pojo, 'string');
                break;
            case 'dateAvailable':
                assertValidFieldType('property', 'dateAvailable', pojo, 'Date');
                break;
            case 'rent':
                assertValidFieldType('property', 'rent', pojo, 'number');
                break;
            case 'category':
                assertValidFieldType('property', 'category', pojo, 'string');
                break;
            case 'inspectionTimes':
                assertValidFieldType('property', 'inspectionTimes', pojo, 'string');
                break;
            case 'latitude':
                assertValidFieldType('property', 'latitude', pojo, 'number');
                break;
            case 'longitude':
                assertValidFieldType('property', 'longitude', pojo, 'number');
                break;
            case 'isRental':
                assertValidFieldType('property', 'isRental', pojo, 'boolean');
                break;
            case 'priceView':
                assertValidFieldType('property', 'priceView', pojo, 'string');
                break;
            case 'bond':
                assertValidFieldType('property', 'bond', pojo, 'number');
                break;
            case 'uniqueId':
                assertValidFieldType('property', 'uniqueId', pojo, 'number');
                break;
            case 'headline':
                assertValidFieldType('property', 'headline', pojo, 'string');
                break;
            case 'isSold':
                assertValidFieldType('property', 'isSold', pojo, 'boolean');
                break;
            case 'soldPrice':
                assertValidFieldType('property', 'soldPrice', pojo, 'string');
                break;
            case 'soldDate':
                assertValidFieldType('property', 'soldDate', pojo, 'string');
                break;
            case 'modifiedTime':
                assertValidFieldType('property', 'modifiedTime', pojo, 'string');
                break;
            case 'Status':
                assertValidFieldType('property', 'Status', pojo, 'string');
                break;
            default:
                throw new Error('Invalid property provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidproperty = assertValidproperty;
asserters['property'] = assertValidproperty;
function assertValidpropertyaddress(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyaddress provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyaddress provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'id':
                assertValidFieldType('propertyaddress', 'id', pojo, 'number');
                break;
            case 'name':
                assertValidFieldType('propertyaddress', 'name', pojo, 'string');
                break;
            case 'identifier':
                assertValidFieldType('propertyaddress', 'identifier', pojo, 'string');
                break;
            case 'postcode':
                assertValidFieldType('propertyaddress', 'postcode', pojo, 'string');
                break;
            case 'propertyId':
                assertValidFieldType('propertyaddress', 'propertyId', pojo, 'number');
                break;
            default:
                throw new Error('Invalid propertyaddress provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyaddress = assertValidpropertyaddress;
asserters['propertyaddress'] = assertValidpropertyaddress;
function assertValidpropertyfeature(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyfeature provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyfeature provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'id':
                assertValidFieldType('propertyfeature', 'id', pojo, 'number');
                break;
            case 'propertyId':
                assertValidFieldType('propertyfeature', 'propertyId', pojo, 'number');
                break;
            case 'bedroom':
                assertValidFieldType('propertyfeature', 'bedroom', pojo, 'boolean');
                break;
            case 'bathroom':
                assertValidFieldType('propertyfeature', 'bathroom', pojo, 'boolean');
                break;
            case 'garages':
                assertValidFieldType('propertyfeature', 'garages', pojo, 'boolean');
                break;
            case 'carports':
                assertValidFieldType('propertyfeature', 'carports', pojo, 'boolean');
                break;
            case 'airConditioning':
                assertValidFieldType('propertyfeature', 'airConditioning', pojo, 'Buffer');
                break;
            case 'alarmSystem':
                assertValidFieldType('propertyfeature', 'alarmSystem', pojo, 'Buffer');
                break;
            case 'pool':
                assertValidFieldType('propertyfeature', 'pool', pojo, 'Buffer');
                break;
            case 'otherFeatures':
                assertValidFieldType('propertyfeature', 'otherFeatures', pojo, 'string');
                break;
            case 'propertyfeaturecol':
                assertValidFieldType('propertyfeature', 'propertyfeaturecol', pojo, 'string');
                break;
            default:
                throw new Error('Invalid propertyfeature provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyfeature = assertValidpropertyfeature;
asserters['propertyfeature'] = assertValidpropertyfeature;
var BOOLEAN_TYPE = typeof (true);
var NUMBER_TYPE = typeof (1);
var STRING_TYPE = typeof ('');
var FUNCTION_TYPE = typeof (function () { });
var DATE_EXPECTED_TYPE = 'Date';
var BUFFER_EXPECTED_TYPE = 'Buffer';
var BUFFER_EXISTS = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node
function assertValidFieldType(pojoName, fieldName, pojo, expectedType) {
    var value = pojo[fieldName];
    var actualType = typeof value;
    if (value === undefined || value === null) {
        return;
    }
    switch (expectedType) {
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
                var newValue = parseFloat(value);
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
            var getTime = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue = value.getTime();
                if (isNaN(timeValue)) {
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }
            if (actualType === STRING_TYPE) {
                var newDate = new Date(value);
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
        var individualPojoType = expectedType.substr(0, expectedType.length - 6);
        var asserter = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }
        if (isNaN(value.length)) {
            err();
        }
        for (var i = 0; i < value.length; i++) {
            try {
                asserter(value[i], true);
            }
            catch (e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }
        // all instances valid
        return;
    }
    var asserter = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }
    try {
        asserter(value, true);
    }
    catch (e) {
        err(e.message);
    }
    function err(extraMessage) {
        var message = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }
    function expectedTypeErr() {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}
function safeValue(value) {
    if (value === undefined || value === null) {
        return typeof value;
    }
    var s = value.toString();
    return s.substr(0, 100);
}
//# sourceMappingURL=sequelize-types.js.map