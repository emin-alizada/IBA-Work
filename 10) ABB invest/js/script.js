const slider = (selector, options = {}) => {
    if(!document.querySelector(selector)) { return false }

    const defaults = {
        speed: 500,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000
        }
    };

    return new Swiper(selector, {...defaults, ...options});
};

slider('.swiper-auto-slide',  {
    loop: false,
    slidesPerView: 'auto',
    // autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            // slidesPerView: 3,
            spaceBetween: 24
        }
    }
});