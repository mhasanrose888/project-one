
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".clicker").toggleClass("hidden")
        $(".hidden").toggleClass("active")
    })
});
$('.slide-vankyo-mini').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
//first slide-vankyo-mini ends
$('.mini-slide').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-anker').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-lg-electronic').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-viewsonic').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-optoma').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-elephas').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-apeman').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-kodak').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-dbpower').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$('.slide-aaxa').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});
$(document).ready(function(){
    $('.read-btn').click(function(){
        $(this).prev().toggle();
        $(this).siblings('.dots').
        toggle();
        if($(this).text()=='read more'){
            $(this).text('read less');
        }
        else{
            $(this).text('read more');
        }
    });
});
//all slider part ends 1st section ends
//home banner slider part atart

$('.banner-home').slick({
  dots: true,
  infinite: true,
  speed: 900,
  fade: true,
    arrows: true,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
});

//home banner slider part ends
//not inspect start ends

//not inspect part ends
















