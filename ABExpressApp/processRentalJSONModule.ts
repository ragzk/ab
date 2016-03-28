/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />

//module processRentalJSONModule {

//declare function require(name: string);
import propertyReport = require("./repository/propertyRepo");
import types = require('./schema/sequelize-types');

class processRentalJSON {
    data: IPropertyList;
    fs: any;
    request: any;
    path: any;
    xmlPath: string;

    constructor() { }

    public process() {
        console.log(this.data);
        // add pipe or make it chain
        this.addInformationToDB();
        this.addImages(); // add images to folder
        this.copyXmlFileToProcessedFiles(); // copy files to processed location
    }
    public addInformationToDB() {
        var repo = new propertyReport.propertyRepo();

        repo.saveProperty(this.data.rental);
    }
    public copyXmlFileToProcessedFiles() {
        //this.fs.createReadStream(this.path).pipe(this.fs.createWriteStream(this.path));
        var fileName = this.path.basename(this.xmlPath)
        this.fs.renameSync(this.xmlPath, "./public/processedXmlFiles/" + fileName);
    }
    public addImages() {
        if (this.data.rental && this.data.rental.images && this.data.rental.images.img) {
            for (var image in this.data.rental.images.img) {
                var img = <IImage>this.data.rental.images.img[image];
                var dirName = "./public/images/" + this.data.rental.uniqueID;
                if (!this.fs.existsSync(dirName)) {
                    this.fs.mkdirSync(dirName);
                }
                this.readAndWriteImage(img.url, dirName + "/" +  this.path.basename(img.url));
            }
        }
    }
    public readAndWriteImage(srcPath: string, savPath: string) {
        if (srcPath) {
            var options = {
                url: srcPath,
                port: 80,
                method: 'GET'
            };
            this.request.get(options).pipe(this.fs.createWriteStream(savPath))
        }
    }
}
export var init =  function (data: IPropertyList, fs: any, request:any, path:any, xmlPath: string) {
    var p = new processRentalJSON()
    p.data = data;
    p.fs = fs;
    p.request = request;
    p.path = path;
    p.xmlPath = xmlPath;
    p.process();
    console.log(data);
}

    
   
//} 
