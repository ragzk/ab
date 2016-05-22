APP.directive('agentDetails', function () {
    return {
        replace: false,
        transclude: true,
        scope: {
            agent: '='
        },
        templateUrl: '/public/templates/agentDetails.html'
        ,
        link: function (scope, elem, attrs) {

        }
    };
});

