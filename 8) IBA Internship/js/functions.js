/**
 * Team: CodeBit
 * Team Lead: Murad Mustafayev
 * Date: 01.03.2020
 * */

const numberRounded = num => Math.round((num + Number.EPSILON) * 100) / 100;
const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const isiOS = () => !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

const creditCalculator = (selector, outputSelector) => {
    const sliderEl = document.querySelector(selector);
    const output = document.querySelector(outputSelector);

    if(!sliderEl) { return false; }

    rangesliderJs.create(sliderEl, {
        onInit: val => output.value = val,
        onSlide: val => output.value = val
    });

    ['change', 'keyup'].forEach(event => output.addEventListener(event, e => sliderEl['rangeslider-js'].update({value: e.target.value})))
};

const onCurrencyChange = (rates) => {
    currencyCalculator(rates, {
        selector: 'select',
        event: 'change'
    });
};


const currencyCalculator = (rates, options = {}) => {
    const defaults = {
        selector: 'input',
        event: 'keyup'
    };

    options = {...defaults, ...options};

    const exchangePairs = document.querySelectorAll('.js-currency-calc');
    if(!exchangePairs.length) { return false; }

    $(exchangePairs).find(options.selector).on(options.event, e => {
        const parent = e.target.closest('.js-currency-calc');
        const nextParent = (Array.from(exchangePairs).indexOf(parent)) ? exchangePairs[0] : exchangePairs[1];
        let inputValue = parent.querySelector(defaults.selector).value;

        const currencyCurrent = parent.querySelector('select option:checked').value;
        const currencyNext = nextParent.querySelector('select option:checked').value;

        nextParent.querySelector('input').value = (inputValue) ? numberRounded(rates[currencyCurrent][currencyNext] * inputValue) : '';
    });
};


const slider = (selector, options = {}) => {
    if(!document.querySelector(selector)) { return false }

    const defaults = {
        speed: 500,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination-my',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-my',
            bulletActiveClass: 'swiper-pagination-bullet-my-active'
        },
        autoplay: {
            delay: 5000
        }
    };

    return new Swiper(selector, {...defaults, ...options});
};


const linkHover = (selector) => {
    const wrapper = document.querySelector(selector);
    if(!wrapper) { return false }

    const windowWidth = window.innerWidth;
    const links = wrapper.querySelectorAll('a');
    let svgBg;

    if(windowWidth > 992) {
        $(links).on('mouseover', e => {
            $(links).css('color', '#9F9F9F').siblings('.icon').addClass('icon-color-9f9f9f');

            $(e.target).css({ color: '#262626', marginLeft: 10 }).siblings('.icon').removeClass('icon-color-9f9f9f');

            svgBg = document.querySelector(".bg-logo-svg").getSVGDocument().getElementById('ibar-logo-paint');
            svgBg.setAttribute("fill", "#F9F9F9");
            svgBg.setAttribute("stroke", "transparent");
        });

        $(links).on('mouseout', e => {
            $(links).css({ color: '#262626', marginLeft: 0 }).siblings('.icon').removeClass('icon-color-9f9f9f');
            svgBg.setAttribute("fill", "transparent");
            svgBg.setAttribute("stroke", "#ececec");
        });
    } else {
        window.addEventListener("load", e => {
            console.log(document.querySelector(".bg-logo-svg").getSVGDocument());
            svgBg = document.querySelector(".bg-logo-svg").getSVGDocument().getElementById('ibar-logo-paint');
            svgBg.setAttribute("fill", "#F9F9F9");
            svgBg.setAttribute("stroke", "transparent");
        });
    }
};


const menuToggle = () => {
    let hasClassClicked = false;

    $('.menu > li').hover(e => {
        const $li = ($(e.target).is('li')) ? $(e.target) : $(e.target).parents('li').first();
        const bodyOverlay = document.getElementById('js-overlay-body');

        if($li.find('.nav-sub').length && !hasClassClicked) {
            hasClassClicked = true;
            $li.addClass('clicked');
            $li.parents('.container-fluid').first().css('border-bottom', '1px solid #e6e6e6');
            bodyOverlay.classList.remove('d-none');

            $li.find('.icon-close').on('click', e => {
                e.stopPropagation();
                hasClassClicked = false;
                $li.removeClass('clicked');
                bodyOverlay.classList.add('d-none');
            });
        }
    },
        e => {
            const $li = ($(e.target).is('li')) ? $(e.target) : $(e.target).parents('li').first();
            const bodyOverlay = document.getElementById('js-overlay-body');
            e.stopPropagation();
            hasClassClicked = false;
            $li.removeClass('clicked');
            bodyOverlay.classList.add('d-none');
        });
};

const menuToggleMobile = () => $('.hamburger').on('click', e => __menuToggleMobileActions());
$('#js-menu-mobile').find('a').on('click', e => __menuToggleMobileActions());

const __menuToggleMobileActions = () => {
    if($('.bg-land-header').length) {
        $('body').toggleClass('overflow-h h-100-vh');
    }

    $('.hamburger').toggleClass('is-active');
    $('#js-menu-mobile').toggleClass('left-0');
    $('#js-overlay-body').toggleClass('d-none');
};


const tabs = (options = {}) => {
    const defaults = {
        activeClass: 'color-1885d3 active',
        hideClass: 'd-none',
    };

    options = {...defaults, ...options};

    const tabs = $('[id*="tab-"]');
    if(!tabs.length) { return false }

    tabs.hide().first().fadeIn();
    $('[data-tab]').on('click', e => {
        const tab = e.target.dataset.tab;
        const tabContainer = e.target.dataset.tabContainer;

        $(`[data-tab][data-tab-container=${tabContainer}]`).removeClass(options.activeClass);
        $(e.target).addClass(options.activeClass);

        $('.' + tabContainer).addClass(options.hideClass).hide();
        $(`#${tab}.${tabContainer}`).removeClass(options.hideClass).fadeIn();

        if('onClick' in options && options.onClick instanceof Function) {
            options.onClick.call(tabs, e.target, tab, tabContainer);
        }
    })
};


const animateHeader = (scrollPixels, minWidth, exclude = {}) => {
    // exclude class names separated by comma (type -> string)
    const header = document.getElementById('js-header');
    if(!header) { return false }

    if(window.innerWidth > minWidth && !document.querySelector(exclude.desktop)) {
        const s3 = document.getElementById("js-header-s3");
        const isMenuClicked = document.querySelector('.menu .clicked');
        header.classList.add('hover');

        if (document.body.scrollTop > scrollPixels || document.documentElement.scrollTop > scrollPixels) {
            header.classList.remove('header-lg-animate');
            header.classList.add('header-lg-animated');
            $(s3).parents('.container-fluid').first().css('border-bottom', '1px solid #e6e6e6');
        } else {
            header.classList.remove('header-lg-animated');
            header.classList.add('header-lg-animate');
            if(!isMenuClicked) {
                $(s3).parents('.container-fluid').first().css('border-bottom', 'none');
            }
        }
    } else {
        if ((document.body.scrollTop > scrollPixels * 2 || document.documentElement.scrollTop > scrollPixels * 2) && !document.querySelector(exclude.mobile)) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const animateClasses = ['animated-up', 'animated-down'];

            if (scrollTop > lastScrollTop){
                animateClasses.reverse(); // down
            }
            $(header).removeClass(animateClasses[1]).addClass(animateClasses[0]);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
    }
};


const scrollToTarget = (options = {}) => {
    $('[data-scroll]').on('click', e => {
        e.preventDefault();
        const anchor = e.target.getAttribute('href');
        const seconds = Number(e.target.dataset.scrollSecond) || 500;
        const addTop = Number(e.target.dataset.scrollAddtop) || 0;

        $('html, body').animate({
            scrollTop: document.querySelector(anchor).offsetTop + addTop
        }, seconds);

        if('afterAnimate' in options && options.afterAnimate instanceof Function) {
            options.afterAnimate.call(scrollToTarget, anchor);
        }
    });
};

const maskPlaceholder = (selector, mask) => {
    const input = document.querySelector(selector);
    if(!input) { return false }

    const placeholderText = input.placeholder;
    input.addEventListener('focus', e => e.target.placeholder = mask);
    input.addEventListener('blur', e => e.target.placeholder = placeholderText);
}

const scrollGradient = (options = {}) => {
    $(options.scrollSelector).on('scroll', e => $(e.target).find(options.gradientSelector).css('right', $(e.target).find(options.childSelector).position().left));
}

const selectBox = (selector, options = {}) => {
    // for mobile event handler
    if('onChangeMobile' in options && options.onChangeMobile instanceof Function) {
        options.onChangeMobile.call(selectBox, selector);
    }

    return $(selector).selectric(options);
};


const accordion = (selector, options = {}) => {
    if(!document.querySelector(selector)) { return false }
    return new Accordion(selector, options);
};


const azToEn = (str) => {
    return str.replace(/Ə/g,'E')
        .replace(/ə/g,'e')
        .replace(/Ğ/g,'G')
        .replace(/ğ/g,'g')
        .replace(/Ü/g,'U')
        .replace(/ü/g,'u')
        .replace(/Ş/g,'S')
        .replace(/ş/g,'s')
        .replace(/I/g,'I')
        .replace(/ı/g,'i')
        .replace(/İ/g,'I')
        .replace(/Ö/g,'O')
        .replace(/ö/g,'o')
        .replace(/Ç/g,'C')
        .replace(/ç/g,'c');
};


const searchFilter = (selectorForm, selectorColumn) => {
    $(selectorForm).on('submit keyup', e => {
        e.preventDefault();
        const $searchInput = $(selectorForm).find('input[type=text]');
        const $resultEl = $('#js-search-result');
        const val = azToEn($searchInput.val().toLowerCase().trim());

        let result = 0;
        $(selectorColumn).filter((index, el) => {
            const $parent = $(el).parent();
            if(azToEn(el.innerText.toLowerCase().trim()).indexOf(val) === -1) {
                $parent.hide();
            } else {
                result++;
                $parent.show();
            }
            $resultEl.text(result).parent().show();
        });
        result = 0;

        (val) ? $resultEl.parent().removeClass('d-none') : $resultEl.parent().addClass('d-none') ;
    });
};


const brandFilter = (selector, options = {}) => {
    if(!document.querySelector(selector)) { return false }
    return new Filterizr(selector, options);
};

const slideUpDown = () => {
    $('.js-slide-header').on('click', e => {
        $(e.target).find('.slide-down').toggleClass('slide-up');
        $(e.target).parents('.js-slide').first().toggleClass('border-1885d3').find('.js-slide-body').stop().slideToggle();
    });
};

const atmFilter = (selectorForm, selectorColumn) => {
    $(selectorForm).on('click', e => {
        $(e.target).siblings().removeClass('color-1885d3');
        $(e.target).addClass('color-1885d3');
        const filterCatSelected = e.target.dataset.filter;

        $(selectorColumn).filter((index, el) => {
            const category = el.dataset.category;
            const $parent = $(el).parent();

            (filterCatSelected === category) ? $parent.slideUp() : $parent.slideDown();
        });
    });
};

const makeAJAX = (options = {}) => {
    const defaults = {
        url: null,
        data: null,
        method: 'post',
    };

    options = {...defaults, ...options};

    return $.ajax(options);
};


const limitInput = (selector) => {
    const inputs = document.querySelectorAll(selector);
    if(!inputs.length) { return false }

    inputs.forEach((el, i) => {
        el.addEventListener('keyup', e => {
            const inputMax = Number(e.target.dataset.max);
            let inputValue = Number(e.target.value);
            inputValue = (isNaN(inputValue)) ? 0 : inputValue;

            e.target.value = inputValue;
            if(inputValue > inputMax) { e.target.value = inputMax }
        })
    });
};

limitInput('[id*=js-range-slider-output]');


/* Firefox backdrop fix */
const backdropFix = () => {
    const bgDrop = document.querySelector('.bg-menu-drop');
    if(!bgDrop) { return false }
    // 'menu-drop-azercell', 'menu-drop-juve'

    if(isFirefox()) {
        const dropClassEnding = (document.querySelector('.bg-azercell') ? 'azercell' : 'juve')
        bgDrop.classList.add('menu-drop-'+ dropClassEnding);
    }
}


const lines = (selector, options = {}) => {
    const width = window.innerWidth;
    const $selector = $(selector);
    if(!$selector.length) return false;

    $selector.css({
       left: (options.width - width) * options.side,
    });

    if(options.bgLeftDefault) {
        const bgPos = $selector.css('backgroundPosition').split(' ');
        $(selector).css({
            backgroundPosition: options.bgLeftDefault + Math.abs(options.width - width) +'px '+ bgPos[1]
        });
    }
};

/* Init */
lines('.bg-lines', { width: 1600, side: -1 });
lines('.bg-lines-card', { width: 1600, side: -0.5 });
lines('.bg-lines-mob', { width: 360, side: 0.5 });
lines('.bg-lines-card-mob', { width: 360, side: 0.1, bgLeftDefault: -220 });
$(window).on('resize', () => {
    lines('.bg-lines', { width: 1600, side: -1 });
    lines('.bg-lines-card', { width: 1600, side: -0.5 });
    lines('.bg-lines-mob', { width: 360, side: 0.3 });
    lines('.bg-lines-card-mob', { width: 360, side: 0.1, bgLeftDefault: -220 });
});


// const searchBar = () => {
//     $('#js-search-open, #js-search-close').on('click', e => {
//         $('#js-search-open').toggleClass('has-opened');
//         const $searchBar = $('#js-search-bar');
//         $searchBar.toggleClass('opacity-0').addClass('z-100').find('input').focus();
//         setTimeout(() => ($searchBar.hasClass('opacity-0')) ? $searchBar.removeClass('z-100') : null, 500);
//     });
// }

const searchBar = () => {
    $('#js-search-open, #js-search-close').on('click', e => {
        $('#js-search-open').toggleClass('has-opened');
        const $searchBar = $('#js-search-bar');
        if ($searchBar.hasClass('d-none')) {
            $searchBar.removeClass('d-none').addClass('z-100').find('input').focus();
            setTimeout( () => {
                $searchBar.removeClass('opacity-0');
            }, 10);
        }
        else {
            $searchBar.addClass('opacity-0');
            setTimeout( () => {
                $searchBar.addClass('d-none').removeClass('z-100');
            }, 500);
        }
    });
}
