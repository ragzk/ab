/// <reference path="enums.ts" />
/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />
//module processRentalJSONModule {
//declare function require(name: string);
var propertyReport = require("./repository/propertyRepo");
var propertyAddressReport = require("./repository/propertyAddressRepo");
var propertyFeatureReport = require("./repository/propertyFeatureRepo");
var propertyDescriptionReport = require("./repository/propertyDescriptionRepo");
var propertyImageReport = require("./repository/propertyImageRepo");
var propertyAgentReport = require("./repository/propertyAgentRepo");
//import rentalDefinitions = require('rentalDefinitions');
//import enumTypes = require('enumTypes');
var Promise = require('q');
var request = require('request');
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum[CategoryEnum["House"] = 0] = "House";
    CategoryEnum[CategoryEnum["Unit"] = 1] = "Unit";
    CategoryEnum[CategoryEnum["Townhouse"] = 2] = "Townhouse";
    CategoryEnum[CategoryEnum["Land"] = 3] = "Land";
})(CategoryEnum || (CategoryEnum = {}));
var TypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Rent"] = 0] = "Rent";
    TypeEnum[TypeEnum["Sold"] = 1] = "Sold";
    TypeEnum[TypeEnum["UnSold"] = 2] = "UnSold";
})(TypeEnum || (TypeEnum = {}));
var StausEnum;
(function (StausEnum) {
    StausEnum[StausEnum["current"] = 0] = "current";
    StausEnum[StausEnum["leased"] = 1] = "leased";
    StausEnum[StausEnum["sold"] = 2] = "sold";
    StausEnum[StausEnum["withdrawn"] = 3] = "withdrawn";
})(StausEnum || (StausEnum = {}));
var processRentalJSON = (function () {
    function processRentalJSON() {
    }
    processRentalJSON.prototype.process = function () {
        this.addToDBAndImages().then(function () {
            return this.copyXmlFileToProcessedFiles();
        });
    };
    processRentalJSON.prototype.addToDBAndImages = function () {
        //console.log(this.data);
        // add pipe or make it chain
        var obj = this.data.rental || this.data.residential || this.data.land;
        console.log(obj.status);
        var func = function (that) {
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                for (var o in obj) {
                    return that.addImagesAndDB(that, obj[0]);
                }
            }
            else {
                return that.addImagesAndDB(that, obj);
            }
        };
        return func(this);
    };
    processRentalJSON.prototype.addImagesAndDB = function (that, obj) {
        return that.downloadImagesSynchornously(this, obj)
            .then(function () {
            return that.addInformationToDB(that, obj);
        });
    };
    processRentalJSON.prototype.addInformationToDB = function (that, obj) {
        var thatFunc = this;
        var func = function () {
            var repo = new propertyReport.propertyRepo();
            var addressRepo = new propertyAddressReport.propertyAddressRepo();
            var featureRepo = new propertyFeatureReport.propertyFeatureRepo();
            var descriptionRepo = new propertyDescriptionReport.propertyDescriptionRepo();
            var imageRepo = new propertyImageReport.propertyImageRepo();
            var agentRepo = new propertyAgentReport.propertyagentRepo();
            var fileName = that.path.basename(that.xmlPath);
            obj.fileName = fileName;
            if (that.data.rental) {
                obj.type = "rental";
            }
            if (that.data.residential) {
                obj.type = "residential";
            }
            if (that.data.land) {
                obj.type = "land";
            }
            repo.saveProperty(obj).then(function (prop) {
                obj.propertyId = prop.propertyId;
                addressRepo.savePropertyAddress(obj)
                    .then(function () {
                    return featureRepo.savePropertyFeature(obj);
                })
                    .then(function () {
                    return descriptionRepo.savePropertyDescription(obj);
                })
                    .then(function () {
                    for (var i = 0; i < obj.listingAgent.length; i++) {
                        var agent = obj.listingAgent[i];
                        return agentRepo.savepropertyagent(agent, obj.propertyId);
                    }
                })
                    .then(function () {
                    if (obj && obj.images && obj.images.img) {
                        var img = obj.images.img[0];
                        return thatFunc.savePropertyImagesInDb(img, obj, imageRepo, 0);
                    }
                });
            });
        };
        return Promise.nfcall(func);
    };
    processRentalJSON.prototype.savePropertyImagesInDb = function (img, obj, imageRepo, index) {
        var that = this;
        return imageRepo.savePropertyImage(img, obj.propertyId).then(function (savedImage) {
            if (++index < obj.images.img.length) {
                img = obj.images.img[index];
                that.savePropertyImagesInDb(img, obj, imageRepo, index);
            }
        });
    };
    processRentalJSON.prototype.copyXmlFileToProcessedFiles = function () {
        var fileName = this.path.basename(this.xmlPath);
        return this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
    };
    processRentalJSON.prototype.downloadImage = function (that, uri, filename) {
        if (!that.fs.existsSync(filename)) {
            try {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(that.fs.createWriteStream(filename));
                    return Promise.when([]);
                });
            }
            catch (ex) {
                console.log('Download image url ' + uri + ' filename ' + filename);
                console.log(ex.message);
            }
        }
        return Promise.when([]);
    };
    processRentalJSON.prototype.downloadImagesSynchornously = function (that, obj) {
        if (obj && obj.images && obj.images.img) {
            var img = obj.images.img[0];
            var dirName = "./public/images/" + obj.uniqueID;
            var thatFunc = this;
            return this.addImageDirectory(that, dirName).then(function () {
                return thatFunc.downloadImages(that, obj, img, dirName, 0);
            });
        }
    };
    processRentalJSON.prototype.addImageDirectory = function (that, dirName) {
        if (!that.fs.existsSync(dirName)) {
            that.fs.mkdirSync(dirName);
        }
        return Promise.when([]);
    };
    processRentalJSON.prototype.downloadImages = function (that, obj, img, dirName, index) {
        if (img && img.url) {
            var fileNameWithPath = dirName + "/" + that.path.basename(img.url);
            var thatFunc = this;
            return this.downloadImage(that, img.url, fileNameWithPath).then(function () {
                img.url = fileNameWithPath.replace("./", "/");
                if (index == 0) {
                    obj.imageUrl = img.url;
                }
                if (obj.images.img.length > ++index) {
                    img = obj.images.img[index];
                    thatFunc.downloadImages(that, obj, img, dirName, index).then(function () {
                        return Promise.when([]);
                    });
                }
            });
        }
    };
    processRentalJSON.prototype.addImages = function (that, obj) {
        var download = function (uri, filename) {
            return request.head(uri, function (err, res, body) {
                request(uri).pipe(that.fs.createWriteStream(filename));
            });
        };
        var func = function () {
            if (obj && obj.images && obj.images.img) {
                for (var i = 0; i < obj.images.img.length; i++) {
                    var img = obj.images.img[i];
                    img.index = i;
                    var dirName = "./public/images/" + obj.uniqueID;
                    var func2 = function (img) {
                        if (img && img.url) {
                            var fileNameWithPath = dirName + "/" + that.path.basename(img.url);
                            that.fs.exists(fileNameWithPath, function (exists) {
                                if (!exists) {
                                    try {
                                        download(img.url, fileNameWithPath).then(function () {
                                            img.url = fileNameWithPath.replace("./", "/");
                                        });
                                    }
                                    catch (ex) {
                                        console.log('Download image url ' + img.url + ' filename ' + obj.fileName);
                                        console.log(ex.message);
                                    }
                                }
                                img.url = fileNameWithPath.replace("./", "/");
                                Promise.when([]);
                            });
                        }
                    };
                    if (!that.fs.existsSync(dirName)) {
                        that.fs.mkdirSync(dirName);
                    }
                    return Promise.when([]).then(func2(img));
                }
            }
        };
        return func();
    };
    processRentalJSON.prototype.readAndWriteImage = function (srcPath, savPath) {
        if (srcPath) {
            var options = {
                url: srcPath,
                port: 80,
                method: 'GET'
            };
            return this.request.get(options).pipe(this.fs.createWriteStream(savPath));
        }
    };
    return processRentalJSON;
})();
exports.init = function (data, fs, request, path, xmlPath) {
    var p = new processRentalJSON();
    p.data = data;
    p.fs = fs;
    p.request = request;
    p.path = path;
    p.xmlPath = xmlPath;
    return p.process().then(function()
    {
        return true;
    });
};
//} 
//# sourceMappingURL=processRentalJSONModule.js.map