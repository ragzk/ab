/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');
var propertyDescriptionRepo = (function () {
    function propertyDescriptionRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyDescriptionRepo.prototype.getPropertyDescription = function (id) {
        var findOptions = {};
        findOptions.where = { propertyId: id };
        var r = models.propertydescription.find({ where: { propertyId: id } });
        return r;
    };
    propertyDescriptionRepo.prototype.savePropertyDescription = function (rentalObj) {
        try {
            return this.getPropertyDescription(rentalObj.propertyId).then(function (e) {
                var description = e;
                if (description) {
                    description.propertyId.PropertyId = rentalObj.propertyId;
                    description.propertydescription = rentalObj.description;
                }
                else {
                    description = models.propertydescription.build({
                        propertyId: rentalObj.propertyId,
                        propertydescription: rentalObj.description
                    });
                }
                description.save();
                this._instance = description;
            });
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyDescriptionRepo;
})();
exports.propertyDescriptionRepo = propertyDescriptionRepo;
//# sourceMappingURL=propertyDescriptionRepo.js.map