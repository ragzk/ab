/// <reference path="enums.ts" />
/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />
//module processRentalJSONModule {
//declare function require(name: string);
var propertyReport = require("./repository/propertyRepo");
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
        this.addToDBAndImages().then(this.copyXmlFileToProcessedFiles());
    };
    processRentalJSON.prototype.addToDBAndImages = function () {
        //console.log(this.data);
        // add pipe or make it chain
        var obj = this.data.rental || this.data.residential || this.data.land;
        console.log(obj.status);
        var func = function (that) {
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                for (var o in obj) {
                    that.addInformationToDB(that, obj[o]).then(that.addImages(that, obj[o]));
                }
            }
            else {
                that.addInformationToDB(that, obj).then(that.addImages(that, obj)); // copy files to processed location
            }
        };
        return Promise.nfcall(func, this);
        //return new Promise(function (resolve, reject) {
        //    if (func()) {
        //        resolve("This is true"); // State will be fulfilled
        //    } else {
        //        reject("This is false"); // State will be rejected
        //    }
        //})
    };
    processRentalJSON.prototype.addInformationToDB = function (that, obj) {
        var func = function () {
            var repo = new propertyReport.propertyRepo();
            var fileName = that.path.basename(that.xmlPath);
            obj.fileName = fileName;
            repo.saveProperty(obj);
        };
        return Promise.nfcall(func);
    };
    processRentalJSON.prototype.copyXmlFileToProcessedFiles = function () {
        //this.fs.createReadStream(this.path).pipe(this.fs.createWriteStream(this.path));
        //var func = function () {
        var fileName = this.path.basename(this.xmlPath);
        return this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
        //}
        //return new Promise(function (resolve, reject) {
        //    if (func()) {
        //        resolve("This is true"); // State will be fulfilled
        //    } else {
        //        reject("This is false"); // State will be rejected
        //    }
        //})
    };
    processRentalJSON.prototype.addImages = function (that, obj) {
        var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
                request(uri).pipe(that.fs.createWriteStream(filename)).on('close', callback);
            });
        };
        var func = function () {
            if (obj && obj.images && obj.images.img) {
                for (var i = 0; i < obj.images.img.length; i++) {
                    var img = obj.images.img[i];
                    var dirName = "./public/images/" + obj.uniqueID;
                    var funcImage = function (img) {
                        var func3 = function (img) {
                        };
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
                                }();
                                var sliderDir = "./public/images/sliderImages/" + dirname;
                                if (!that.fs.existsSync(sliderDir)) {
                                    that.fs.mkdirSync(sliderDir);
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
                                        }
                                        catch (ex) {
                                            console.log('Download image url ' + img.url + ' filename ' + obj.fileName);
                                            console.log(ex.message);
                                        }
                                    }
                                });
                                return func2(img);
                            }
                            return func2(img);
                        };
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
                        };
                        if (!that.fs.existsSync(dirName)) {
                            //that.fs.mkdirSync(dirName).then(func1(lImage, img)).then(func2(img));
                            //that.fs.mkdirSync(dirName).then(func1(lImage, img).then(func2(img)));
                            //that.fs.mkdirSync(dirName).then(func1(img));
                            that.fs.mkdirSync(dirName);
                        }
                        else {
                        }
                        Promise.when([]).then(func1(img));
                    };
                    //                    var funcx = func().then(func1).then(func2);
                    Promise.nfcall(funcImage, img);
                }
            }
        };
        return Promise.nfcall(func);
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
    p.process();
};
//} 
//# sourceMappingURL=processRentalJSONModule.js.map