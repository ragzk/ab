var APP = angular.module('APP', ['matchmedia-ng', 'ngProgress']);


$(document).ready(function () {
    $('.slider3').bxSlider({
        slideWidth: 5000,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
});