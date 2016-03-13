/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
var propertyAddressRepo = (function () {
    function propertyAddressRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyAddressRepo.prototype.getLocation = function (id) {
        var findOptions = {};
        findOptions.where = { id: id };
        return models.propertyaddress.findAll(findOptions);
    };
    propertyAddressRepo.prototype.saveLocation = function (rentalObj) {
        var loc = models.propertyaddress.build({
            identifier: rentalObj.address.suburb.display,
            name: rentalObj.address.suburb.text,
            postcode: rentalObj.address.postcode,
        });
    };
    return propertyAddressRepo;
})();
exports.propertyAddressRepo = propertyAddressRepo;
//# sourceMappingURL=propertyAddressRepo.js.map