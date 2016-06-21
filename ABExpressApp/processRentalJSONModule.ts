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
var Promise = require('q');
var request = require('request');
var _ = require('lodash');
var processGoingOn = false;
var currentProcessing = null;
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

        var that = this;

        //waitfor(_isBusy, false, _TIMEOUT, 0, 'play->busy false',  function () {
        processGoingOn = true;
        currentProcessing = that;
        console.log('*****processing started for file' + that.xmlPath);
        return that.addToDBAndImages().then(function () {
            console.log("addToDBAndImages done");
            that.copyXmlFileToProcessedFiles().then(function () {
                console.log('********************************* processing completed for file' + that.xmlPath);
                processGoingOn = false;
            });
        });
        //});
        

    }

    public addToDBAndImages() {
        //console.log(this.data);
        // add pipe or make it chain

        var obj = [];
        if (this.data.rental) {
            if (_.isArray(this.data.rental)) {
                obj = obj.concat(this.data.rental);
            }
            else {
                obj.push(this.data.rental);
            }
        }
        if (this.data.residential) {
            if (_.isArray(this.data.residential)) {
                obj = obj.concat(this.data.residential);
            }
            else {
                obj.push(this.data.residential);
            }
        }
        if (this.data.land) {
            if (_.isArray(this.data.land)) {
                obj = obj.concat(this.data.land);
            }
            else {
                obj.push(this.data.land);
            }
        }


        var that = this;
        //console.log(obj.status);
        //      var func = function (that) {
        console.log("addImagesAndDB started");
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            var i = 0;
            return promiseWhile(function () { return (<any>obj).length > i; }, function () {
                that.addImagesAndDB(that, obj[i]);
                i++;
            }).then(function () {
                console.log('multiple properties processed');
                return Promise.when([]);
            });

            //for (var o in obj) {
            //    return that.addImagesAndDB(that, obj[0]);
            //}
        }
        //else {
        //    return that.addImagesAndDB(that, obj);
        //}
        //        }
        //        return func(this);
    }
    private addImagesAndDB(that: processRentalJSON, obj: IRental) {
        console.log("downloadImagesSynchornously started");
        return that.downloadImagesSynchornously(this, obj)
            .then(function () {
                console.log("downloadImagesSynchornously done");
                console.log("addInformationToDB started");
                return that.addInformationToDB(that, obj);
                //return Promise.all([dbDone]).then(Promise.when([]));
            }).then(function () {
                return Promise.when([]);
            });
    }
    public addInformationToDB(that: processRentalJSON, obj: IRental) {
        var thatFunc = this;
        //        var func = function () {
        var repo = new propertyReport.propertyRepo();
        var addressRepo = new propertyAddressReport.propertyAddressRepo();
        var featureRepo = new propertyFeatureReport.propertyFeatureRepo();
        var descriptionRepo = new propertyDescriptionReport.propertyDescriptionRepo();
        var imageRepo = new propertyImageReport.propertyImageRepo();
        var agentRepo = new propertyAgentReport.propertyagentRepo();
        var fileName = that.path.basename(that.xmlPath);
        obj.fileName = fileName;

        var getObject = function (arr) {
            var arr1 = [];
            if (!_.isArray(arr)) {
                arr1.push(arr);
            }
            else {
                arr1 = arr;
            }
            var o = _.find(arr1, function (o) {
                return o && o.uniqueID == obj.uniqueID;
            });
            return o;
        }

        if (getObject(this.data.rental)) {
            obj.type = "rental";
        }
        else {
            if (getObject(this.data.residential)) {
                obj.type = "residential";
            }
            else {
                obj.type = "land";
            }
        }

        //if (that.data.rental) {
        //    obj.type = "rental";
        //}
        //if (that.data.residential) {
        //    obj.type = "residential";
        //}
        //if (that.data.land) {
        //    obj.type = "land";
        //}
        console.log("save property info started");
        var fileNameWithoutExtension = that.xmlPath.slice(0, -4);
        obj.lastUpdateFileNumber = +fileNameWithoutExtension.substring(fileNameWithoutExtension.lastIndexOf('_') + 1);
        var prop = null;
        var chain = repo.saveProperty(obj)
            .then(function (prop) {
                console.log("save property info done");
                console.log("save property address started");
                obj.propertyId = <any>prop.propertyId;
                if (obj.lastUpdateFileNumber == prop.lastUpdateFileNumber) {
                    addressRepo.savePropertyAddress(obj)
                        .then(function () {
                            console.log("save property address done");
                            console.log("save property feature started");
                            if (obj.features) {
                                featureRepo.savePropertyFeature(obj);
                            }
                            else {
                                Promise.when([]);
                            }
                        })
                        .then(function () {
                            console.log("save property feature done");
                            console.log("save property description started");
                            descriptionRepo.savePropertyDescription(obj);
                        })
                        .then(function () {
                            console.log("save property description done");
                            console.log("save property agent info started");
                            if (obj.listingAgent.length) {
                                var i = 0;
                                return promiseWhile(function () { return obj.listingAgent.length > i; }, function () {
                                    var agent = <IListingAgent>obj.listingAgent[i];
                                    agentRepo.savepropertyagent(agent, obj.propertyId);
                                    i++;
                                }).then(function () {
                                    console.log('all image saved in DB');
                                    Promise.when([]);
                                })
                                //for (var i = 0; i < obj.listingAgent.length; i++) {
                                //    var agent = <IListingAgent>obj.listingAgent[i];
                                //    return agentRepo.savepropertyagent(agent, obj.propertyId);
                                //}
                            }
                            else {
                                var agent1 = <any>obj.listingAgent;
                                agentRepo.savepropertyagent(agent1, obj.propertyId);
                            }
                        })
                        .then(function () {
                            console.log("save property agent info done");
                            console.log("save property image info started");
                            if (obj && obj.images && obj.images.img) {
                                var img = <IImage>obj.images.img[0];
                                thatFunc.savePropertyImagesInDb(img, obj, imageRepo, 0).then(function () {
                                    console.log('savePropertyImagesInDb ** done');
                                    return Promise.when([]);
                                });


                            }
                        }).done(function () {
                            return Promise.when([]);
                        });
                }

            })
        return Promise.all([chain]).then(function () { return Promise.when([]); });

        //        }
        //        return func();
    }
    public savePropertyImagesInDb(img: IImage, obj: IRental, imageRepo: propertyImageReport.propertyImageRepo, index: number) {
        var that = this;

        return promiseWhile(function () { return obj.images.img.length > index; }, function () {
            img = <IImage>obj.images.img[index];
            if (img.url) {
                imageRepo.savePropertyImage(img, obj.propertyId);
            }
            index++;
        }).then(function () {
            console.log('all image saved in DB');
            return Promise.when([]);
        })

    }
    public copyXmlFileToProcessedFiles() {
        var fileName = this.path.basename(this.xmlPath)
        console.log('IN copyXmlFileToProcessedFiles ');
        this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
        console.log('IN copyXmlFileToProcessedFiles renameSync done');
        return Promise.when([]);
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
            console.log('addImageDirectory started');
            return this.addImageDirectory(that, dirName).then(function () {
                console.log('addImageDirectory done');
                console.log('downloadImages started');
                var index = 0;
                return promiseWhile(function () { return obj.images.img.length > index; }, function () {
                    img = <IImage>obj.images.img[index];
                    thatFunc.downloadImages(that, obj, img, dirName, index).then(function () {
                        //console.log('downloadImage done ' + index);
                    });
                    index++;
                    //return Promise.delay(500); // arbitrary async
                }).then(function () {
                    console.log('all image done');
                    return Promise.when([]);
                });

                
                //return thatFunc.downloadImages(that, obj, img, dirName, 0);
            });
        }
    }

    public addImageDirectory(that: processRentalJSON, dirName: string) {
        if (!that.fs.existsSync(dirName)) {
            that.fs.mkdirSync(dirName);
        }
        return Promise.when([]);
    }
    public downloadImages(that: processRentalJSON, obj: IRental, img: IImage, dirName: string, index: number) {
        if (img && img.url) {
            var fileNameWithPath = dirName + "/" + that.path.basename(img.url);
            var thatFunc = this;
            return this.downloadImage(that, img.url, fileNameWithPath).then(function () {
                console.log('downloadImage done' + fileNameWithPath);
                img.url = fileNameWithPath.replace("./", "/");
                img.index = index;
                if (index == 0) {
                    obj.imageUrl = img.url;
                }

            });
        }
        else {
            return Promise.when([]);
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
export var init = function (data: IPropertyList, fs: any, request: any, path: any, xmlPath: string) {
    var p = new processRentalJSON()
    p.data = data;
    p.fs = fs;
    p.request = request;
    p.path = path;
    p.xmlPath = xmlPath;
    var that = this;
    console.log("in Init");
    p.process();
}


function promiseWhile(condition, body) {
    var done = Promise.defer();

    function loop() {
        // When the result of calling `condition` is no longer true, we are
        // done.
        if (!condition()) return done.resolve();
        // Use `when`, in case `body` does not return a promise.
        // When it completes loop again otherwise, if it fails, reject the
        // done promise
        Promise.when(body(), loop, done.reject);
    }

    // Start running the loop in the next tick so that this function is
    // completely async. It would be unexpected if `body` was called
    // synchronously the first time.
    Promise.nextTick(loop);

    // The promise
    return done.promise;
}
   
//} 


function waitfor(test, expectedValue, msec, count, source, callback) {
    // Check if condition met. If not, re-check later (msec).
    while (test() !== expectedValue) {
        count++;
        setTimeout(function () {
            waitfor(test, expectedValue, msec, count, source, callback);
        }, msec);
        return;
    }
    // Condition finally met. callback() can be executed.
    console.log(source + ': ' + test() + ', expected: ' + expectedValue + ', ' + count + ' loops.');
    callback();
}


var _TIMEOUT = 5000; // waitfor test rate [msec]
var bBusy = true;  // Busy flag (will be changed somewhere else in the code)
function _isBusy() {
    return processGoingOn;
}