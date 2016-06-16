/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var moment = require('moment');
var _ = require('lodash');
var Promise = require('q');
var statsLoggingRepo = (function () {
    function statsLoggingRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    statsLoggingRepo.prototype.save = function (obj) {
        try {
            var that = this;
            var statsLogging = models.statslogging.build({
                route: obj.route,
                propertyId: obj.propertyId,
                ipAddress: obj.ipAddress,
                dateTime: moment(moment.utc()).toDate()
            });
            return statsLogging.save();
        }
        catch (ex) {
            throw ex;
        }
    };
    return statsLoggingRepo;
})();
exports.statsLoggingRepo = statsLoggingRepo;
//# sourceMappingURL=statsLoggingReport.js.map