$(".owl-carousel").owlCarousel({
    slideSpeed : 1000,
    paginationSpeed : 500,
    singleItem:true,
    items: 1,
    navigation : false,
    animateIn:"owl-backSlide-in",
    animateOut: "owl-backSlide-out",
    afterAction:function(){$(window).trigger("resize");},
});