$(".slider").slick({
    // normal options...
    fade: true,
    cssEase: 'linear',
    infinite: true,
    dots: false,
    // the magic
    //responsive: [{
            
    //        breakpoint: 1024,
    //        settings: {
    //            slidesToShow: 1,
    //        }

    //    }, {
            
    //        breakpoint: 600,
    //        settings: {
    //            slidesToShow: 1,
    //        }

    //    }, {
            
    //        breakpoint: 300,
    //        settings: "unslick" // destroys slick

    //    }]
});

$(".slider").slick('slickPlay');