APP.directive('propertyAppraisal', function ($http, $compile, $timeout, $uibModal) {
    return {
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: '/public/templates/propertyAppraisal.html',
        link: function (scope, elem, attrs) {
            scope.data = {};
            scope.data.buttonDisabled = false;
            scope.submitForm = function () {
                if (scope.propertyApprisalForm.$valid) {
                    scope.data.buttonDisabled = true;
                    $http.post('/propertyAppraisal/save', JSON.stringify(scope.data)).success(function () {
                        /*success callback*/
                        var modalInstance = $uibModal.open({
                            template: '<div class="modal-header">' +
                                    '<h3 class="modal-title">Property Appraisal successfully submitted</h3>' +
                                    '</div>' + 
                                    '<div class="modal-body">Thankyou for submitting details.<br/> We will get back to you' +
                                        '</div>' + 
                                       '<div class="modal-footer">' +
                                        '<button class="btn btn-default btn-primary btn-md" type="button" ng-click="ok()">OK</button>' +
                                        '</div>' ,
                            controller: 'ModalInstanceCtrl',
                        }
                        );
                        
                        modalInstance.result.then(function () {
                            //$scope.selected = selectedItem;
                        }, function () {
                            //$log.info('Modal dismissed at: ' + new Date());
                        });

                    });
                }
            };

        }
    };
});

APP.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $window) {
    
    $scope.ok = function () {
        $uibModalInstance.close();
        $window.location.href = "/";
    };
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});