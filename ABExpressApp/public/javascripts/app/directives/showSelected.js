APP.directive('showSelected', function ($timeout) {
    return {
        link: function (scope, elem, attrs) {
            $timeout(function () {
                var selText = $(elem.find('li a')[0]).text();
                elem.parents('.btn-group').find('.dropdown-toggle').html(selText + '<span class="caret"></span>');
                
                elem.find('li a').on("click", function () {
                    var selText = $(this).text();
                    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + '<span class="caret"></span>');
                });

            });
        }
    };
});

APP.directive('select2', function ($timeout) {
    return {
        link: function (scope, elem, attrs) {
            elem.select2({ minimumResultsForSearch: -1 });
        }
    };
});