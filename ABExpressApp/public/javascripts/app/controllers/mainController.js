APP.controller('mainController', function mainController($scope, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    var ngProgressChannel = $scope.$bus().channel('ngProgressChannel')
    
    ngProgressChannel.subscribe('ngProgressChannelStart', function (value) {
        $scope.progressbar.start();
    });
    
    ngProgressChannel.subscribe('ngProgressChannelComplete', function (value) {
        $scope.progressbar.complete();
    });
    ngProgressChannel.publish('ngProgressChannelStart');
    ngProgressChannel.publish('ngProgressChannelComplete');
});
