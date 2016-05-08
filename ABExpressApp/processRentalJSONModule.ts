/// <reference path="enums.ts" />
/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />

//module processRentalJSONModule {

//declare function require(name: string);
import propertyReport = require("./repository/propertyRepo");
import propertyAddressReport = require("./repository/propertyAddressRepo");
import propertyFeatureReport = require("./repository/propertyFeatureRepo");
import propertyDescriptionReport = require("./repository/propertyDescriptionRepo");
import propertyImageReport = require("./repository/propertyImageRepo");
import propertyAgentReport = require("./repository/propertyAgentRepo");
import types = require('./schema/sequelize-types');
//import rentalDefinitions = require('rentalDefinitions');
//import enumTypes = require('enumTypes');
var Promise = require('q')
var request = require('request');

enum CategoryEnum {
    House,
    Unit,
    Townhouse,
    Land
}

enum TypeEnum {
    Rent,
    Sold,
    UnSold,
}
enum StausEnum {
    current,
    leased,
    sold,
    withdrawn
}
class processRentalJSON {
    data: IPropertyList;
    fs: any;
    request: any;
    path: any;
    xmlPath: string;

    constructor() { }

    public process() {
        this.addToDBAndImages().then(function () {
            return this.copyXmlFileToProcessedFiles()
        });
    }

    public addToDBAndImages() {
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
        }
        return func(this);
    }
    private addImagesAndDB(that: processRentalJSON, obj: IRental) {
        return that.downloadImagesSynchornously(this, obj)
            .then(
            function () {
                return that.addInformationToDB(that, obj)
            });
    }
    public addInformationToDB(that: processRentalJSON, obj: IRental) {
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
                obj.propertyId = <any>prop.propertyId;
                addressRepo.savePropertyAddress(obj)
                    .then(function () {
                        return featureRepo.savePropertyFeature(obj);
                    })
                    .then(function () {
                        return descriptionRepo.savePropertyDescription(obj);
                    })
                    .then(function () {
                        for (var i = 0; i < obj.listingAgent.length; i++) {
                            var agent = <IListingAgent>obj.listingAgent[i];
                            return agentRepo.savepropertyagent(agent, obj.propertyId);
                        }
                    })
                    .then(function () {
                        if (obj && obj.images && obj.images.img) {
                            var img = <IImage>obj.images.img[0];
                            return thatFunc.savePropertyImagesInDb(img, obj, imageRepo, 0);
                        
                        //for (var i = 0; i < obj.images.img.length; i++) {
                        //    var img = <IImage>obj.images.img[i];
                        //    if (img && img.url) {
                        //        imageRepo.savePropertyImage(img, obj.propertyId);
                        //    }
                        //}

                    }                    
                })
            });
        }
        return Promise.nfcall(func);
    }
    public savePropertyImagesInDb(img: IImage, obj: IRental, imageRepo: propertyImageReport.propertyImageRepo, index: number) {
        var that = this;
        return imageRepo.savePropertyImage(img, obj.propertyId).then(function (savedImage) {
            if (++index < obj.images.img.length) {
                img = <IImage>obj.images.img[index];
                that.savePropertyImagesInDb(img, obj, imageRepo, index);
            }
        })

    }
    public copyXmlFileToProcessedFiles() {
        var fileName = this.path.basename(this.xmlPath)
        return this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
    }

    public downloadImage(that: processRentalJSON, uri, filename) {
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
    }

    public downloadImagesSynchornously(that: processRentalJSON, obj: IRental) {
        if (obj && obj.images && obj.images.img) {
            var img = <IImage>obj.images.img[0];
            var dirName = "./public/images/" + obj.uniqueID;
            var thatFunc = this;
            return this.addImageDirectory(that, dirName).then(function () {
                return thatFunc.downloadImages(that, obj, img, dirName, 0);
            });
        }
    }

    public addImageDirectory(that: processRentalJSON, dirName: string) {
        if (!that.fs.existsSync(dirName)) {
            that.fs.mkdirSync(dirName)
        }
        return Promise.when([]);
    }
    public downloadImages(that: processRentalJSON, obj: IRental, img: IImage, dirName: string, index :number) {
        if (img && img.url) {
            var fileNameWithPath = dirName + "/" + that.path.basename(img.url);
            var thatFunc = this;
            return this.downloadImage(that, img.url, fileNameWithPath).then(function () {
                img.url = fileNameWithPath.replace("./", "/");
                if (index == 0) {
                    obj.imageUrl = img.url;
                }

                if (obj.images.img.length > ++index) {
                    img = <IImage>obj.images.img[index];
                    thatFunc.downloadImages(that, obj, img, dirName, index).then(function () {
                        return Promise.when([]);
                    });
                }
                
            });
        }
    }

    public addImages(that: processRentalJSON, obj: IRental) {
        var download = function (uri, filename) {
            return request.head(uri, function (err, res, body) {
                request(uri).pipe(that.fs.createWriteStream(filename));
            });
        };
        var func = function () {
            if (obj && obj.images && obj.images.img) {
                for (var i = 0; i < obj.images.img.length; i++) {

                    var img = <IImage>obj.images.img[i];
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
                    }

                    if (!that.fs.existsSync(dirName)) {
                        that.fs.mkdirSync(dirName)
                    }
                    return Promise.when([]).then(func2(img));
                }
            }
        }
        return func();
    }
    public readAndWriteImage(srcPath: string, savPath: string) {
        if (srcPath) {
            var options = {
                url: srcPath,
                port: 80,
                method: 'GET'
            };
            return this.request.get(options).pipe(this.fs.createWriteStream(savPath));
        }
    }
}
export var init = function (data: IPropertyList, fs: any, request:any, path:any, xmlPath: string) {
    var p = new processRentalJSON()
    p.data = data;
    p.fs = fs;
    p.request = request;
    p.path = path;
    p.xmlPath = xmlPath;
    return p.process();
}

    
   
//} 
