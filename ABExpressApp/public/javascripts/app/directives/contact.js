APP.directive('contact', function ($http, $compile, $timeout, $uibModal) {
    return {
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: '/public/templates/contact.html',
        link: function (scope, elem, attrs) {
            scope.buttonDisabled = false;
            scope.submitted = false;
            scope.submitForm = function () {
                scope.submitted = true;
                if (scope.contactForm.$valid) {
                    scope.buttonDisabled = true;
                    var data = {
                        name: scope.name,
                        email: scope.email,
                        subject: scope.subject,
                        message: scope.message
                    }
                    $http.post('/contact/save', JSON.stringify(data)).success(function () {
                        /*success callback*/
                        var modalInstance = $uibModal.open({
                            template: '<div class="modal-header">' +
                                    '<h3 class="modal-title">Contact information successfully submitted</h3>' +
                                    '</div>' + 
                                    '<div class="modal-body">Thankyou for submitting details.<br/> We will get back to you' +
                                        '</div>' + 
                                       '<div class="modal-footer">' +
                                        '<button class="btn btn-default btn-primary btn-md" type="button" ng-click="ok()">OK</button>' +
                                        '</div>' ,
                            controller: 'ModalInstanceContactCtrl',
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

APP.controller('ModalInstanceContactCtrl', function ($scope, $uibModalInstance, $window) {
    
    $scope.ok = function () {
        $uibModalInstance.close();
        $window.location.href = "/";
    };
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});