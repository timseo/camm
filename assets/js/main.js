$(document).ready(function(){
    $('.faq a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().slideToggle();
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