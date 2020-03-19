const languageBtn = document.querySelector(".nav-lang");
const languageSelector = document.querySelector(".nav-lang-list");

languageBtn.addEventListener("click", (event) => {
    languageSelector.classList.toggle("nav-lang-list__active");
    event.stopPropagation();
});


const userButton = document.querySelector("#userButton");
const userDropdown = document.querySelector(".header-user-dropdown");

userButton.addEventListener("click", (event) => {
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

$(document).ready(function () {
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
    if (languageSelector.classList.contains("nav-lang-list__active")) {
        languageSelector.classList.remove("nav-lang-list__active");
    }
    if (userDropdown.classList.contains('header-user-dropdown__active')) {
        userDropdown.classList.remove("header-user-dropdown__active");
    }
    if (burgerDropdown.classList.contains("header-burger-dropdown__active")) {
        burgerDropdown.classList.remove("header-burger-dropdown__active");
        document.querySelector(".header-bgc").classList.remove("header__active");
    }
});

// *************** End of General Part***************

// *************** Help Center and Contact us ***************

if (document.querySelector(".hc-faq")) {

    const faqItems = document.querySelectorAll(".hc-faq-content-item");
    faqItems.forEach(item => {
        item.addEventListener('click', event => {
            faqItems.forEach(question => {
                if (question !== event.currentTarget) {
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
        if (event.target.classList.contains('hc-faq-content-selector-list-item-btn')) {
            clearActiveFromSelector();
            event.target.classList.add('hc-faq-content-selector-list-item-btn__active');
            filterFAQ(event.target.dataset.category);
        } else if (event.target.parentElement.classList.contains('hc-faq-content-selector-list-item-btn')) {
            clearActiveFromSelector();
            event.target.parentElement.classList.add('hc-faq-content-selector-list-item-btn__active');
            filterFAQ(event.target.parentElement.dataset.category);
        }
    });
}

// *************** End of Help Center and Contact us ***************

// *************** Category page ***************

if (document.querySelector('.c')) {
    function getValsOfInputPrice() {
        const slides = document.querySelectorAll(".c-filters-price > input");
        let slide1 = parseFloat(slides[0].value);
        let slide2 = parseFloat(slides[1].value);
        // Neither slider will clip the other, so make sure we determine which is larger
        if (slide1 > slide2) {
            let tmp = slide2;
            slide2 = slide1;
            slide1 = tmp;
        }

        var displayElement = document.querySelectorAll(".c-filters-prices-text");
        displayElement[0].value = slide1;
        displayElement[1].value = slide2;
    }

    const sliders = document.querySelectorAll(".c-filters-price > input");
    sliders.forEach(slider => {
        if (slider.type === "range") {
            slider.oninput = getValsOfInputPrice;
            // Manually trigger event first time to display values
            slider.oninput();
        }
    });

    const sliderInputs = document.querySelectorAll(".c-filters-prices-text");
    sliderInputs[0].addEventListener('change', function () {
        this.max = sliderInputs[1].value;
        // console.log(this.value, sliderInputs[1].value);
        if (parseFloat(this.value) > parseFloat(sliderInputs[1].value)) {
            // console.log("fucking here");
            this.value = sliderInputs[1].value;
        }
        let littleSlider = parseFloat(sliders[0].value) >= parseFloat(sliders[1].value) ? sliders[1] : sliders[0];
        // console.log(littleSlider);
        littleSlider.value = this.value;
    });
    sliderInputs[1].addEventListener('change', function () {
        this.min = sliderInputs[0].value;
        if (parseFloat(this.value) < parseFloat(sliderInputs[0].value)) {
            this.value = sliderInputs[0].value;
        }
        let bigSlider = parseFloat(sliders[0].value) >= parseFloat(sliders[1].value) ? sliders[0] : sliders[1];
        bigSlider.value = this.value;
    });

    // const filters = document.querySelectorAll(".c-filters-item > .c-filters-header");
    const filters = document.querySelectorAll(".c-filters-header");
    filters.forEach( filter => {
        filter.addEventListener("click", (event) => {
            event.currentTarget.nextElementSibling.style.display === "none" ?
                event.currentTarget.nextElementSibling.style.display = "block":
                event.currentTarget.nextElementSibling.style.display = "none";
            event.currentTarget.querySelector(".c-filters-header-icon").classList.toggle("c-filters-header-icon__rotate");
        })
    });

    const viewChangingButtons = document.querySelectorAll(".c-filters-view-list-item-btn");
    viewChangingButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            viewChangingButtons.forEach(viewChangingButton => {
                viewChangingButton.classList.remove("c-filters-view-list-item-btn__active");
            });

            event.currentTarget.classList.add("c-filters-view-list-item-btn__active");
            switch (event.currentTarget.dataset.view) {
                case "card":
                    document.querySelector(".c-products").classList.remove("c-products__list");
                    document.querySelectorAll(".c-products-item").forEach(item => {
                        item.classList.remove("c-products-item__list");
                    });
                    break;
                case "list":
                    document.querySelector(".c-products").classList.add("c-products__list");
                    document.querySelectorAll(".c-products-item").forEach(item => {
                        item.classList.add("c-products-item__list");
                    });
                    break;
                default:
                    console.log("Problem occured");
            }
        })
    });

    window.addEventListener("resize", ev => {
        if (window.innerWidth <= 980){
            document.querySelector(".c-products").classList.remove("c-products__list");
            document.querySelectorAll(".c-products-item").forEach(item => {
                item.classList.remove("c-products-item__list");
            });
            const viewButtons = document.querySelectorAll(".c-filters-view-list-item-btn");
            viewButtons[0].classList.add("c-filters-view-list-item-btn__active");
            viewButtons[1].classList.remove("c-filters-view-list-item-btn__active")
        }
        else {
            document.querySelector(".c-filters").classList.remove("c-filters__active")
        }
    });

    const filterButton = document.querySelector(".c-filters-toggler-btn");
    filterButton.addEventListener("click", event => {
       event.currentTarget.parentElement.classList.toggle("c-filters__active");
        const filterCategories = Array.from(event.currentTarget.parentElement.children);
        filterCategories.forEach(category=>{
            if(!category.classList.contains("c-filters-toggler-btn")){
                category.classList.toggle("c-filters-mobile");
            }
        })
        // document.body.style.overflow === "hidden" ?
       //     document.body.style.overflow = "auto" :
       //     document.body.style.overflow = "hidden";
    });
}
