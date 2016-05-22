module.exports = function (assets) {
    assets.root = __dirname;
    assets.addJs('/public/');
    assets.addJs('/bower_components/jquery/dist/jquery.js');
    assets.addJs('/bower_components/angular/angular.js');
    assets.addJs('/bower_components/lodash/lodash.js');
    assets.addJs('/bower_components/bootstrap/dist/js/bootstrap.js');
    
}