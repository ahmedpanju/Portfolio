$(document).ready(function(){
    $('.navbar-top-button-inner').click(function(){
        $('.navbar-top-button-outer').addClass('navbar-top-button-outer-animation');
        $('.navbar-top-list').fadeToggle(2000);    
    });
    
    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
    
    $(".about-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
    
    $(".work-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".work").offset().top
        }, 1000);
    });
    
    $(".contact-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });
});
