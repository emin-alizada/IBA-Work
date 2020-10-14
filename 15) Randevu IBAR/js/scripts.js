// could pre-fetch data from backend while rendering page. then assign data to rates variable as a internal JS. Will work as expected



let lastScrollTop = 0;
window.onscroll = () => animateHeader(50, 992, { desktop: null, mobile: '.map-canvas' });
window.onresize = () => animateHeader(50, 992, { desktop: null, mobile: '.map-canvas' });

if (typeof rates !== 'undefined') {
    onCurrencyChange(rates);
    currencyCalculator(rates);
}


slider('.swiper-auto-slide',  { loop: false, slidesPerView: 'auto' });
slider('#js-main-slider',  { loop: false, autoHeight: true, autoplay: false });

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
    creditCalculator('#js-range-slider-'+ i +'2', '#js-range-slider-output-'+ i +'2');
}

cardOrderSlider('#js-range-slider-card-0', '#js-range-slider-card-output-0, .js-slider-card-output-0', '.js-slider-card-output-price-0', '.js-slider-card-text-output-0');

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

selectBox('#js-selectric-card-years, .js-selectric-card-years', {
    onChangeMobile: element => {
        $(element).on('change', e => {
            const cardId = e.target.dataset.id;
            const price = e.target.querySelector('option:checked').dataset.price;
            $(`#js-card-year-price${cardId ? `-${cardId}` : ''}`).text(price);
            correctGrammarOfCard(`#yearly_text${cardId ? `-${cardId}` : ''}`, e.target);
        });
    },
   onChange: element => {
        const cardId = element.dataset.id;
        const price = element.querySelector('option:checked').dataset.price;
        $(`#js-card-year-price${cardId ? `-${cardId}` : ''}`).text(price);
        correctGrammarOfCard(`#yearly_text${cardId ? `-${cardId}` : ''}`, element);
   },
});

selectBox('#js-selectric-map', {
    onChange: element => {
        const regionAnchor = element.querySelector('option:checked').value;

        $('#js-scroll-map').animate({
            scrollTop: document.querySelector(regionAnchor).offsetTop - 316
        }, 'slow');
    },
    onChangeMobile: element => {
        $(element).on('change', e => {
            const regionAnchor = e.target.querySelector('option:checked').value;

            $('html, body').animate({
                scrollTop: document.querySelector(regionAnchor).offsetTop
            }, 'slow');
        });
    },
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


// const cashFilter = brandFilter('.filter-container');
// $('.js-ajax').on('click', e => {
//     const id = e.target.getAttribute('id');
//     makeAJAX({
//         url: e.target.dataset.url,
//         data: JSON.parse(e.target.dataset.data),
//         success: result => {
//             if(id === 'js-ajax-campaign') {
//                 $('.hover-border-lg-e4e4e4').parent().append(result);
//             }
//
//             if(id === 'js-ajax-qaygicash') {
//                 cashFilter.destroy();
//                 const lastItem = $('.filtr-item').last();
//                 const scrollHeight = lastItem[0].scrollHeight;
//                 lastItem.after(result);
//                 brandFilter('.filter-container');
//                 lastItem[0].scrollTop = scrollHeight;
//             }
//         },
//         error: result => console.log(JSON.parse(result))
//     })
// });

backdropFix();
if(isiOS()) { document.querySelector('body').classList.add('ios') }
searchBar();

phoneNumberMask('.js-mob-number');
creditCardMask('.js-credit-card');
dateMask('.js-date-mask');

/* Internship page Delete this js snippet when internship is passive */

$('#signUpButton').on('click', function (e) {
    $('#faqButton').parent().removeClass('d-none');
    $(this).parent().addClass('d-none');

    $('#faq').fadeOut(200, function () {
        $('#signUp').removeClass('d-none');
        $('#signUp').fadeIn(200);
    });
});

$('#faqButton').on('click', function (e) {
    $('#signUpButton').parent().removeClass('d-none');
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

/* End of Internship page Delete this js snippet when internship is passive */

var princ = 5000; // mebleg
var term = 6; // muddet
var intr = 22 / 1200; // faiz
var result = princ * intr / (1 - (Math.pow(1/(1 + intr), term)));

$('#azercell_check').on('submit', function (e) {
    e.preventDefault();

    makeAJAX({
        url: this.action,
        method: this.method,
        data: $( this ).serialize(),
        success: result => {
            var scope = angular.element(document.getElementById('azercell_form')).scope();
            if(parseInt(result.code) === 0){
                phone_number = $( '#confirmed_phone_num' ).val();
                $('#phone_num').val(phone_number);
                $('#phone_num').attr('readonly',true);
                $('#azercell_check').slideUp();
                $('#first_step_form').slideDown();
                scope.falseNumber = false;
            }else{
                scope.falseNumber = true;
            }
            scope.$apply();
        },
        error: result => console.log(JSON.parse(result))
    })
})

magnifier('.js-image-magnify', 992);

window.parent_category_id = "";
window.search_key = "";

$('#qaygicash_search').on('keyup', function (){
    window.search_key =  $(this).val();
    refreshPartners(window.parent_category_id, window.search_key)
})

$('.category_button').on('click', function (e){
    e.preventDefault();

    $('.category_button, #filterAll').removeClass('color-1885d3');
    $(this).addClass('color-1885d3');

    window.parent_category_id = this.getAttribute("data-id");
    refreshPartners(window.parent_category_id, window.search_key)
})

$('#js-ajax-qaygicash').on('click',function (e){
    e.preventDefault();
    var url = e.target.dataset.url;
    refreshPartners(window.parent_category_id, window.search_key,url)
})

selectBox('#delivery_type', {
    onChange: element => {
        $('#first_step_form').slideDown();
        var delivery_type = element.querySelector('option:checked').value;
        if(delivery_type === 'to_address'){
            $('#delivery_address').slideDown();
            $('#delivery_address_text').prop('required',true);

            selectBox('#selected_branch').val(780).change()
            selectBox('#selected_branch').attr("disabled", "disabled").selectric('refresh');
        }else{
            $('#delivery_address_text').removeAttr('required');
            selectBox('#selected_branch').removeAttr("disabled").selectric('refresh');
            selectBox('#selected_branch').val(0).selectric('refresh');


            // $('#selected_branch').val(780)
            $('#delivery_address').slideUp();
        }
    },
    onChangeMobile: element => {
        $(element).on('change', e => {
            $('#first_step_form').slideDown();
            var delivery_type = e.target.querySelector('option:checked').value;
            if(delivery_type === 'to_address'){
                $('#delivery_address').slideDown();
                $('#delivery_address_text').prop('required',true);

                selectBox('#selected_branch').val(780).change()
                selectBox('#selected_branch').attr("disabled", "disabled").selectric('refresh');
            }else{
                $('#delivery_address_text').removeAttr('required');
                selectBox('#selected_branch').removeAttr("disabled").selectric('refresh');
                selectBox('#selected_branch').val(0).selectric('refresh');


                // $('#selected_branch').val(780)
                $('#delivery_address').slideUp();
            }
        });
    },
});

$(function(){
    $('.survey-submit-btn').click(function(){
        let checkboxerrors= false;
      $('.checkboxerror').remove();

      if (!$('input#termsCheck').is(':checked')) {
        checkboxerrors=true;
    }
      if(checkboxerrors == false){
        return true;

      }else{
        return  $('.form-check-label').after('<br><span class="checkboxerror" style="margin-left:24px">Qaydalarla tanış olduğunuzu təsdiqləyin</span>');
    }})
})

$('#termsCheck').click(function(){
    if($(this).prop('checked') == true){
        $('.survey-submit-btn').prop('disabled', false);
    }else{
        $('.survey-submit-btn').prop('disabled', true);
    }
});

otpHandler('.js-otp', "#js-otp-desk", '#js-otp-mob', '#js-otp-timer', '#js-otp-submit', '.js-otp-resend-container', '.js-otp-resend', '.js-otp-resend-loading', '.js-otp-resend-sent', ".js-otp-resend-error", ".js-otp-form", ".js-otp-code-error", ".js-otp-success");

qaygiCashModal('.js-qaygicash-item');
closeModals('js-modal-close','modal-container');
openModal ('.js-modal-opener');

applicationRadioHandler(".js-radio-application-for");
applicationRadioHandler(".js-radio-application-account");
applicationRadioHandler(".js-radio-application-info");

reportsHandler(".js-reports-button");
