let prevArrow1 = document.getElementById('prevArrow1')
let nextArrow1 = document.getElementById('nextArrow1')
$('.feature-items1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow1,
    nextArrow: nextArrow1,
    autoplay: true
});

let prevArrow = document.getElementById('prevArrow')
let nextArrow = document.getElementById('nextArrow')
$('.feature-items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    autoplay: true
});