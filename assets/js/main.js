(function($) {
    //Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(2200).fadeOut(500);
		}
	}
    $(window).on('load', function() {
		handlePreloader();
        Cookies.set('showPreloader', 'true', { expires: 1 });
	});

    
    var a = $('#vid').clone();
    $('#vid').empty()
    
    setTimeout(function() {
        $('#vid').delay(2000).append(a);
    }, 2200);


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header .navbar').outerHeight();

$(window).scroll(function(event){
    $('.header').css({height:$('.navbar').outerHeight()});
    didScroll = true;
});
$(window).resize(function(event){
    $('.header').css({height:$('.navbar').outerHeight()});
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
   

    if (st > navbarHeight + $('.header').offset().top ){
        $('.header .navbar').addClass('is-sticky');
    }else {
        $('.header .navbar').removeClass('is-sticky nav-up');
    }

    if (st > lastScrollTop && st > navbarHeight + $('.header').offset().top ){
        $('.header .navbar').removeClass('nav-down').addClass('nav-up');
    }else {
        if(st > $('.header').offset().top+navbarHeight){
            $('.header .navbar').removeClass('nav-up').addClass('nav-down');
        }else{
            $('.header .navbar').removeClass('nav-down');
        }
            
    }
    lastScrollTop = st;
}

// end Hide header on scroll down






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
        $('.product-content .product-detais').empty()
        $('.product-content .product-detais').append(ht);
        $('.product').removeClass('active')
        $(this).parents().addClass('active')
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
    var swiper = new Swiper(".memberSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider1", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-slider1 .swiper-button-next",
            prevEl: ".product-slider1 .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-slider2 .swiper-button-next",
            prevEl: ".product-slider2 .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider3", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-slider3 .swiper-button-next",
            prevEl: ".product-slider3 .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider4", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-slider4 .swiper-button-next",
            prevEl: ".product-slider4 .swiper-button-prev",
        },
    });
    var swiper = new Swiper(".product-slider5", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-slider5 .swiper-button-next",
            prevEl: ".product-slider5 .swiper-button-prev",
        },
    });


})(window.jQuery);

// $(document).ready(function(){
        //   $(window).scroll(function(){
        //     var wscroll = $(this).scrollTop();
        //     if(wscroll>$('.home-banner-video').offset().top + ($(window).height()/3)){
        //       $('.home-banner-video h3').addClass('show');
        //     }else{
        //       $('.home-banner-video h3').removeClass('show');
        //     }
        //     if(wscroll>$('.home-banner-video').offset().top + ($(window).height()/3) + $('.home-banner-video h3').height()*1.5){
        //       $('.home-banner-video p').addClass('show');
        //     }else{
        //       $('.home-banner-video p').removeClass('show');
        //     }
        //   })
        // })