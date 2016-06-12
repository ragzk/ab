var APP = angular.module('APP', ['matchmedia-ng', 'ngProgress', 'ngSanitize', 'ui.bootstrap']);
//APP.config(function ($locationProvider) {
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//});

$(document).ready(function () {
    $('.slider3').bxSlider({
        slideWidth: 5000,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
});