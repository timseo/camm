$(document).ready(function(){
    $('.faq a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().slideToggle();
    })
    $('.content-wrap').css({'height':$('.content-wrap').height()})
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.header').height() ){
            $('.product-section .product-content').addClass('sticky');
        }else{
            $('.product-section .product-content').removeClass('sticky');
        }
    })
    $('.product img').click(function(e){
        e.preventDefault();
        var ht = $(this).siblings().children().clone();
        console.log(ht)
        $('.product-content .product-detais').empty()
        $('.product-content .product-detais').append(ht);
        $('.product').removeClass('active')
        $(this).parents().addClass('active')
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
        spaceBetween: 50,
        },
        1600: {
        spaceBetween: 65,
        },
    },
});
var swiper = new Swiper(".product-slider1", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
var swiper = new Swiper(".product-slider2", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
var swiper = new Swiper(".product-slider3", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
var swiper = new Swiper(".product-slider4", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
var swiper = new Swiper(".product-slider5", {
    slidesPerView: "auto",
    spaceBetween: 20,
});