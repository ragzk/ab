APP.directive('getHtml', function ($http, $compile, $rootScope, $timeout, $location, $window) {
    return {
        link: function (scope, elem, attrs) {
            var lastData = null;
            elem.on('click', function () {
                if (attrs.getHtml) {
                    var getHtml = attrs.getHtml;
                    $http.get(attrs.getHtml, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                            }
                    }).then(function (response) {
                        var raw_html = response.data;
                        var container = $('#content-container');
                        //if (getHtml == "/") {
                        //    container = $('.sliderParent');
                        //}
                        container.empty()
                        $rootScope.data = elem.data();
                        $(function () {
                            if (lastData != $rootScope.data) {
                                //history.pushState({ urlPath: attrs.getHtml }, "", attrs.getHtml);
                                

                                angular.element(document).injector().invoke(function ($compile) {
                                    var getUrl = window.location;
                                    var baseUrl = getUrl.protocol + "//" + getUrl.host;
                                    console.log('push state called');
                                    //$('#content-container').html(raw_html);
                                    container.append($compile(raw_html)(scope));
                                    scope.$root.$$phase || scope.$apply();
                                    //window.history.pushState("object or string", "Title", baseUrl + attrs.getHtml);
                                    //$location.path(attrs.getHtml);
                                    //history.push($location.$$path);
                                    //$timeout(function () { 
                                    //})
                                    
                                
                                });
                            }
                        });
                    }).then(function () {
                        $location.url(attrs.getHtml);
                        $location.replace();
                        //$window.history.pushState(elem.data(), "Title", attrs.getHtml);
                    });
                }
            });


            }
        }
    });
