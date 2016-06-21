APP.controller('sidebarController', function sidebarController($scope, ngProgressFactory, $location, $window) {
    $scope.progressbar = ngProgressFactory.createInstance();
    var ngProgressChannel = $scope.$bus().channel('ngProgressChannel')
    $scope.loading = true;    
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
    
    var query = null;
    var routeInfo = $location.absUrl().split(/[\s/]+/);
    var entireRoute = null;
    if (routeInfo && routeInfo.length>=3) {
        query = routeInfo[2];
        entireRoute = "/" + routeInfo[2];
    }
    if (routeInfo.length == 4) {
        entireRoute = entireRoute + "/" + routeInfo[3];
    }

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
    //$('#buy').click(function (event) {
    //    var target = $(event.target);
    //    if (target.is('span')) {
    //        // do ajax request
    //        event.stopPropagation();
    //        event.preventDefault();
    //    }
    //});
    
    
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
    if (entireRoute) {
        //$('#accordion').find("a:contains('" + query + "')").parent().parent().addClass("open").find('.submenu').css({ display: "block" });
        _.each($("*[data-link]"), function (e) {
            if ($(e).attr('href') == entireRoute) {
                var elem = $(e).parent().parent();
                if (routeInfo.length == 4) {
                    elem = elem.parent();
                }
                elem.addClass("open").find('.submenu').css({ display: "block" });
            }
        })
    }
    $scope.loading = false;    
    
    ngProgressChannel.publish('ngProgressChannelStart');
    ngProgressChannel.publish('ngProgressChannelComplete');
});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        
        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }
    
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
			$next = $this.next();
        
        $next.slideToggle();
        $this.parent().toggleClass('open');
        
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }
    
    var accordion = new Accordion($('#accordion'), false);
});