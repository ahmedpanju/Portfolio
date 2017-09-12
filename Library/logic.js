$(".html-copy").click(function(){
    $(".code-container-text-html").select();
    document.execCommand('copy');
});

$(".css-copy").click(function(){
    $(".code-container-text-css").select();
    document.execCommand('copy');
});
