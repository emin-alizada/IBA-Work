const languageBtn = document.querySelector(".nav-lang");
const languageSelector = document.querySelector(".nav-lang-list");

languageBtn.addEventListener("click", (event) => {
    languageSelector.classList.toggle("nav-lang-list__active");
    event.stopPropagation();
});


const userButton = document.querySelector("#userButton");
const userDropdown = document.querySelector(".header-user-dropdown");

userButton.addEventListener("click", (event) =>{
    userDropdown.classList.toggle("header-user-dropdown__active");
    event.stopPropagation();
});


const burgerButton = document.querySelector('#burgerButton');
const burgerDropdown = document.querySelector(".header-burger-dropdown");

burgerButton.addEventListener("click", (event) => {
    burgerDropdown.classList.toggle("header-burger-dropdown__active");
    document.querySelector(".header-bgc").classList.toggle("header__active");
    event.stopPropagation();
});

$(document).ready(function() {
    $('.gifts-slider').slick({
        // autoplay: true,
        prevArrow: "<button class=\"gifts-slider-arrow-left\"><i class=\"fas fa-chevron-left\"></i></button>",
        nextArrow: "<button class=\"gifts-slider-arrow-right\"><i class=\"fas fa-chevron-right\"></i></button>",
        dots: true,
        dotsClass: "slick-dots gifts-slider-dots",
    });

    $('.wptw-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button class=\"wptw-slider-arrow wptw-slider-arrow-left\"><i class=\"fas fa-chevron-left\"></i></button>",
        nextArrow: "<button class=\"wptw-slider-arrow wptw-slider-arrow-right\"><i class=\"fas fa-chevron-right\"></i></button>",
        variableWidth: true,
        dotsClass: "slick-dots wptw-slider-dots",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 1165,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 979,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    });
});

document.addEventListener("click", () => {
    if (languageSelector.classList.contains("nav-lang-list__active")){
        languageSelector.classList.remove("nav-lang-list__active");
    }
    if (userDropdown.classList.contains('header-user-dropdown__active')){
        userDropdown.classList.remove("header-user-dropdown__active");
    }
    if (burgerDropdown.classList.contains("header-burger-dropdown__active")){
        burgerDropdown.classList.remove("header-burger-dropdown__active");
        document.querySelector(".header-bgc").classList.remove("header__active");
    }
});

// *************** End of General Part***************

// *************** Help Center and Contact us ***************

if(document.querySelector(".hc-faq")){

    const faqItems = document.querySelectorAll(".hc-faq-content-item");
    faqItems.forEach(item => {
        item.addEventListener('click', event => {
            faqItems.forEach( question => {
               if(question !== event.currentTarget) {
                   question.classList.remove('hc-faq-content-item__active');
               }
            });
            item.classList.toggle('hc-faq-content-item__active');
        });
    });


    function clearActiveFromSelector() {
        document.querySelectorAll('.hc-faq-content-selector-list-item-btn').forEach(btn => {
            btn.classList.remove("hc-faq-content-selector-list-item-btn__active");
        })
    }

    function filterFAQ(filter) {
        document.querySelectorAll('.hc-faq-content-item').forEach(content => {
            content.dataset.category === filter ?
                content.style.display = 'block' :
                content.style.display = 'none';

        })
    }

    filterFAQ('general');

    const faqSelector = document.querySelector(".hc-faq-content-selector");
    faqSelector.addEventListener('click', event => {
        if (event.target.classList.contains('hc-faq-content-selector-list-item-btn')){
            clearActiveFromSelector();
            event.target.classList.add('hc-faq-content-selector-list-item-btn__active');
            filterFAQ(event.target.dataset.category);
        }
        else if (event.target.parentElement.classList.contains('hc-faq-content-selector-list-item-btn')){
            clearActiveFromSelector();
            event.target.parentElement.classList.add('hc-faq-content-selector-list-item-btn__active');
            filterFAQ(event.target.parentElement.dataset.category);
        }
    });
}
