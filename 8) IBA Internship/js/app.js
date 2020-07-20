// could pre-fetch data from backend while rendering page. then assign data to rates variable as a internal JS. Will work as expected
const rates = {
    USD: {
        USD: 1,
        AZN: 1.7,
        EUR: 0.9,
        RUR: 66
    },
    AZN: {
        AZN: 1,
        USD: 0.58,
        EUR: 0.52,
        RUR: 39
    },
    EUR: {
        EUR: 1,
        USD: 1.1,
        AZN: 1.9,
        RUR: 73.2
    },
    RUR: {
        RUR: 1,
        USD: 0.015,
        EUR: 0.013,
        AZN: 0.025
    }
};

let lastScrollTop = 0;
window.onscroll = () => animateHeader(50, 992, { desktop: '.bg-logo-svg', mobile: '.map-canvas' });
window.onresize = () => animateHeader(50, 992, { desktop: '.bg-logo-svg', mobile: '.map-canvas' });

onCurrencyChange(rates);
currencyCalculator(rates);


slider('.swiper-auto-slide',  { loop: false, slidesPerView: 'auto' });
slider('#js-main-slider',  { loop: false });

const galleryThumb = slider('#js-gallery-thumb',  {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    loop: false,
    pagination: false
});

slider('#js-gallery',  {
    navigation: {
        nextEl: '.swiper-card-next',
        prevEl: '.swiper-card-prev',
    },
    thumbs: {
        swiper: galleryThumb
    },
    pagination: false,
    loop: false,
});

const sliderCardOptions = {
    pagination: false,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
};

slider('#js-slider-cards', {...sliderCardOptions,
    ...{
        navigation: {
            nextEl: '.swiper-card-next',
            prevEl: '.swiper-card-prev',
        }
    }
});

slider('#js-slider-cards-2', {...sliderCardOptions,
    ...{
        navigation: {
            nextEl: '.swiper-card-next-2',
            prevEl: '.swiper-card-prev-2',
        }
    }
});


linkHover('#js-hover-link');
menuToggle();
menuToggleMobile();

// tab section in home page. Also works where #js-range-slider is set
for (let i = 0; i < 5; i++) {
    creditCalculator('#js-range-slider-'+ i, '#js-range-slider-output-'+ i);
    creditCalculator('#js-range-slider-'+ i +'1', '#js-range-slider-output-'+ i +'1');
}

selectBox('.selectric-select, .selectric-tooltip');

selectBox('.js-parsley-validate .selectric-select', {
    onChange: element => {
        __selectChange(element);
        __formStepping(element);
    }
});

selectBox('#js-selectric-lang, #js-selectric-banking, #js-selectric-lang-footer, #js-selectric-news-year, #js-selectric-news-month', {
    onChangeMobile: element => $(element).on('change', e => window.location.replace(e.target.querySelector('option:checked').dataset.url)),
    optionsItemBuilder: itemData => itemData.value.length ? '<span class="mr-2 icon icon-2x icon-flag-' + itemData.value + '"></span>' + itemData.text : itemData.text,
    onBeforeOpen: (element) => $(element).parents('section').first().addClass('z-111'),
    onBeforeClose: (element) => $(element).parents('section').first().removeClass('z-111')
});

selectBox('#js-category-filter', {
    onChange: element => window.location.replace(element.querySelector('option:checked').dataset.url)
});

selectBox('#js-selectric-awards', {
    onChangeMobile: element => {
        $(element).on('change', e => {
            const yearAnchor = e.target.querySelector('option:checked').value;

            $('html, body').animate({
                scrollTop: document.querySelector(yearAnchor).offsetTop + 125
            }, 'slow', () => {
                $('[id*=year-]').removeClass('year-active');
                $(yearAnchor).addClass('year-active');
            });
        });
    }
});

selectBox('#js-selectric-card-years', {
    onChangeMobile: element => {
        $(element).on('change', e => {
            const price = e.target.querySelector('option:checked').dataset.price;
            $('#js-card-year-price').text(price);
        });
    },
   onChange: element => {
       const price = element.querySelector('option:checked').dataset.price;
       $('#js-card-year-price').text(price);
   }
});

tabs({
    onClick: (element, currentTabID, tabContainer) => {}
});

accordion('#js-accordion');
accordion('#js-accordion-menu');

searchFilter('#js-search', '.js-search-column');

scrollToTarget({
    afterAnimate: (hash) => {
        if(hash.indexOf('#year-') !== -1) {
            $('[id*=year-]').removeClass('year-active');
            $(hash).addClass('year-active');
        }
    }
});

scrollGradient({
    scrollSelector: '.js-scroll-gradient',
    gradientSelector: '.gradient',
    childSelector: '.table, .border-scroll'
});

slideUpDown();

atmFilter('.js-filter-atm', '.js-slide');

formValidation('.js-parsley-validate', {
    init: formEl => {
        // prevent press enter on range slider output elements
        $(formEl).on("keydown", "[id*=js-range-slider-output]", e => e.key !== "Enter");
        maskPlaceholder('#js-dob', $('#js-dob').data('text'));
        maskPlaceholder('#js-mob-phone', '+994 __ ___ __ __');
    },
    formStep: element => {
        if($('#js-card-order').length) {
            __selectChange(element);
            __formStepping(element);
        }
    }
});


const cashFilter = brandFilter('.filter-container');
$('.js-ajax').on('click', e => {
    const id = e.target.getAttribute('id');
    makeAJAX({
        url: e.target.dataset.url,
        data: JSON.parse(e.target.dataset.data),
        success: result => {
            if(id === 'js-ajax-campaign') {
                $('.hover-border-lg-e4e4e4').parent().append(result);
            }

            if(id === 'js-ajax-qaygicash') {
                cashFilter.destroy();
                const lastItem = $('.filtr-item').last();
                const scrollHeight = lastItem[0].scrollHeight;
                lastItem.after(result);
                brandFilter('.filter-container');
                lastItem[0].scrollTop = scrollHeight;
            }
        },
        error: result => console.log(JSON.parse(result))
    })
});

backdropFix();
if(isiOS()) { document.querySelector('body').classList.add('ios') }
searchBar();


/* Internship page Delete this js snippet when internship is passive */

const phoneNumberMask = $('#mob-phone').inputmask({
    mask: '+\\9\\94 99 999-99-99',
    showMaskOnHover: false,
});

$('#signUpButton').on('click', function (e) {
    $('#faqButton').parent().removeClass('d-none');
    $('#checkStatus').parent().addClass('d-none');
    $(this).parent().addClass('d-none');

    $('#faq').fadeOut(200, function () {
        $('#signUp').removeClass('d-none');
        $('#signUp').fadeIn(200);
    });
});

$('#faqButton').on('click', function (e) {
    $('#signUpButton').parent().removeClass('d-none');
    $('#checkStatus').parent().removeClass('d-none');
    $(this).parent().addClass('d-none');

    $('#signUp').fadeOut(200, function () {
        $('#faq').fadeIn(200);
    });
});

$('#goToStepTwo').on('click', function (e) {
    $('#internshipForm').parsley().validate('first');
    const $stepOne = $('#stepOne');
    const $stepTwo = $('#stepTwo');
    const countInputs = $stepOne.find('.js-input-check').length;
    const countSuccess = $stepOne.find('.js-input-check').find('.parsley-success').length;

    if(countInputs === countSuccess) {
        // console.log('open part 2');
        $stepTwo.find('.selectric').css('border-color', '#dcdcdc');
        $stepTwo.find('input[type=file]').parent().css('border-color', '#dcdcdc');
        $('#stepOne').fadeOut(200, function () {
            $('#stepTwo').fadeIn(200);
        });
    }
    // else {
    //     console.log(countInputs - countSuccess);
    // }
})

$('#goBackToStepOne').on('click', function () {
    $('#stepTwo').fadeOut(200, function () {
        $('#stepOne').fadeIn(200);
    });
})

const $internRadios = $("#stepTwo input[type=radio]");
$internRadios.on('change', addRequiredTextToRadio);
$('#internSubmit').on('click', addRequiredTextToRadio);

function addRequiredTextToRadio () {
    setTimeout(function () {
        const typeOfRadio = new Set();
        $internRadios.each(function (i, radio) {
            if (!typeOfRadio.has(radio.name)) {
                typeOfRadio.add(radio.name);
                if ( $(radio).parent().hasClass('parsley-error') ) {
                    $(radio).closest('.list-reset').next().addClass('d-block');
                }
                else {
                    $(radio).closest('.list-reset').next().removeClass('d-block');
                }
            }
        })
    }, 30);
}

/* End of Internship page Delete this js snippet when internship is passive */
