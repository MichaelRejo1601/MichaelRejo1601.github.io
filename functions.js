$(document).ready(function(){
  $(".down-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, {duration:1, easing:"linear"});
});
});
