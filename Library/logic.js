$(".html-copy").click(function(){
    $(".code-container-text-html").select();
    document.execCommand('copy');
});

$(".css-copy").click(function(){
    $(".code-container-text-css").select();
    document.execCommand('copy');
});

$(document).ready(function(){
    $(".navbar-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".navbar-header").offset().top
        }, 1000);
    });
    $(".buttons-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".buttons-header").offset().top
        }, 1000);
    });
});
