APP.controller('buyController', function ($http) {
    this.properties = [];    
    
    this.init = function (data)
    {
        this.type = data.type;
        this.getPropertiesUrl = data.getPropertiesUrl;
        that = this;
        $http.get(this.getPropertiesUrl, { params: { type: this.type } }).then(function (response) {
            that.properties = response.data;
        });
    }
});
