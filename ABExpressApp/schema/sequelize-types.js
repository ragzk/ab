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
function assertValidagent(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid agent provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid agent provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'agentId':
                assertValidFieldType('agent', 'agentId', pojo, 'number');
                break;
            case 'name':
                assertValidFieldType('agent', 'name', pojo, 'string');
                break;
            case 'mobile':
                assertValidFieldType('agent', 'mobile', pojo, 'string');
                break;
            case 'telephone':
                assertValidFieldType('agent', 'telephone', pojo, 'string');
                break;
            case 'workphone':
                assertValidFieldType('agent', 'workphone', pojo, 'string');
                break;
            case 'email':
                assertValidFieldType('agent', 'email', pojo, 'string');
                break;
            case 'facebook':
                assertValidFieldType('agent', 'facebook', pojo, 'string');
                break;
            case 'linkedin':
                assertValidFieldType('agent', 'linkedin', pojo, 'string');
                break;
            case 'mydesktopAgentId':
                assertValidFieldType('agent', 'mydesktopAgentId', pojo, 'number');
                break;
            case 'isActive':
                assertValidFieldType('agent', 'isActive', pojo, 'boolean');
                break;
            case 'rateMyAgentUrl':
                assertValidFieldType('agent', 'rateMyAgentUrl', pojo, 'string');
                break;
            case 'agentImageUrl':
                assertValidFieldType('agent', 'agentImageUrl', pojo, 'string');
                break;
            case 'agentDescription':
                assertValidFieldType('agent', 'agentDescription', pojo, 'string');
                break;
            case 'rateMyAgentTestimonialUrl':
                assertValidFieldType('agent', 'rateMyAgentTestimonialUrl', pojo, 'string');
                break;
            case 'designation':
                assertValidFieldType('agent', 'designation', pojo, 'string');
                break;
            case 'twitterAddress':
                assertValidFieldType('agent', 'twitterAddress', pojo, 'string');
                break;
            case 'instagramAddress':
                assertValidFieldType('agent', 'instagramAddress', pojo, 'string');
                break;
            case 'propertyagent':
                assertValidFieldType('agent', 'propertyagent', pojo, 'propertyagentPojo[]');
                break;
            default:
                throw new Error('Invalid agent provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidagent = assertValidagent;
asserters['agent'] = assertValidagent;
function assertValidcontact(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid contact provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid contact provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'contactId':
                assertValidFieldType('contact', 'contactId', pojo, 'number');
                break;
            case 'name':
                assertValidFieldType('contact', 'name', pojo, 'string');
                break;
            case 'email':
                assertValidFieldType('contact', 'email', pojo, 'string');
                break;
            case 'subject':
                assertValidFieldType('contact', 'subject', pojo, 'string');
                break;
            case 'message':
                assertValidFieldType('contact', 'message', pojo, 'string');
                break;
            default:
                throw new Error('Invalid contact provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidcontact = assertValidcontact;
asserters['contact'] = assertValidcontact;
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
            case 'type':
                assertValidFieldType('property', 'type', pojo, 'string');
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
            case 'status':
                assertValidFieldType('property', 'status', pojo, 'string');
                break;
            case 'imageUrl':
                assertValidFieldType('property', 'imageUrl', pojo, 'string');
                break;
            case 'lastUpdateFileNumber':
                assertValidFieldType('property', 'lastUpdateFileNumber', pojo, 'number');
                break;
            case 'underOffer':
                assertValidFieldType('property', 'underOffer', pojo, 'boolean');
                break;
            case 'propertyaddress':
                assertValidFieldType('property', 'propertyaddress', pojo, 'propertyaddressPojo[]');
                break;
            case 'propertyagent':
                assertValidFieldType('property', 'propertyagent', pojo, 'propertyagentPojo[]');
                break;
            case 'propertydescription':
                assertValidFieldType('property', 'propertydescription', pojo, 'propertydescriptionPojo[]');
                break;
            case 'propertyfeature':
                assertValidFieldType('property', 'propertyfeature', pojo, 'propertyfeaturePojo[]');
                break;
            case 'propertyimage':
                assertValidFieldType('property', 'propertyimage', pojo, 'propertyimagePojo[]');
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
            case 'propertyId':
                assertValidFieldType('propertyaddress', 'propertyId', pojo, 'number');
                break;
            case 'streetNumber':
                assertValidFieldType('propertyaddress', 'streetNumber', pojo, 'string');
                break;
            case 'street':
                assertValidFieldType('propertyaddress', 'street', pojo, 'string');
                break;
            case 'suburb':
                assertValidFieldType('propertyaddress', 'suburb', pojo, 'string');
                break;
            case 'state':
                assertValidFieldType('propertyaddress', 'state', pojo, 'string');
                break;
            case 'postcode':
                assertValidFieldType('propertyaddress', 'postcode', pojo, 'number');
                break;
            case 'property':
                assertValidFieldType('propertyaddress', 'property', pojo, 'propertyPojo');
                break;
            default:
                throw new Error('Invalid propertyaddress provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyaddress = assertValidpropertyaddress;
asserters['propertyaddress'] = assertValidpropertyaddress;
function assertValidpropertyagent(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyagent provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyagent provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'propertyAgentId':
                assertValidFieldType('propertyagent', 'propertyAgentId', pojo, 'number');
                break;
            case 'agentId':
                assertValidFieldType('propertyagent', 'agentId', pojo, 'number');
                break;
            case 'propertyId':
                assertValidFieldType('propertyagent', 'propertyId', pojo, 'number');
                break;
            case 'mydesktopAgentId':
                assertValidFieldType('propertyagent', 'mydesktopAgentId', pojo, 'number');
                break;
            case 'agent':
                assertValidFieldType('propertyagent', 'agent', pojo, 'agentPojo');
                break;
            case 'property':
                assertValidFieldType('propertyagent', 'property', pojo, 'propertyPojo');
                break;
            default:
                throw new Error('Invalid propertyagent provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyagent = assertValidpropertyagent;
asserters['propertyagent'] = assertValidpropertyagent;
function assertValidpropertyappraisal(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyappraisal provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyappraisal provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'propertyappraisalId':
                assertValidFieldType('propertyappraisal', 'propertyappraisalId', pojo, 'number');
                break;
            case 'fullName':
                assertValidFieldType('propertyappraisal', 'fullName', pojo, 'string');
                break;
            case 'email':
                assertValidFieldType('propertyappraisal', 'email', pojo, 'string');
                break;
            case 'phoneNumber':
                assertValidFieldType('propertyappraisal', 'phoneNumber', pojo, 'string');
                break;
            case 'streetName':
                assertValidFieldType('propertyappraisal', 'streetName', pojo, 'string');
                break;
            case 'suburbPostcode':
                assertValidFieldType('propertyappraisal', 'suburbPostcode', pojo, 'string');
                break;
            case 'bedroom':
                assertValidFieldType('propertyappraisal', 'bedroom', pojo, 'number');
                break;
            case 'bathroom':
                assertValidFieldType('propertyappraisal', 'bathroom', pojo, 'number');
                break;
            case 'garage':
                assertValidFieldType('propertyappraisal', 'garage', pojo, 'number');
                break;
            case 'additionalDetails':
                assertValidFieldType('propertyappraisal', 'additionalDetails', pojo, 'string');
                break;
            case 'message':
                assertValidFieldType('propertyappraisal', 'message', pojo, 'string');
                break;
            case 'propertyAddress':
                assertValidFieldType('propertyappraisal', 'propertyAddress', pojo, 'string');
                break;
            default:
                throw new Error('Invalid propertyappraisal provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyappraisal = assertValidpropertyappraisal;
asserters['propertyappraisal'] = assertValidpropertyappraisal;
function assertValidpropertydescription(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertydescription provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertydescription provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'propertyId':
                assertValidFieldType('propertydescription', 'propertyId', pojo, 'number');
                break;
            case 'propertydescription':
                assertValidFieldType('propertydescription', 'propertydescription', pojo, 'string');
                break;
            case 'property':
                assertValidFieldType('propertydescription', 'property', pojo, 'propertyPojo');
                break;
            default:
                throw new Error('Invalid propertydescription provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertydescription = assertValidpropertydescription;
asserters['propertydescription'] = assertValidpropertydescription;
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
            case 'propertyId':
                assertValidFieldType('propertyfeature', 'propertyId', pojo, 'number');
                break;
            case 'bedroom':
                assertValidFieldType('propertyfeature', 'bedroom', pojo, 'number');
                break;
            case 'bathroom':
                assertValidFieldType('propertyfeature', 'bathroom', pojo, 'number');
                break;
            case 'garages':
                assertValidFieldType('propertyfeature', 'garages', pojo, 'number');
                break;
            case 'carports':
                assertValidFieldType('propertyfeature', 'carports', pojo, 'number');
                break;
            case 'airConditioning':
                assertValidFieldType('propertyfeature', 'airConditioning', pojo, 'boolean');
                break;
            case 'alarmSystem':
                assertValidFieldType('propertyfeature', 'alarmSystem', pojo, 'boolean');
                break;
            case 'pool':
                assertValidFieldType('propertyfeature', 'pool', pojo, 'boolean');
                break;
            case 'otherFeatures':
                assertValidFieldType('propertyfeature', 'otherFeatures', pojo, 'string');
                break;
            case 'propertyfeaturecol':
                assertValidFieldType('propertyfeature', 'propertyfeaturecol', pojo, 'string');
                break;
            case 'property':
                assertValidFieldType('propertyfeature', 'property', pojo, 'propertyPojo');
                break;
            default:
                throw new Error('Invalid propertyfeature provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyfeature = assertValidpropertyfeature;
asserters['propertyfeature'] = assertValidpropertyfeature;
function assertValidpropertyimage(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid propertyimage provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid propertyimage provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'propertyImageId':
                assertValidFieldType('propertyimage', 'propertyImageId', pojo, 'number');
                break;
            case 'propertyId':
                assertValidFieldType('propertyimage', 'propertyId', pojo, 'number');
                break;
            case 'imageId':
                assertValidFieldType('propertyimage', 'imageId', pojo, 'string');
                break;
            case 'imageUrl':
                assertValidFieldType('propertyimage', 'imageUrl', pojo, 'string');
                break;
            case 'imageIndex':
                assertValidFieldType('propertyimage', 'imageIndex', pojo, 'number');
                break;
            case 'property':
                assertValidFieldType('propertyimage', 'property', pojo, 'propertyPojo');
                break;
            default:
                throw new Error('Invalid propertyimage provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidpropertyimage = assertValidpropertyimage;
asserters['propertyimage'] = assertValidpropertyimage;
function assertValidstatslogging(pojo, allowUndefined) {
    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid statslogging provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid statslogging provided. It is an empty object.');
    }
    var i = fieldNames.length;
    while (i-- > 0) {
        switch (fieldNames[i]) {
            case 'statsloggingId':
                assertValidFieldType('statslogging', 'statsloggingId', pojo, 'number');
                break;
            case 'route':
                assertValidFieldType('statslogging', 'route', pojo, 'string');
                break;
            case 'propertyId':
                assertValidFieldType('statslogging', 'propertyId', pojo, 'string');
                break;
            case 'ipAddress':
                assertValidFieldType('statslogging', 'ipAddress', pojo, 'string');
                break;
            case 'dateTime':
                assertValidFieldType('statslogging', 'dateTime', pojo, 'Date');
                break;
            case 'isMobile':
                assertValidFieldType('statslogging', 'isMobile', pojo, 'boolean');
                break;
            case 'userAgent':
                assertValidFieldType('statslogging', 'userAgent', pojo, 'string');
                break;
            default:
                throw new Error('Invalid statslogging provided. Field \'' + fieldNames[i] + '\' is not supported.');
        }
    }
}
exports.assertValidstatslogging = assertValidstatslogging;
asserters['statslogging'] = assertValidstatslogging;
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