const numberRounded = num => Math.round((num + Number.EPSILON) * 100) / 100;
const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const isiOS = () => !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

const creditCalculator = (selector, outputSelector) => {
    const sliderEl = document.querySelector(selector);
    const output = document.querySelector(outputSelector);

    if (!sliderEl) {
        return false;
    }

    rangesliderJs.create(sliderEl, {
        onInit: val => output.value = val,
        onSlide: val => {
            // console.log(val)
            if (!isNaN(val))
                output.value = val
            if (selector === '#js-range-slider-01') {
                correctGrammarOfCreditCalculator(output.nextElementSibling, output);
            }
        }
    });

    ['change', 'keyup'].forEach(event => output.addEventListener(event, e => {
        sliderEl['rangeslider-js'].update({value: e.target.value});
        if (selector === '#js-range-slider-01') {
            correctGrammarOfCreditCalculator(output.nextElementSibling, output);
        }
    }))
};

const cardOrderSlider = (selector, outputSelector, priceOutputSelector, priceTextOutputSelector) => {
    const sliderEl = document.querySelector(selector);
    const output = document.querySelectorAll(outputSelector);
    const priceOutput = document.querySelector(priceOutputSelector);
    const priceTextOutput = document.querySelector(priceTextOutputSelector);

    const updateValue = (val) => {
        output.forEach(outputItem => {
           if (outputItem.nodeName.toLowerCase() === 'span') {
               const minYear = outputItem.dataset.minYear;
               const writtenValue =  val < minYear ? minYear : val;
               outputItem.innerText = writtenValue;
               const prices = JSON.parse(priceOutput.dataset.prices);
               priceOutput.innerText = prices[writtenValue-1];
               correctGrammarOfCard(priceTextOutput, null, writtenValue);
           } else if (outputItem.nodeName.toLowerCase() === 'input') {
               outputItem.value = val;
           }
        });
    };

    if(!sliderEl) { return false; }

    rangesliderJs.create(sliderEl, {
        onInit: val => updateValue(val),
        onSlide: val => {
            // console.log(val)
            if(!isNaN(val)){
                updateValue(val);
            }
        }
    });

    ['change', 'keyup'].forEach(event => output.forEach( outputElement => outputElement.addEventListener(event, e => {
        sliderEl['rangeslider-js'].update({value: e.target.value});
        updateValue(e.target.value);
    })));
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
    if (!exchangePairs.length) {
        return false;
    }

    $(exchangePairs).find(options.selector).on(options.event, e => {
        const parent = e.target.closest('.js-currency-calc');
        const nextParent = (Array.from(exchangePairs).indexOf(parent)) ? exchangePairs[0] : exchangePairs[1];
        let inputValue = parent.querySelector(defaults.selector).value;

        const currencyCurrent = parent.querySelector('select option:checked').value;
        let currencyNext = nextParent.querySelector('select option:checked').value;

        if (currencyCurrent !== 'AZN' && currencyNext !== 'AZN') {
            nextParent.querySelector('select').value = 'AZN';
            currencyNext = nextParent.querySelector('select option:checked').value;
            $('select').selectric('refresh');
        } else if (currencyCurrent === 'AZN' && currencyNext === 'AZN') {
            nextParent.querySelector('select').value = e.target.dataset.previousValue;
            currencyNext = nextParent.querySelector('select option:checked').value;
            $('select').selectric('refresh');
        }

        if (e.target.nodeName.toLowerCase() === 'select') {
            e.target.dataset.previousValue = e.target.value;
        }

        nextParent.querySelector('input').value = (inputValue) ? (rates[currencyCurrent][currencyNext] * inputValue).toFixed(4) : '';
    });
};


const slider = (selector, options = {}) => {
    if (!document.querySelector(selector)) {
        return false
    }

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
    if (!wrapper) {
        return false
    }

    const windowWidth = window.innerWidth;
    const links = wrapper.querySelectorAll('a');
    let svgBg;

    if (windowWidth > 992) {
        $(links).on('mouseover', e => {
            $(links).css('color', '#9F9F9F').siblings('.icon').addClass('icon-color-9f9f9f');

            $(e.target).css({color: '#262626', marginLeft: 10}).siblings('.icon').removeClass('icon-color-9f9f9f');

            svgBg = document.querySelector(".bg-logo-svg").getSVGDocument().getElementById('ibar-logo-paint');
            svgBg.setAttribute("fill", "#F9F9F9");
            svgBg.setAttribute("stroke", "transparent");
        });

        $(links).on('mouseout', e => {
            $(links).css({color: '#262626', marginLeft: 0}).siblings('.icon').removeClass('icon-color-9f9f9f');
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

/*
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
*/
const menuToggle = () => {
    let hasClassClicked = false;
    let isSubmenuOpen = false;
    let duration = 200;
    // let isMouseStillIn = false;
    $('.menu > li').hover(e => {
            const $li = ($(e.target).is('li')) ? $(e.target) : $(e.target).parents('li').first();
            const bodyOverlay = document.getElementById('js-overlay-body');
            if ($li.find('.nav-sub').length && !hasClassClicked) {
                $li.addClass('clicked');
                $li.parents('.container-fluid').first().css('border-bottom', '1px solid #e6e6e6');
                const $navSubMenu = $li.find('.nav-sub');
                // bodyOverlay.classList.remove('d-none');
                // isMouseStillIn = true;
                // if (!isSubmenuOpen) {
                //     setTimeout( () => {
                //         if (isMouseStillIn && !isSubmenuOpen) {
                //                 $navSubMenu
                //                     .css("display", "flex")
                //                     .hide()
                //                     .stop()
                //                     .fadeIn(duration, function () {
                //                         // bodyOverlay.classList.remove('d-none');
                //                         hasClassClicked = true;
                //                         isSubmenuOpen = true;
                //                         $li.find('.icon-close').on('click', e => {
                //                             e.stopPropagation();
                //                             hasClassClicked = false;
                //                             // isSubmenuOpen = false;
                //                             $li.removeClass('clicked');
                //                             // bodyOverlay.classList.add('d-none');
                //                             $navSubMenu.stop().fadeOut(duration);
                //                             $('#js-overlay-body-animated').stop().fadeOut(duration);
                //                         });
                //                     });
                //
                //                 $('#js-overlay-body-animated').stop().fadeIn(duration);
                //         }
                //     },300);
                // }
                // else {
                //     $('.nav-sub').stop().hide();
                //     $navSubMenu.css("display", "flex");
                //     $('#js-overlay-body-animated').stop().css("display", "block");
                // }
                if (!isSubmenuOpen) {
                    $navSubMenu
                        .css("display", "flex")
                        .hide()
                        .stop()
                        .fadeIn(duration, function () {
                            // bodyOverlay.classList.remove('d-none');
                            hasClassClicked = true;
                            isSubmenuOpen = true;
                            $li.find('.icon-close').on('click', e => {
                                e.stopPropagation();
                                hasClassClicked = false;
                                // isSubmenuOpen = false;
                                $li.removeClass('clicked');
                                // bodyOverlay.classList.add('d-none');
                                $navSubMenu.stop().fadeOut(duration);
                                $('#js-overlay-body-animated').stop().fadeOut(duration);
                            });
                        });
                    $('#js-overlay-body-animated').stop().fadeIn(duration);
                } else {
                    $('.nav-sub').stop().hide();
                    $navSubMenu.css({
                        "display": "flex",
                        "opacity": "1",
                    });
                    $('#js-overlay-body-animated').stop().css({
                        "display": "block",
                        "opacity": "0.5",
                    });
                }
            } else if ($li.find('.nav-sub-small').length) {
                const $navSubMenu = $li.find('.nav-sub-small');
                $navSubMenu
                    .css("display", "flex")
                    .hide()
                    .stop()
                    .fadeIn(duration);
                // console.log($li.find('.icon'))
                $li.find('.icon').removeClass('rotate-90').addClass('rotate-270');
            }
        },
        e => {
            const $li = ($(e.target).is('li')) ? $(e.target) : $(e.target).parents('li').first();
            // isMouseStillIn = false;
            if ($li.find('.nav-sub').length) {
                const $navSubMenu = $li.find('.nav-sub');
                // const bodyOverlay = document.getElementById('js-overlay-body');
                e.stopPropagation();
                hasClassClicked = false;
                $li.removeClass('clicked');
                // bodyOverlay.classList.add('d-none');
                $('#js-overlay-body-animated').stop().fadeOut(duration);
                $navSubMenu.stop().fadeOut(duration);
                $navSubMenu.stop().fadeOut(duration, () => {
                    isSubmenuOpen = false;
                });
            } else if ($li.find('.nav-sub-small').length) {
                const $navSubMenu = $li.find('.nav-sub-small');
                $navSubMenu
                    .fadeOut(duration);
                $li.find('.icon').removeClass('rotate-270').addClass('rotate-90');
            }
        });
};

const menuToggleMobile = () => $('.hamburger').on('click', e => __menuToggleMobileActions());
$('#js-menu-mobile').find('a').on('click', e => __menuToggleMobileActions());

const __menuToggleMobileActions = () => {
    // if($('.bg-land-header').length) {
    $('body, html').toggleClass('overflow-h h-100-vh');
    // }

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
    if (!tabs.length) {
        return false
    }

    tabs.hide().first().fadeIn();
    $('[data-tab]').on('click', e => {
        const tab = e.target.dataset.tab;
        const tabContainer = e.target.dataset.tabContainer;

        $(`[data-tab][data-tab-container=${tabContainer}]`).removeClass(options.activeClass);
        $(e.target).addClass(options.activeClass);

        $('.' + tabContainer).addClass(options.hideClass).hide();
        $(`#${tab}.${tabContainer}`).removeClass(options.hideClass).fadeIn();

        if ('onClick' in options && options.onClick instanceof Function) {
            options.onClick.call(tabs, e.target, tab, tabContainer);
        }
    })
};


const animateHeader = (scrollPixels, minWidth, exclude = {}) => {
    // exclude class names separated by comma (type -> string)
    const header = document.getElementById('js-header');
    if (!header) {
        return false
    }

    if (window.innerWidth > minWidth && !document.querySelector(exclude.desktop)) {
        const s3 = document.getElementById("js-header-s3");
        const isMenuClicked = document.querySelector('.menu .clicked');
        header.classList.add('hover');

        const scrollTopDesktop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTopDesktop > lastScrollTop && scrollTopDesktop > scrollPixels * 2) {
            header.classList.remove('header-lg-animate');
            header.classList.add('header-lg-animated');
            $(s3).parents('.container-fluid').first().css('border-bottom', '1px solid #e6e6e6');
        } else {
            header.classList.remove('header-lg-animated');
            header.classList.add('header-lg-animate');
            if (!isMenuClicked) {
                $(s3).parents('.container-fluid').first().css('border-bottom', 'none');
            }
        }
        lastScrollTop = scrollTopDesktop <= 0 ? 0 : scrollTopDesktop;
    } else {
        if ((document.body.scrollTop > scrollPixels * 2 || document.documentElement.scrollTop > scrollPixels * 2) && !document.querySelector(exclude.mobile)) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const animateClasses = ['animated-up', 'animated-down'];

            if (scrollTop > lastScrollTop) {
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

        if ('afterAnimate' in options && options.afterAnimate instanceof Function) {
            options.afterAnimate.call(scrollToTarget, anchor);
        }
    });
};

const maskPlaceholder = (selector, mask) => {
    const input = document.querySelector(selector);
    if (!input) {
        return false
    }

    const placeholderText = input.placeholder;
    input.addEventListener('focus', e => e.target.placeholder = mask);
    input.addEventListener('blur', e => e.target.placeholder = placeholderText);
}

const scrollGradient = (options = {}) => {
    $(options.scrollSelector).on('scroll', e => $(e.target).find(options.gradientSelector).css('right', $(e.target).find(options.childSelector).position().left));
}

const selectBox = (selector, options = {}) => {
    // for mobile event handler
    if ('onChangeMobile' in options && options.onChangeMobile instanceof Function) {
        options.onChangeMobile.call(selectBox, selector);
    }

    return $(selector).selectric(options);
};


const accordion = (selector, options = {}) => {
    if (!document.querySelector(selector)) {
        return false
    }
    return new Accordion(selector, options);
};


const azToEn = (str) => {
    return str.replace(/Ə/g, 'E')
        .replace(/ə/g, 'e')
        .replace(/Ğ/g, 'G')
        .replace(/ğ/g, 'g')
        .replace(/Ü/g, 'U')
        .replace(/ü/g, 'u')
        .replace(/Ş/g, 'S')
        .replace(/ş/g, 's')
        .replace(/I/g, 'I')
        .replace(/ı/g, 'i')
        .replace(/İ/g, 'I')
        .replace(/Ö/g, 'O')
        .replace(/ö/g, 'o')
        .replace(/Ç/g, 'C')
        .replace(/ç/g, 'c');
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
            if (azToEn(el.innerText.toLowerCase().trim()).indexOf(val) === -1) {
                $parent.hide();
            } else {
                result++;
                $parent.show();
            }
            $resultEl.text(result).parent().show();
        });
        result = 0;

        (val) ? $resultEl.parent().removeClass('d-none') : $resultEl.parent().addClass('d-none');
    });
};


// const brandFilter = (selector, options = {}) => {
//     if(!document.querySelector(selector)) { return false }
//     return new Filterizr(selector, options);
// };

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
    if (!inputs.length) {
        return false
    }

    inputs.forEach((el, i) => {
        el.addEventListener('keyup', e => {
            const inputMax = Number(e.target.dataset.max);
            let inputValue = Number(e.target.value);
            inputValue = (isNaN(inputValue)) ? 0 : inputValue;

            e.target.value = inputValue;
            if (inputValue > inputMax) {
                e.target.value = inputMax
            }
        })
    });
};

limitInput('[id*=js-range-slider-output], [id*=js-range-slider-card-output]');


/* Firefox backdrop fix */
const backdropFix = () => {
    const bgDrop = document.querySelector('.bg-menu-drop');
    if (!bgDrop) {
        return false
    }
    // 'menu-drop-azercell', 'menu-drop-juve'

    if (isFirefox()) {
        const dropClassEnding = (document.querySelector('.bg-azercell') ? 'azercell' : 'juve')
        bgDrop.classList.add('menu-drop-' + dropClassEnding);
    }
}


const lines = (selector, options = {}) => {
    const width = window.innerWidth;
    const $selector = $(selector);
    if (!$selector.length) return false;

    $selector.css({
        left: (options.width - width) * options.side,
    });

    if (options.bgLeftDefault) {
        const bgPos = $selector.css('backgroundPosition').split(' ');
        $(selector).css({
            backgroundPosition: options.bgLeftDefault + Math.abs(options.width - width) + 'px ' + bgPos[1]
        });
    }
};

/* Init */
lines('.bg-lines', {width: 1600, side: -1});
lines('.bg-lines-card', {width: 1600, side: -0.5});
lines('.bg-lines-mob', {width: 360, side: 0.5});
lines('.bg-lines-card-mob', {width: 360, side: 0.1, bgLeftDefault: -220});
$(window).on('resize', () => {
    lines('.bg-lines', {width: 1600, side: -1});
    lines('.bg-lines-card', {width: 1600, side: -0.5});
    lines('.bg-lines-mob', {width: 360, side: 0.3});
    lines('.bg-lines-card-mob', {width: 360, side: 0.1, bgLeftDefault: -220});
});

const searchBar = () => {
    $('#js-search-open, #js-search-close').on('click', e => {
        $('#js-search-open').toggleClass('has-opened');
        const $searchBar = $('#js-search-bar');
        if ($searchBar.hasClass('d-none')) {
            $searchBar.removeClass('d-none').addClass('z-100').find('input').focus();
            setTimeout(() => {
                $searchBar.removeClass('opacity-0');
            }, 10);
        } else {
            $searchBar.addClass('opacity-0');
            setTimeout(() => {
                $searchBar.addClass('d-none').removeClass('z-100');
            }, 500);
        }
    });
};

const phoneNumberMask = (selector) => {
    $(selector).inputmask({
        mask: '+\\9\\94 99 999-99-99',
        showMaskOnHover: false,
        removeMaskOnSubmit: true,
        onUnMask: (maskedValue, unMaskedValue) => {
            if (unMaskedValue.length === 9) {
                return `994${unMaskedValue}`;
            } else {
                return unMaskedValue;
            }
        }
    });
};

const creditCardMask = (selector) => {
    $(selector).inputmask({
        mask: '9999  9999  9999  9999',
        placeholder: ' ',
        showMaskOnHover: false,
        removeMaskOnSubmit: true,
    });
};

const creditCardMaskEightDigits = (selector) => {
    $(selector).inputmask({
        mask: '9999  9999',
        placeholder: ' ',
        showMaskOnHover: false,
        removeMaskOnSubmit: true,
    });
};

const dateMask = (selector) => {
    $(selector).inputmask({
        mask: '99/99/9999',
        placeholder: 'dd/mm/yyyy',
        showMaskOnHover: false,
        // removeMaskOnSubmit: true,
    });
};

const calculateCredit = (val, type) => {
    var princ = $('#js-range-slider-0').val(); // mebleg
    var term = $('#js-range-slider-01').val(); // muddet
    var rate = $('#js-range-slider-02').val(); //faiz
    var sliderElements = document.getElementById('js-range-slider-02');

    // if(type === 'month' && sliderElements['rangeslider-js'] ){
    //     if(term < 12){
    //         sliderElements['rangeslider-js'].update({value: 18});
    //         sliderElements['rangeslider-js'].update({max: 18});
    //         sliderElements['rangeslider-js'].update({min: 18});
    //         $('#js-range-slider-output-02').val(18);
    //         return false;
    //     }else{
    //         sliderElements['rangeslider-js'].update({max: 27});
    //         sliderElements['rangeslider-js'].update({min: 18});
    //     }
    // }

    var intr = rate / 1200; // faiz
    var result = Math.round(princ * intr / (1 - (Math.pow(1 / (1 + intr), term))) * 100) / 100;
    result = isNaN(result) ? 0 : result;

    $("#monthly_payment").text(result + " ₼")
    $("#total_payment").text((result * term).toFixed(2) + " ₼")
    $("#interest_rate").text(rate + "%")
};

const calculateDeposit = (val, type) => {
    var min_periods = {"azn": 12, "usd": 12},
        max_periods = {"azn": 36, "usd": 12},
        amount = $('#js-range-slider-0').val(), // mebleg
        period = $('#js-range-slider-1').val(), // muddet
        payment = $('#js-selectric-credit-0').val(),
        currency = $('#js-selectric-currency-1').val();

    if (type === 'payment') {
        var scope = angular.element(document.getElementById('calc_deposit')).scope();
        console.log(scope)
        if (payment === 'every_month') {
            scope.yearly = false;
            scope.monthly = true;
        } else {
            scope.monthly = false;
            scope.yearly = true;
        }
        scope.$apply();
    }

    var percents = {
        "azn": {"every_month": {"36": 8.5, "24": 8.5, "12": 8}, "every_year": {"36": 9, "24": 9, "12": 8.5}},
        "usd": {"every_month": {"12": 0.1}, "every_year": {"12": 0.1}}
    }


    if (type == 'currency') {
        period = max_periods[val];
        $('#js-range-slider-1').attr('max', max_periods[val]);

        // rangesliderJs._destroy(document.querySelector('#js-range-slider-1'))

        const sliderElements = document.getElementById('js-range-slider-1');

        sliderElements['rangeslider-js'].update({value: max_periods[val]});

    }

    var percent = parseFloat(percents[currency][payment][period]);

    var one_percent = 0,
        all_percents = 0;
    if (payment == "every_month") {
        one_percent = parseFloat(amount * percent / 100 / 12);
        all_percents = parseFloat(one_percent * period);
    } else if (payment == "every_year") {
        one_percent = parseFloat(amount * percent / 100);
        all_percents = parseFloat(one_percent / 12 * period);
    }

    $("#monthly_payment").text(one_percent.toFixed(2) + " ₼")
    $("#total_payment").text(all_percents.toFixed(2) + " ₼")
    $("#interest_rate").text(percent + "%")

};

const ajaxFormErrorHandler = (error) => {
    const errorArray = Object.keys(JSON.parse(error.responseText).errors);
    console.log(error)
    errorArray.forEach((inputName, index) => {
        const inputElement = document.querySelector(`input[name=${inputName}]`);
        inputElement.classList.add('parsley-error');
        if (index === 0) {
            $('html, body').animate({
                scrollTop: inputElement.getBoundingClientRect().top + window.scrollY - 200
            });
        }
    });
};

const correctGrammarOfCard = (textElSelector, selectEl, val) => {
    const $textEl = $(textElSelector);
    const selectValue = selectEl ? parseInt($(selectEl).val()) : val;
    const language = $textEl.data('lang') || window.Laravel.lang;
    if (language === 'en') {
        if (selectValue > 1) {
            $textEl.text($textEl.text().replace('year ', 'years '));
        } else {
            $textEl.text($textEl.text().replace('years', 'year '));
        }
    } else if (language === 'ru') {
        if (selectValue > 1 && selectValue < 5) {
            $textEl.text($textEl.text().replace('год ', 'года '));
            $textEl.text($textEl.text().replace('лет ', 'года '));
        } else if (selectValue === 1) {
            $textEl.text($textEl.text().replace('года ', 'год '));
            $textEl.text($textEl.text().replace('лет ', 'год '));

        } else if (selectValue === 5) {
            $textEl.text($textEl.text().replace('года ', 'лет '));
            $textEl.text($textEl.text().replace('год ', 'лет '));
        }
    }
};


const correctGrammarOfCreditCalculator = (textElSelector, selectEl) => {
    const $textEl = $(textElSelector);
    const selectValue = parseInt($(selectEl).val());
    const language = $textEl.data('lang') || window.Laravel.lang;
    // console.log($textEl, selectValue);
    if (language === 'en') {
        if (selectValue > 1) {
            $textEl.text("months");
        } else {
            $textEl.text("month");
        }
    } else if (language === 'ru') {
        if (selectValue % 10 > 1 && selectValue % 10 < 5 && (selectValue > 20 || selectValue < 10)) {
            $textEl.text('месяца');
        } else if (selectValue === 1 || (selectValue > 20 && selectValue % 10 === 1)) {
            $textEl.text('месяц');
        } else if (selectValue % 10 >= 5) {
            $textEl.text('месяцев');
        }
    }
};

const afterResponseQaygicash = (result) => {
    $('.filter-container').empty();
    $('.pagi_cust').empty();
    var dataItem = "";
    $.each(result.data.data, function (k, v) {
        var item = result.data.data[k];
        dataItem += '<div class="col-md-6 col-lg-4 px-0 px-md-2 filtr-item js-qaygicash-item cursor-p">\n' +
            '                            <div class="mb-5 mb-lg-4 hover hover-brand">\n' +
            '                                <div class="border border-dcdcdc text-center">\n' +
            '                                    <figure class="h-140 d-flex align-items-center justify-content-center p-3" >\n' +
            '                                        <img src="' + item.image + '" class="obj-contain w-100-max" alt="">\n' +
            '                                    </figure>\n' +
            '\n' +
            '                                    <div class="p-4">\n' +
            '                                        <h4 class="fs-17 fw-500 mt-0 mb-2 h-35 overflow-h">' + item.title + '</h4>\n' +
            '                                        <span class="fs-14 color-666 d-block pt-1 h-65">' + item.content + '</span>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="bg-e7e7e7 p-2 text-center brand-discount">\n' +
            '                                    <span class="fs-16 fw-600 brand-percentage">' + item.excerpt + '</span>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>'
    })

    $('.filter-container').append(dataItem);
    $('.pagi_cust').append(result.pagination);

    $('.js-qaygicash-item').off();
    qaygiCashModal('.js-qaygicash-item');

    if (result.data.current_page !== result.data.last_page) {
        $('#js-ajax-qaygicash').css('display', 'block');
        if (result.data.next_page_url == null) {
            $('#js-ajax-qaygicash').attr('data-url', result.data.last_page_url + "&api=true");
        } else {
            $('#js-ajax-qaygicash').attr('data-url', result.data.next_page_url + "&api=true");
        }
    } else {
        $('#js-ajax-qaygicash').css('display', 'none');
    }
}

const afterResponseQaygicashMobile = (result) => {
    var dataItem = "";
    $.each(result.data.data, function (k, v) {
        var item = result.data.data[k];
        dataItem += '<div class="col-md-6 col-lg-4 px-0 px-md-2 filtr-item js-qaygicash-item cursor-p">\n' +
            '                            <div class="mb-5 mb-lg-4 hover hover-brand">\n' +
            '                                <div class="border border-dcdcdc text-center">\n' +
            '                                    <figure class="h-140 d-flex align-items-center justify-content-center p-3" >\n' +
            '                                        <img src="' + item.image + '" class="obj-contain w-100-max" alt="">\n' +
            '                                    </figure>\n' +
            '\n' +
            '                                    <div class="p-4">\n' +
            '                                        <h4 class="fs-17 fw-500 mt-0 mb-2 h-35 overflow-h">' + item.title + '</h4>\n' +
            '                                        <span class="fs-14 color-666 d-block pt-1 h-65">' + item.content + '</span>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="bg-e7e7e7 p-2 text-center brand-discount">\n' +
            '                                    <span class="fs-16 fw-600 brand-percentage">' + item.excerpt + '</span>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>'
    })

    $('.filter-container').append(dataItem);
    $('.js-qaygicash-item').off();
    qaygiCashModal('.js-qaygicash-item');

    if(result.data.next_page_url == null){
        $('#js-ajax-qaygicash').attr('data-url',result.data.last_page_url+"&api=true");
    }else{
        $('#js-ajax-qaygicash').attr('data-url',result.data.next_page_url+"&api=true");
    }

    if(result.data.current_page === result.data.last_page){
        $('#js-ajax-qaygicash').css('display','none');
    }

};

const refreshPartners = (parent_id = null, search_key = null, url = null) => {
    if (url !== null) {
        $.get(url, afterResponseQaygicashMobile);
    } else {
        $.get($('#search_url').data('url') + "?parent_id=" + parent_id + "&api=true&type_key=partner&search_key=" + search_key, afterResponseQaygicash);
    }
}

const magnifier = (selector, minWidth) => {

    // Get all images with the `js-image-magnify` class
    const zoomBoxes = document.querySelectorAll(selector);

    if (!zoomBoxes.length || window.innerWidth < minWidth) {
        return false
    }


    // Extract the URL
    zoomBoxes.forEach(function (image) {
        var imageCss = window.getComputedStyle(image, false),
            imageUrl = imageCss.backgroundImage
                .slice(4, -1).replace(/['"]/g, '');

        // Get the original source image
        var imageSrc = new Image();
        imageSrc.onload = function () {
            var imageWidth = imageSrc.naturalWidth,
                imageHeight = imageSrc.naturalHeight,
                ratio = imageHeight / imageWidth;

            // Adjust the box to fit the image and to adapt responsively
            var percentage = ratio * 100 + '%';
            image.style.paddingBottom = percentage;

            // Zoom and scan on mousemove
            image.onmousemove = function (e) {
                // Get the width of the thumbnail
                let boxWidth = image.clientWidth,
                    // Get the cursor position, minus element offset
                    x = e.pageX - $(this).offset().left,
                    y = e.pageY - $(this).offset().top,
                    // Convert coordinates to % of elem. width & height
                    xPercent = x / (boxWidth / 100) + '%',
                    yPercent = y / (boxWidth * ratio / 100) + '%';

                // Update styles w/actual size
                Object.assign(image.style, {
                    backgroundPosition: xPercent + ' ' + yPercent,
                    backgroundSize: imageWidth + 'px'
                });
            };

            // Reset when mouse leaves
            image.onmouseleave = function (e) {
                Object.assign(image.style, {
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                });
            };
        }
        imageSrc.src = imageUrl;
    });
};


const closeModals = (selectorClass, containerSelectorClass) => {
    $(`.${selectorClass}, .${containerSelectorClass}`).on('click', function (e) {
        if (e.target.classList.contains(containerSelectorClass) && e.target === e.currentTarget) {
            $(`.${containerSelectorClass}`).removeClass('d-flex').addClass('d-none');
            $('body').removeClass('overflow-h');
        } else if (e.target.classList.contains(selectorClass)) {
            $(`.${containerSelectorClass}`).removeClass('d-flex').addClass('d-none');
            $('body').removeClass('overflow-h');
        }
    })
};

const openModal = (selector) => {
    $(selector).on('click', function (e) {
        $(`#${e.currentTarget.dataset.modalId}`).removeClass('d-none').addClass('d-flex');
        $('body').addClass('overflow-h');
    })
};


const applicationRadioHandler = (selector) => {
    $(selector).on('change', function (e) {
        const targetElementId = e.target.dataset.for ? e.target.dataset.for : null;

        $(selector).each(function (index, elem) {
            if (elem.dataset.for) {
                $('#' + elem.dataset.for).addClass('d-none').find('input').prop('required', false);
            }
        });


        if (targetElementId) {
            $('#' + targetElementId).removeClass('d-none').find('input').prop('required', true);
        }
    })
}

const qaygiCashModal = (selector) => {
    $(selector).on('click', function (e) {
        $(`.modal-container`).removeClass('d-none').addClass('d-flex');
        $('body').addClass('overflow-h');
        $('#map-section').addClass('d-none');
        $(".loader").removeClass('d-none').addClass('d-flex');
        //fetch data
        var id_partner = e.currentTarget.dataset.id;
        makeAJAX({
            url: $('#partner_url').val() + "/" + id_partner,
            method: 'get',
            data: {},
            success: result => {
                $('#map-section').removeClass('d-none');
                $(".loader").addClass('d-none').removeClass('d-flex');
                const fetchedData = result[0];

                {
                    document.querySelector('.js-qaygicash-partner-img').src = fetchedData.image;
                    document.querySelector('.js-qaygicash-partner-cashback').innerText = fetchedData.cashback;
                    document.querySelector('.js-qaygicash-partner-title').innerText = fetchedData.title;
                    // document.querySelector('.js-qaygicash-partner-description').innerText = fetchedData.description;
                    $('#js-scroll-map').empty();
                    fetchedData.addresses.forEach((address) => {
                        $('#js-scroll-map').append(`<div class="color-262626 js-slide-header cursor-p events-none" data-lat="${address.lat}" data-lng="${address.lng}" data-icon="location" data-title="${fetchedData.title}" data-description="${address.title}">
                                            <div class="d-flex align-items-center py-3 border-bottom border-e4e4e4 mr-2 hover-node">
                                                <div class="pr-1">
                                                    <span class="icon icon-location"></span>
                                                </div>

                                                <div class="pl-2 flex-fill">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <span class="fw-500 fs-14 lh-20">${address.title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`)
                    })
                }

                mapInit(getLocations('.js-slide-header'));
            },
            error: result => console.log(JSON.parse(result))
        })
    });

};


const reportsHandler = (selector) => {
    if ($(selector).length){
        const e = {
            currentTarget: document.querySelector(selector)
        };

        reportsHandlerFunc(e);
    }

    $(selector).on('click', reportsHandlerFunc)

    function reportsHandlerFunc (e) {
        if (!(e.currentTarget.parentElement.classList.contains('clicked'))) {
            const inactiveClassses = ['color-9B9FA3', 'hover', 'hover-color-17253a'];
            const activeClasses = ['color-17253a'];
            const activeClasssesParent = ['clicked'];

            $(selector).each(function (index, button) {
                $(button).removeClass(activeClasses).addClass(inactiveClassses).parent().removeClass(activeClasssesParent);
            });

            $(e.currentTarget).addClass(activeClasses).removeClass(inactiveClassses).parent().addClass(activeClasssesParent);


            //remove data in .js-reports-container , add loader
            const reportsContainer = document.querySelector(".js-reports-container");
            reportsContainer.innerHTML = `<section class="loader d-flex justify-content-center align-items-center h-100 w-100">
                <div class="loadingio-spinner-rolling-5z2kwbv4h2">
                    <div class="ldio-jxzyhxm0nai">
                        <div></div>
                    </div>
                </div>
            </section>`;

            // set timeout instead of ajax request

            console.log(e.currentTarget.dataset.targetUrl)
            makeAJAX({
                url: e.currentTarget.dataset.targetUrl,
                method: 'get',
                data: {},
                success: fetchedData => {
                    reportsContainer.innerHTML = "";
                    if (fetchedData[0].type_key !== 'page') {
                        //const fetchedData = reportsContainer;
                        reportsContainer.innerHTML = handleFiles(fetchedData, e.currentTarget.dataset.download);
                    } else {
                        console.log(fetchedData)
                        let htmlContent = `<div id="js-accordion" class="col-12">`;
                        //const fetchedData = otherReports;
                        fetchedData.forEach((report) => {
                            htmlContent += `
                            <div class="ac">
                                <h4 class="ac-q fw-500 fs-20 fs-lg-24 lh-25 lh-lg-29 pr-4 pr-lg-5">${report.title}</h4>
                                <div class="ac-a">
                                    <div class="row py-4 py-lg-5">
                                        ${handleFiles(report.files, e.currentTarget.dataset.download)}
                                    </div>
                                </div>
                            </div>
                        `;
                        });
                        htmlContent += `</div>`;
                        reportsContainer.innerHTML = htmlContent;
                        accordion('#js-accordion');
                    }
                },
                error: result => console.log(JSON.parse(result))
            })


        }

        function handleFiles(files, downloadText) {
            let htmlContent = ``;
            files.forEach((file) => {
                htmlContent += `<div class="col-sm-6 col-lg-4 w-100 d-flex">
                                    <div class="border border-e4e4e4 p-3 p-lg-4 mb-4 d-flex w-100">
                                        <div class="mr-2">
                                            <span
                                                class="icon icon-${file.type} rect-35-45"></span>
                                        </div>
                                        <div class="ml-1 w-100 pos-relative">
                                            <p class="mt-0 mb-3 fs-13 fs-lg-15 lh-18">${file.title}</p>
                                            <span class="d-inline-block mb-4 mb-lg-5 fs-14 color-9B9FA3">${file.date}</span>

                                            <div
                                                class="d-flex justify-content-between link-underline pos-md-absolute w-100 bottom-0">
                                                <a href="${file.url}"
                                                   class="fw-500 fs-14 hover-link-underline-none">${downloadText}</a>
                                                <span
                                                    class="fw-500 fs-14 color-666">${file.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            });
            return htmlContent;
        }
    }
};

const otpHandler = ( otpContainerSelector, desktopContainerSelector, mobileInputSelector, timerSelector, submitButton, otpResendContainerSelector, otpResendButtonSelector, otpResendLoadingSelector, otpResendSent, otpResendError, otpFormSelector, otpCodeErrorSelector, otpSuccessSelector) => {

    const $otpContainer = $(otpContainerSelector);
    const $desktopContainer = $(desktopContainerSelector);
    const $mobileInput = $(mobileInputSelector);
    const $timer = $(timerSelector);
    const $submitButton = $(submitButton);
    const $otpResendContainer = $(otpResendContainerSelector);
    const $otpResendButton = $(otpResendButtonSelector);
    const $otpResendLoading = $(otpResendLoadingSelector);
    const $otpResendSent = $(otpResendSent);
    const $otpResendError = $(otpResendError);
    const $otpForm = $(otpFormSelector);
    const $otpCodeError = $(otpCodeErrorSelector);
    const $otpSuccess = $(otpSuccessSelector);


    if ($otpContainer.length) {
        let interval;

        manageRequiredFields();
        window.addEventListener('resize', manageRequiredFields);

        $desktopContainer.find('input').each(function () {
            $(this).attr('maxlength', 1);

            $(this).on('keyup', function (e) {
                var parent = $($(this).parent());
                if (e.keyCode === 8 || e.keyCode === 37) {
                    var prev = parent.find('input#' + $(this).data('previous'));

                    if (prev.length) {
                        $(prev).select();
                    }
                } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                    var next = parent.find('input#' + $(this).data('next'));

                    mirrorDesktopToMobile();

                    if (next.length) {
                        $(next).select();
                    } else {
                        if (parent.data('autosubmit')) {
                            parent.submit();
                        }
                    }
                }
            });
        });

        function mirrorDesktopToMobile () {
            let mirroredValue = "";
            $desktopContainer.find('input').each(function (index, input) {
                mirroredValue += input.value;
            });
            console.log(mirroredValue);
            $mobileInput.val(mirroredValue);
        }

        function manageRequiredFields () {
            if (window.innerWidth < 992 ) {
                $desktopContainer.find('input').each(function (index, input) {
                    $(input).attr('required', false)
                });
            } else {
                $desktopContainer.find('input').each(function (index, input) {
                    $(input).attr('required', true)
                });
            }
        }

        function countdown(seconds, element) {
            let minutesDisplay, secondsDisplay;
            function calculate() {
                if (seconds >= 0) {
                    minutesDisplay = parseInt(seconds / 60);
                    secondsDisplay = parseInt(seconds % 60);

                    element.text(`${("0" + minutesDisplay).slice(-2)}:${("0" + secondsDisplay).slice(-2)}`);
                    seconds--;
                } else {
                    clearInterval(this);
                    // do the work here (end of timer)
                    $submitButton.attr('disabled', true);
                }
            }

            return setInterval(calculate, 1000);
        }

        if ($timer.length) {
            interval = countdown(120, $timer);
        }

        $otpResendButton.on('click', (e) => {
            clearInterval(interval);
            interval = countdown(120, $timer);
            $submitButton.attr('disabled', false);
            $otpResendContainer.addClass('d-none');
            $otpResendSent.addClass('d-none');
            $otpResendError.addClass('d-none');
            $otpResendLoading.removeClass('d-none');


            makeAJAX({
                url: e.currentTarget.dataset.url,
                method: 'get',
                success: result => {
                    if (result.status === "SUCCESS") {
                        console.log('in success');
                        $otpResendContainer.addClass('d-none');
                        $otpResendLoading.addClass('d-none');
                        $otpResendSent.removeClass('d-none');
                        $otpResendError.addClass('d-none');

                        setTimeout(() => {
                            $otpResendContainer.removeClass('d-none');
                            $otpResendLoading.addClass('d-none');
                            $otpResendSent.addClass('d-none');
                            $otpResendError.addClass('d-none');
                        }, 5000)
                    } else if (result.status === "FAILURE") {
                        console.log('in error');
                        $otpResendError.removeClass('d-none');
                        $otpResendContainer.addClass('d-none');
                        $otpResendLoading.addClass('d-none');
                        $otpResendSent.addClass('d-none');
                    }
                },
                error: result => console.log(JSON.parse(result))
            })
        });

        $otpForm.on('submit', (e) => {
            e.preventDefault();

            makeAJAX({
                url: e.currentTarget.action,
                method: 'post',
                data: {
                    "_token" : window.Laravel.csrf,
                    "otp": $mobileInput.val()
                },
                success: result => {
                    if (result.status === "SUCCESS") {
                        $otpSuccess.removeClass("d-none");
                        $otpContainer.remove();
                    } else if (result.status === "FAILURE") {
                        $otpCodeError.removeClass('d-none');
                    }
                },
                error: result => console.log(JSON.parse(result))
            })
        })
    }
};
