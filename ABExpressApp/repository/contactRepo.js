/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var _ = require('lodash');
var Promise = require('q');
//import rentalDefinitions = require('rentalDefinitions');
var contactRepo = (function () {
    function contactRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    contactRepo.prototype.save = function (obj) {
        try {
            var that = this;
            var contact = models.contact.build({
                name: obj.name,
                email: obj.email,
                subject: obj.subject,
                message: obj.message
            });
            var r = contact.save().then(function (e) {
                return e;
            });
            return r;
        }
        catch (ex) {
            throw ex;
        }
    };
    return contactRepo;
})();
exports.contactRepo = contactRepo;
//# sourceMappingURL=contactRepo.js.map