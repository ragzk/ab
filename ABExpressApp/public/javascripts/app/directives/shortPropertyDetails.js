APP.directive('shortPropertyDetails', function () {
    return {
        replace: false,
        transclude: true,
        scope: {
            property: '=property'
        },
        templateUrl: '/public/templates/shortPropertyDetails.html'
        ,
        link: function (scope, elem, attrs) {
            scope.propertyAddress = _.head(scope.property.propertyaddresses);
            scope.propertyFeature = _.head(scope.property.propertyfeatures);
            var propDescription = _.head(scope.property.propertydescriptions);
            if (propDescription && propDescription.propertydescription) {
                scope.propertyDescription = propDescription.propertydescription;
            }

            if (scope.propertyAddress) {
                //scope.propertyAddressAsText = scope.propertyAddress.streetNumber + " " + scope.propertyAddress.street + ", " + scope.propertyAddress.suburb + ", " + scope.propertyAddress.state;
                scope.propertyAddressAsText = scope.propertyAddress.streetNumber + " " + scope.propertyAddress.street + ", " + scope.propertyAddress.suburb;
            }
            if (scope.property.inspectionTimes) {
                var inspectionTimes = null;
                
                _.each(scope.property.inspectionTimes.split(','), function (current) {
                    var nextInspectionTimes = current;
                    
                    if (nextInspectionTimes && _.first(nextInspectionTimes.split(' to')) && moment(_.first(nextInspectionTimes.split(' to')), "DD/MMM/YYYY").toDate() > moment(Date.now()).toDate()) {
                        inspectionTimes = inspectionTimes ? inspectionTimes + ", " + nextInspectionTimes:nextInspectionTimes;
                    }
                    else {
                        scope.property.inspectionTimes = null;
                    }
                });


                scope.property.inspectionTimes = inspectionTimes;

            }

        }
    };
});

