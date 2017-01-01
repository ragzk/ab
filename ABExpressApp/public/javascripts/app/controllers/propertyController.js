APP.controller('propertyController', function ($http) {
    this.property = {};
    
    this.init = function (data) {
        this.uniqueId = data.uniqueId;
        that = this;
        $http.get('/property/getProperty/' + this.uniqueId , { params: { uniqueId: this.uniqueId } }).then(function (response) {
            that.property = response.data;
        });
    }
    this.init = function (uniqueId) {
        this.uniqueId = uniqueId;
        that = this;
        $http.get('/property/getProperty/' + this.uniqueId , { params: { uniqueId: this.uniqueId } }).then(function (response) {
            that.property = response.data;
        });
    }
});
