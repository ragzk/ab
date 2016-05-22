/// <reference path="../enums.ts" />
/// <reference path="../dbConfig.ts" />
/// <reference path="../rentalInterface.d.ts" />

import types = require('../schema/sequelize-types');
import models = require('../schema/sequelize-models');
import dbConfig = require('../dbConfig');
//import rentalDefinitions = require('rentalDefinitions');

export class propertyImageRepo {
    _dbConfig: dbConfig.dbConfig;
    _instance: types.propertyimageInstance;
    constructor() {
        this._dbConfig = new dbConfig.dbConfig();
        models.initialize(this._dbConfig.database, this._dbConfig.user, this._dbConfig.password, { define: { freezeTableName: true } });
    }


    getPropertyImages(id: number, imageId: string ) {
        var findOptions = <sequelize.FindOptions>{};
        findOptions.where = { propertyId: id, imageId: imageId };
        var r = models.propertyimage.find({ where: { propertyId: id, imageId: imageId } });
        return r;
    }

    savePropertyImage(img: IImage, propertyId: number) {
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
                            propertyId: <any>propertyId,
                            imageIndex: img.index,
                            imageId: img.id,
                            imageUrl: img.url
                        });
                        image.save();
                    }
                }
                this._instance = image;
            });
            //return this._instance;
        }
        catch (ex) {
            throw ex;
        }
    }
    //models.locations.create();
}


