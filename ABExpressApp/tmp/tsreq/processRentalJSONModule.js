/// <reference path="rentalInterface.d.ts" />
var processRentalJSON = (function () {
    function processRentalJSON() {
    }
    processRentalJSON.prototype.process = function (data) {
        console.log(data);
    };
    return processRentalJSON;
}());
var processRentalJSONModule;
(function (processRentalJSONModule) {
    processRentalJSONModule.processRentalJSONInstance = function (data) {
        console.log(data);
    };
})(processRentalJSONModule || (processRentalJSONModule = {}));
