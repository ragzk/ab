/// <reference path="enums.ts" />
/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />

//module processRentalJSONModule {

//declare function require(name: string);
import propertyReport = require("./repository/propertyRepo");
import propertyAddressReport = require("./repository/propertyAddressRepo");
import propertyFeatureReport = require("./repository/propertyFeatureRepo");
import propertyDescriptionReport = require("./repository/propertyDescriptionRepo");
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
        this.addToDBAndImages().then(this.copyXmlFileToProcessedFiles());
    }

    public addToDBAndImages() {
        //console.log(this.data);
        // add pipe or make it chain
        var obj = this.data.rental || this.data.residential || this.data.land;
        console.log(obj.status);
        var func = function (that) {
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                for (var o in obj) {
                    //that.addInformationToDB(that, obj[o]).then(
                    //    that.addImages(that, obj[o]));

                    that.addImagesAndDB(obj[0]);
                }
            }
            else {
                that.addImagesAndDB(obj);
                //that.addInformationToDB(that, obj).then(
                //    that.addImages(that, obj));    // copy files to processed location
            }
        }
        return Promise.nfcall(func, this);
    }
    private addImagesAndDB(obj) {
        this.addImages(this, obj).then(this.addInformationToDB(this, obj));
    }
    public addInformationToDB(that: processRentalJSON, obj: IRental) {
        var func = function () {
            var repo = new propertyReport.propertyRepo();
            var addressRepo = new propertyAddressReport.propertyAddressRepo();
            var featureRepo = new propertyFeatureReport.propertyFeatureRepo();
            var descriptionRepo = new propertyDescriptionReport.propertyDescriptionRepo();
            var fileName = that.path.basename(that.xmlPath);
            obj.fileName = fileName;
            repo.saveProperty(obj).then(function () {
                addressRepo.savePropertyAddress(obj).then(function () {
                    featureRepo.savePropertyFeature(obj).then(function () {
                        descriptionRepo.savePropertyDescription(obj);
                    });
                })
            });
        }
        return Promise.nfcall(func);
    }
    public copyXmlFileToProcessedFiles() {
        //this.fs.createReadStream(this.path).pipe(this.fs.createWriteStream(this.path));
        //var func = function () {
            var fileName = this.path.basename(this.xmlPath)
            return this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
        //}
        //return new Promise(function (resolve, reject) {
        //    if (func()) {
        //        resolve("This is true"); // State will be fulfilled
        //    } else {
        //        reject("This is false"); // State will be rejected
        //    }
        //})
    }
    public addImages(that: processRentalJSON, obj: IRental) {
        var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
                request(uri).pipe(that.fs.createWriteStream(filename)).on('close', callback);
            });
        };
        var func = function () {
            if (obj && obj.images && obj.images.img) {
                for (var i = 0; i < obj.images.img.length; i++) {
                    var img = <IImage>obj.images.img[i];
                    var dirName = "./public/images/" + obj.uniqueID;
                    var funcImage = function (img) {
                        var func3 = function (img) {
                        }
                        var func1 = function (img) {
                            if (img && img.id === "m" && img.url) {
                                var dirname = function () {
                                    if (obj.status === StausEnum[StausEnum.leased])
                                        return "leased";
                                    else if (obj.status === StausEnum[StausEnum.sold])
                                        return "sold";
                                    else if (obj.status === StausEnum[StausEnum.current]) {
                                        return obj.rent ? "rent" : "unsold";
                                    }
                                } ();
                                var sliderDir = "./public/images/sliderImages/" + dirname;

                                if (!that.fs.existsSync(sliderDir)) {
                                    that.fs.mkdirSync(sliderDir)
                                }

                                //that.readAndWriteImage(img.url, sliderDir + "/" + that.path.basename(img.url));
                                //that.readAndWriteImage(img.url, sliderDir + "/" + that.path.basename(img.url));
                                //return Promise.nfcall(that.readAndWriteImage, img.url, sliderDir + "/" + that.path.basename(img.url)).then(func2(img));
                                //return that.readAndWriteImage(img.url, sliderDir + "/" + that.path.basename(img.url)).then(func2(img));
                                var fileNameWithPath = sliderDir + "/" + that.path.basename(obj.uniqueID) + that.path.extname(img.url);
                                that.fs.exists(fileNameWithPath, function (exists) {
                                    if (!exists) {
                                        // Do something
                                        try {
                                            download(img.url, fileNameWithPath, func2);
                                            obj.imageUrl = fileNameWithPath;
                                        }
                                        catch (ex) {
                                            console.log('Download image url ' + img.url + ' filename ' + obj.fileName);
                                            console.log(ex.message);
                                        }
                                    }
                                    
                                });
                                obj.imageUrl = fileNameWithPath.replace('./', "/");
                                return func2(img);
                            }
                            return func2(img);
                        }

                        var func2 = function (img) {
                            //Promise.nfcall(that.readAndWriteImage, img.url, dirName + "/" + that.path.basename(img.url));
                            if (img && img.url) {
                                //that.readAndWriteImage, img.url, dirName + "/" + that.path.basename(img.url).then(func3(img));
                                var fileNameWithPath = dirName + "/" + that.path.basename(img.url);
                                that.fs.exists(fileNameWithPath, function (exists) {
                                    if (!exists) {
                                        // Do something
                                        try {
                                            download(img.url, fileNameWithPath, func3);
                                        }
                                        catch (ex) {
                                            console.log('Download image url ' + img.url + ' filename ' + obj.fileName);
                                            console.log(ex.message);
                                        }
                                    }
                                });
                                
                            }
                        }

                        if (!that.fs.existsSync(dirName)) {
                            //that.fs.mkdirSync(dirName).then(func1(lImage, img)).then(func2(img));
                            //that.fs.mkdirSync(dirName).then(func1(lImage, img).then(func2(img)));
                            //that.fs.mkdirSync(dirName).then(func1(img));
                            that.fs.mkdirSync(dirName)
                        }
                        else {
                            //Promise.when([]).then(func1(lImage, img)).then(func2(img));
                            //Promise.when([]).then(func1(lImage, img).then(func2(img)));
                            //Promise.when([]).then(func1(img));
                        }
                        Promise.when([]).then(func1(img));
                    }
//                    var funcx = func().then(func1).then(func2);
                    Promise.nfcall(funcImage, img);
                    //func().then(function () {
                        
                    //    if (image === "0") {
                    //        var dirname = obj.rent ? "rent" : "sold";
                    //        var sliderDir = "./public/images/sliderImages/" + dirname;
                    //        //that.readAndWriteImage(img.url, sliderDir + "/" + that.path.basename(img.url));
                    //        Promise.nfcall(that.readAndWriteImage, img.url, sliderDir + "/" + that.path.basename(img.url));
                    //    }
                    //    Promise.nfcall(that.readAndWriteImage, img.url, sliderDir + "/" + that.path.basename(img.url));
                    //    //that.readAndWriteImage(img.url, dirName + "/" + that.path.basename(img.url));
                    //})
                    //if (image === "0") {
                    //    var dirname = obj.rent ? "rent" : "sold";
                    //    var sliderDir = "./public/images/sliderImages/" + dirname;
                    //    that.readAndWriteImage(img.url, sliderDir + "/" + that.path.basename(img.url));
                    //}
                    //that.readAndWriteImage(img.url, dirName + "/" + that.path.basename(img.url));
                }
            }
        }
        return Promise.nfcall(func);
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
    p.process();
}

    
   
//} 
