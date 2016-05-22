APP.directive('agentDetailsSummary', function () {
    return {
        replace: false,
        transclude: true,
        scope: {
            agent: '='
        },
        templateUrl: '/public/templates/agentDetailsSummary.html'
        ,
        link: function (scope, elem, attrs) {

        }
    };
});

