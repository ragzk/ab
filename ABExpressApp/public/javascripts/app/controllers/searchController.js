APP.controller('searchController', function searchController($scope, matchmedia) {
    $scope.matchMedia = matchmedia;
    $scope.isDesktop = matchmedia.isDesktop();
    $scope.search = {};
    $scope.search.types = ["Buy", "Rent", "Sold"];
    $scope.search.propertyTypes = ["Any property type", "House", "Apartment", "Commercial"];
    $scope.search.selectedType = 0;
    var unregister = matchmedia.onPhone(function (mediaQueryList) {
        $scope.isDesktop = !mediaQueryList.matches;
    });
}
);