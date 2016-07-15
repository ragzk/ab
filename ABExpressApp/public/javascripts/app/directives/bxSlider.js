APP.directive('bxSlider', function ($http, $compile, $timeout) {
    return {
        scope: {},
        //template: '<ul class="bxslider">' +
        //           '<li ng-repeat="image in images track by $index">' +
        //             '<img ng-src="{{image}}" alt="" />' +
        //           '</li>' +
        //          '</ul>',
        //template: '<div class="bxslider1">' +
        //           '<div class="slide" ng-repeat="image in images track by $index">' +
        //             '<img ng-src="{{image}}" alt="" />' +
        //           '</div>' +
        //          '</div>',
        template: '<div class="bxslider1">' +
                   '<div class="slide" ng-repeat="image in images track by $index">' +
                     '<img ng-if="$index === 0" class="sliderimg" ng-src="{{image.imageUrl}}" alt="" />' +
                     '<img ng-if="$index > 0" class="sliderimg" data-src="{{image.imageUrl}}"  alt="" />' +
                     '<div class="bxslider-property-details">' +  
                        '<div class="bxslider-property-features">' +
                            '<span ng-show="image.propertyFeature.bedroom">{{ image.propertyFeature.bedroom }}<span class="fa fa-bed spacing-icon"></span></span>' + 
                            '<span class="extra-spacing-icon" ng-show="image.propertyFeature.bathroom">{{ image.propertyFeature.bathroom }}<img class="bath-icon spacing-icon" src="/public/images/icons/bath.png" /></span>' +
                            '<span class="extra-spacing-icon" ng-show="image.propertyFeature.garages || image.propertyFeature.carports">{{image.propertyFeature.garages + image.propertyFeature.carports}}<span class="fa fa-car spacing-icon"></span></span>' +
                        '</div>' +
                        '<div>' +
                            '<span>{{image.propertyAddressAsText}}</span>' +
                        '</div>' +
                    '</div>' +
                  '</div>',
        link: function (scope, elem, attrs) {
            
            var addToBxSlider = function (result) {
                scope.images = result.data || result;
                if (scope.showdetails) {
                    _.each(scope.images, function (obj) {
                        obj.propertyFeature = _.head(obj.propertyfeatures);
                        obj.propertyAddress = _.head(obj.propertyaddresses);
                        if (obj.propertyAddress) {
                            obj.propertyAddressAsText = obj.propertyAddress.suburb + ", " + obj.propertyAddress.streetNumber + " " + obj.propertyAddress.street;
                        }
                    })
                }

                var element = elem;
                //scope.$$phase || scope.$apply();
                //$compile(elem);
                $timeout(function () {
                    var page = 0;
                    var maxSlides = 5;
                    $(element.children('.bxslider1')).bxSlider({
                        slideWidth: 5000,
                        minSlides: 1,
                        maxSlides: 1,
                        auto: true,
                        pager: false,
                        slideMargin: 10
                        ,
                        onSlideBefore: function (e, oldIndex, newIndex) {
                            console.log(e);
                            var element = $(e.children()[0]);
                            var src = element.data().src;
                            if (src) {
                                element.attr("src", src).removeAttr("data-src");
                            }
                        }
                        //onSliderLoad: function () {
                        //    var $sliderImgs = $(".bxslider1 img");
                        //    var start = page * maxSlides + maxSlides;
                        //    var stop = start + maxSlides;
                        //    for (var i = start; i < stop; i++) {
                        //        var selecter = '[data-src="' + $sliderImgs.eq(i).data('src') + '"]';
                        //        $(selecter).attr('src', $(selecter).data('src')).one('load', function () {
                        //            $(this).removeClass('lazy');
                        //        });
                        //    }
                        //},
                        //onSlideBefore: function () {
                        //    page = slider.getCurrentSlide();
                        //    var $sliderImgs = $(".slider img");
                        //    var start = page * maxSlides + maxSlides;
                        //    var stop = start + maxSlides;
                        //    for (var i = start; i < stop; i++) {
                        //        var selecter = '[data-src="' + $sliderImgs.eq(i).data('src') + '"]';
                        //        $(selecter).attr('src', $(selecter).data('src')).one('load', function () {
                        //            $(this).removeClass('lazy');
                        //        });
                        //    }
                        //}

                    });                    
                    //$('.bxslider1').bxSlider({
                    //    mode: 'fade',
                    //    slideWidth: 200,
                    //    maxSlides: 1
                    //});

                }, 0, false);
            }
            scope.showdetails = attrs.showdetails;
            
            if (attrs.url) {
                $http.get(attrs.url).then(addToBxSlider);//.then(applyBxSlider);
            }
            if (attrs.data) {
                addToBxSlider(JSON.parse(attrs.data));
            }


        }
    };
});

