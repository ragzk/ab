APP.directive('propertyDetails', function () {
    return {
        replace: false,
        transclude: true,
        scope: {
            property: '='
        },
        templateUrl: '/public/templates/propertyDetails.html'
        ,
        link: function (scope, elem, attrs) {
            scope.$watch('property', function () {
                if (scope.property.uniqueId) {
                    scope.transaction = scope.property.rent ? 'Rent' : 'Sale';
                    scope.transactionPrice = scope.property.rent ? scope.property.rent : scope.property.priceValue;
                    scope.propertyAddress = _.head(scope.property.propertyaddresses);
                    scope.propertyFeature = _.head(scope.property.propertyfeatures);
                    var propDescription = _.head(scope.property.propertydescriptions);
                    if (propDescription && propDescription.propertydescription) {
                        scope.propertyDescription = propDescription.propertydescription; //.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
                        scope.propertyDescription = scope.propertyDescription.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
                        scope.propertyDescription = scope.propertyDescription.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
                    }
                    if (scope.propertyAddress) {
                        //scope.propertyAddressAsText = scope.propertyAddress.streetNumber + " " + scope.propertyAddress.street + ", " + scope.propertyAddress.suburb + ", " + scope.propertyAddress.state;
                        scope.propertyAddressAsText = scope.propertyAddress.streetNumber + " " + scope.propertyAddress.street + ", " + scope.propertyAddress.suburb;


                    }
                }
            
            })

        }
    };
});

