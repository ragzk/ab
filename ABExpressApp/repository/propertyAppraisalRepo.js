/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var _ = require('lodash');
var Promise = require('q');
//import rentalDefinitions = require('rentalDefinitions');
var propertyAppraisalRepo = (function () {
    function propertyAppraisalRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyAppraisalRepo.prototype.save = function (obj) {
        try {
            var that = this;
            var propertyAppraisal = models.propertyappraisal.build({
                fullName: obj.fullname,
                email: obj.email,
                phoneNumber: obj.phoneNumber,
                propertyAddress: obj.propertyAddress
            });
            var r = propertyAppraisal.save().then(function (e) {
                return e;
            });
            return r;
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyAppraisalRepo;
})();
exports.propertyAppraisalRepo = propertyAppraisalRepo;
//# sourceMappingURL=propertyAppraisalRepo.js.map