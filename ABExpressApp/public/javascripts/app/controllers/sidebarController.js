APP.controller('sidebarController', function sidebarController($scope, ngProgressFactory, $location, $window) {
    $scope.progressbar = ngProgressFactory.createInstance();
    var ngProgressChannel = $scope.$bus().channel('ngProgressChannel')
    
    ngProgressChannel.subscribe('ngProgressChannelStart', function (value) {
        $scope.progressbar.start();
    });
    
    ngProgressChannel.subscribe('ngProgressChannelComplete', function (value) {
        $scope.progressbar.complete();
    });
    
    $scope.toggle = false;
    $scope.buy = function () {
        //$location.path('buy');
        $window.location.href = '/buy'
    }
    
    var query = $location.absUrl().split(/[\s/]+/).pop()
    
    if (query) {
        // expand that segment.. may be no change is required
        _.each($('.title.parent'), function (element) {
            if ($(element).find('a').attr("href") == "/" + query) {
                //$(element).slideToggle("slow");
            }
            else {
                $(element).find("div:first").slideToggle("slow");
            }
        })
        //$("a[href$='buy']").slideToggle("fast");
    }
    else {
        //collapse all child menu
        $('.list-group-item.child').slideToggle("fast");
    }
    $('#buy').click(function (event) {
        var target = $(event.target);
        if (target.is('span')) {
            // do ajax request
            event.stopPropagation();
            event.preventDefault();
        }
    });
    
    
    $scope.toggleMenu = function (event) {
        $scope.toggle = !$scope.toggle;
        $(event.target.parentElement).find("div").slideToggle("slow");
        //$(event.target.parentElement).find("div").toggle($scope.toggle);
        //do all the animations here
        //but using $.get, you will get more animation effect
        //I guess
        
        $('#content').load($(this).find('a').attr('href'));
    
    }

    //$(".title").click(function () {
    //    $scope.toggle = !$scope.toggle;
    //    $(this).find("div").slideToggle("slow");
        
    //    //do all the animations here
    //    //but using $.get, you will get more animation effect
    //    //I guess
        
    //    $('#content').load($(this).find('a').attr('href'));
        
    ////    return false;
    //});
    
    //similarly for inner link
    $(".title a a").click(
        function () {
            $('#content').load($(this).attr('href'));
            return true;
        });     

    ngProgressChannel.publish('ngProgressChannelStart');
    ngProgressChannel.publish('ngProgressChannelComplete');
});
