/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />
var models = require('../schema/sequelize-models');
var dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');
var propertyImageRepo = (function () {
    function propertyImageRepo() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }
    propertyImageRepo.prototype.getPropertyImages = function (id, imageId) {
        var findOptions = {};
        findOptions.where = { propertyId: id, imageId: imageId };
        var r = models.propertyimage.find({ where: { propertyId: id, imageId: imageId } });
        return r;
    };
    propertyImageRepo.prototype.savePropertyImage = function (img, propertyId) {
        try {
            return this.getPropertyImages(propertyId, img.id).then(function (e) {
                var image = e;
                if (image) {
                    if (image.imageUrl != img.url || image.imageIndex != img.index) {
                        //image.set({
                        //    imageId: img.id,
                        //    imageUrl: img.url,
                        //    imageIndex: img.index
                        //});
                        image.imageId = img.id;
                        image.imageIndex = img.index;
                        image.imageUrl = img.url;
                        image.save();
                    }
                }
                else {
                    if (img.id && img.url) {
                        image = models.propertyimage.build({
                            propertyId: propertyId,
                            imageIndex: img.index,
                            imageId: img.id,
                            imageUrl: img.url
                        });
                        image.save();
                    }
                }
                this._instance = image;
            });
        }
        catch (ex) {
            throw ex;
        }
    };
    return propertyImageRepo;
})();
exports.propertyImageRepo = propertyImageRepo;
//# sourceMappingURL=propertyImageRepo.js.map