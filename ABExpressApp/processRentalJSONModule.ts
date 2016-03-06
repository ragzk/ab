/// <reference path="rentalInterface.d.ts" />
//module processRentalJSONModule {

    class processRentalJSON {
        constructor() { }

        public process(data: IPropertyList, fs: any, request: any, path: any) {
            console.log(data);
            this.addImages(data, fs, request,path);
        }
        public addImages(data: IPropertyList, fs: any, request: any, path: any) {
            if (data.rental && data.rental.images && data.rental.images.img) {
                for (var image in data.rental.images.img) {
                    var img = <IImage>data.rental.images.img[image];
                    this.readAndWriteImage(img.url, "./public/images/" + path.basename(img.url), fs, request,path);
                }
            }
        }
        public readAndWriteImage(srcPath: string, savPath: string, fs: any, request: any, path:any) {
            if (srcPath) {
                var options = {
                    url: srcPath,
                    port: 80,
                    method: 'GET'
                };
                request.get(options).pipe(fs.createWriteStream(savPath))
            }
        }
    }
    export var processRentalJSONInstance =  function (data: IPropertyList, fs: any, request:any, path:any) {
        var p = new processRentalJSON()
        p.process(data, fs, request, path);
        console.log(data);
}

    
   
//} 
