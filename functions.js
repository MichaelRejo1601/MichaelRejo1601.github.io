var mobile = window.matchMedia("(max-width: 450px)").matches
$(document).ready(function(){
  $(".down-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, {duration:1, easing:"linear"});
});
$(".project").click(function() {
    console.log(this);
    if (this.style.height == "30vh") {
      this.style.height = "auto";
      this.style.marginTop = "calc(10vh + 10px)";
      this.style.boxShadow = "0px 4px 5px 1px grey";
      this.style.overflow = "auto";
    } else {
      this.style.height = "30vh";
      this.style.marginTop = "10vh";
      this.style.boxShadow = "0px 10px 10px 1px grey";
      this.style.overflow = "hidden";
    }
});
});
