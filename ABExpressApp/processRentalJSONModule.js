/// <reference path="rentalInterface.d.ts" />
//module processRentalJSONModule {
var processRentalJSON = (function () {
    function processRentalJSON() {
    }
    processRentalJSON.prototype.process = function (data, fs, request, path) {
        console.log(data);
        this.addImages(data, fs, request, path);
    };
    processRentalJSON.prototype.addImages = function (data, fs, request, path) {
        if (data.rental && data.rental.images && data.rental.images.img) {
            for (var image in data.rental.images.img) {
                var img = data.rental.images.img[image];
                this.readAndWriteImage(img.url, "./public/images/" + path.basename(img.url), fs, request, path);
            }
        }
    };
    processRentalJSON.prototype.readAndWriteImage = function (srcPath, savPath, fs, request, path) {
        if (srcPath) {
            var options = {
                url: srcPath,
                port: 80,
                method: 'GET'
            };
            request.get(options).pipe(fs.createWriteStream(savPath));
        }
    };
    return processRentalJSON;
})();
exports.processRentalJSONInstance = function (data, fs, request, path) {
    var p = new processRentalJSON();
    p.process(data, fs, request, path);
    console.log(data);
};
//} 
//# sourceMappingURL=processRentalJSONModule.js.map