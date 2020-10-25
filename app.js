$(function() {



//    Fixed header
    let header = $("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight(),
        scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");



    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        };

    });


//    Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 700);
    });

//    Nav Toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

//    Reviews
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    });




});
