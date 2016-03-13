/// <reference path="rentalInterface.d.ts" />
/// <reference path="repository/propertyRepo.ts" />

//module processRentalJSONModule {

//declare function require(name: string);
import propertyReport = require("./repository/propertyRepo");
class processRentalJSON {
    data: IPropertyList;
    fs: any;
    request: any;
    path: any;

    constructor() { }

    public process() {
        console.log(this.data);
        // add pipe or make it chain
        this.addImages(); // add images to folder
        //this.copyXmlFileToProcessedFiles(); // copy files to processed location
        this.addInformationToDB();
    }
    public addInformationToDB() {
        var repo = new propertyReport.propertyRepo();

        var property = repo.saveProperty(this.data.rental);

    }
    public copyXmlFileToProcessedFiles() {
        this.fs.createReadStream(this.path).pipe(this.fs.createWriteStream(this.path));
    }
    public addImages() {
        if (this.data.rental && this.data.rental.images && this.data.rental.images.img) {
            for (var image in this.data.rental.images.img) {
                var img = <IImage>this.data.rental.images.img[image];
                this.readAndWriteImage(img.url, "./public/images/" + this.path.basename(img.url));
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
export var init =  function (data: IPropertyList, fs: any, request:any, path:any) {
    var p = new processRentalJSON()
    p.data = data;
    p.fs = fs;
    p.request = request;
    p.path = path;
    p.process();
    console.log(data);
}

    
   
//} 
