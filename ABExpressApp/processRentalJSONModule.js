/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />
//module processRentalJSONModule {
//declare function require(name: string);
var propertyReport = require("./repository/propertyRepo");
var processRentalJSON = (function () {
    function processRentalJSON() {
    }
    processRentalJSON.prototype.process = function () {
        console.log(this.data);
        // add pipe or make it chain
        this.addInformationToDB();
        this.addImages(); // add images to folder
        this.copyXmlFileToProcessedFiles(); // copy files to processed location
    };
    processRentalJSON.prototype.addInformationToDB = function () {
        var repo = new propertyReport.propertyRepo();
        repo.saveProperty(this.data.rental);
    };
    processRentalJSON.prototype.copyXmlFileToProcessedFiles = function () {
        //this.fs.createReadStream(this.path).pipe(this.fs.createWriteStream(this.path));
        var fileName = this.path.basename(this.xmlPath);
        this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
    };
    processRentalJSON.prototype.addImages = function () {
        if (this.data.rental && this.data.rental.images && this.data.rental.images.img) {
            for (var image in this.data.rental.images.img) {
                var img = this.data.rental.images.img[image];
                var dirName = "./public/images/" + this.data.rental.uniqueID;
                if (!this.fs.existsSync(dirName)) {
                    this.fs.mkdirSync(dirName);
                }
                this.readAndWriteImage(img.url, dirName + "/" + this.path.basename(img.url));
            }
        }
    };
    processRentalJSON.prototype.readAndWriteImage = function (srcPath, savPath) {
        if (srcPath) {
            var options = {
                url: srcPath,
                port: 80,
                method: 'GET'
            };
            this.request.get(options).pipe(this.fs.createWriteStream(savPath));
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
    console.log(data);
};
//} 
//# sourceMappingURL=processRentalJSONModule.js.map