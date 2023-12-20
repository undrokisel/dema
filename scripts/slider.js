var sliderSelector = '.swiper-container',
    options = {
        init: false,
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        centerInsufficientSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 60,
            modifier: 1,
            slideShadows: true,
        },
        grabCursor: true,
        // parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: -10,
                // effect: 'fade',
            },
            300: {
                slidesPerView: 1,
                effect: 'fade',

            },

        }
    };
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();