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
    filters.forEach(filter => {
        filter.addEventListener("click", (event) => {
            event.currentTarget.nextElementSibling.style.display === "none" ?
                event.currentTarget.nextElementSibling.style.display = "block" :
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
        if (window.innerWidth <= 980) {
            document.querySelector(".c-products").classList.remove("c-products__list");
            document.querySelectorAll(".c-products-item").forEach(item => {
                item.classList.remove("c-products-item__list");
            });
            const viewButtons = document.querySelectorAll(".c-filters-view-list-item-btn");
            viewButtons[0].classList.add("c-filters-view-list-item-btn__active");
            viewButtons[1].classList.remove("c-filters-view-list-item-btn__active")
        } else {
            document.querySelector(".c-filters").classList.remove("c-filters__active")
        }
    });

    const filterButton = document.querySelector(".c-filters-toggler-btn");
    filterButton.addEventListener("click", event => {
        event.currentTarget.parentElement.classList.toggle("c-filters__active");
        const filterCategories = Array.from(event.currentTarget.parentElement.children);
        filterCategories.forEach(category => {
            if (!category.classList.contains("c-filters-toggler-btn")) {
                category.classList.toggle("c-filters-mobile");
            }
        })
        // document.body.style.overflow === "hidden" ?
        //     document.body.style.overflow = "auto" :
        //     document.body.style.overflow = "hidden";
    });
}

// *************** End of Category page ***************

// *************** Partnership Page ***************

if (document.querySelector('.partner-form')) {
    const form = document.querySelector('.partner-form');

    // Partnership hissəsindəki formanın backendinin yazılması.
    //     Həm front, həm backend tərəfdə validationların yazılması. Forma ajax-la submit olunmalı, aşağıda nəticəyə uyğun olaraq error və ya success message göstərilməlidir.
    // * Qoyulanlar mütləq doldurulmalıdır.
    //
    // 1. * Email - DB-də unique olmalıdır, eyni emaillə ikinci dəfə müraciət keçməməlidir.
    // 2. * Fullname - minimum 3 simvol
    // 3. * Mobile number
    // 4. * Company name - minimum 3 simvol
    // 5. Message

    //Adding standard Warning Messages
    function validationMessage(msg, inputElement) {
        const warning = document.createElement("p");
        warning.classList.add("partner-form-warning");
        warning.innerText = msg;
        inputElement.before(warning);
    }

    //Clearing all warning messages
    function clearValidationMessages() {
        document.querySelectorAll(".partner-form-warning").forEach(message => {
            message.remove();
        })
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let mail = form.elements["mail"].value.trim();
        let firstName = form.elements["name"].value.trim();
        let mobileNumber = form.elements["phone"].value.trim();
        let companyName = form.elements["company"].value.trim();
        let message = form.elements["message"].value.trim();
        let validationError = false;

        //clearing all warning messages each time user clicks on sumbit button
        clearValidationMessages();

        //Validation

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            validationMessage("Please enter valid email address", form.querySelector("#partnerMail"));
            validationError = true;
        }
        if (!/^[a-zA-Z ]*$/.test(firstName) || firstName.length < 3) {
            validationMessage("Please enter valid name in English", form.querySelector("#partnerName"));
            validationError = true;
        }
        if (!/^(\+)([1-9]{3})(\d{9})$/g.test(mobileNumber)) {
            validationMessage("Please enter valid phone number", form.querySelector("#partnerPhone"));
            validationError = true;
        }
        if (companyName.length < 3) {
            validationMessage("Please enter your company namy(min 3 symbols)", form.querySelector("#partnerCompany"));
            validationError = true;
        }

        //To show all Validation Problems
        if (validationError) {
            return false;
        }

        // Removing Result text
        if (document.querySelector(".partner-form-result")) {
            document.querySelector(".partner-form-result").remove();
        }

        //Ajax loading
        const ajaxLoader = "<div id='partnerLoading' class=\"partner-form-loading-container\">\n" +
            "    <div class=\"partner-form-loading\">\n" +
            "        <div></div>\n" +
            "    </div>\n" +
            "</div>\n";


        const singleMessage = {
            mail: mail,
            firstName: firstName,
            mobileNumber: mobileNumber,
            companyName: companyName,
            message: message,
        };

        const replyToUser = document.createElement("p");
        replyToUser.classList.add("partner-form-result");

        form.innerHTML += ajaxLoader;
        //showing the place where the result will be
        document.querySelector(".partner-form-loading-container").scrollIntoView(false);
        //disabling submit button, in order not to let user click submit button several times
        form.querySelector("input[type=submit]").disabled = true;

        // imitating server result waiting
        // setTimeout(() =>{
        //     postData();
        // },3000 );
        // async function postData() {
        //     const response = await fetch("backend/addPartneship.php", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(singleMessage)
        //     })
        //         .then((response) => {
        //             if (response.ok && response.status === 200){
        //                 return response.json();
        //             }
        //             else {
        //                 replyToUser.innerText = "Server Problem Occured";
        //                 form.append(replyToUser);
        //                 throw new Error("Server problem")
        //             }
        //         })
        //         .then((data) => {
        //             if (data.toString() === "success"){
        //                 replyToUser.innerText = "You have successfully submitted your Partnership proposal";
        //                 replyToUser.style.color = "#00b33c";
        //                 form.append(replyToUser);
        //             }
        //             else {
        //                 if (data.includes("Duplicate entry")){
        //                     replyToUser.innerText = "You have already submitted your partnership request, we will reply you soon!";
        //                     form.append(replyToUser);
        //                     throw new Error("Duplicated data")
        //                 }
        //                 else if (data.toString() === "Error Occurred, please try again"){
        //                     replyToUser.innerText = "An Error occurred please try again";
        //                     form.append(replyToUser);
        //                     throw new Error("backend error")
        //                 }
        //                 else if (data.toString() === "Validation Problem"){
        //                     replyToUser.innerText = "Your information is invalid!";
        //                     replyToUser.style.color = "#D90529";
        //                     form.append(replyToUser);
        //                     throw new Error("backend validation throw an error");
        //                 }
        //                 else {
        //                     replyToUser.innerText = "Unknown error occured, please try again later";
        //                     replyToUser.style.color = "#D90529";
        //                     form.append(replyToUser);
        //                     throw new Error("unknown error");
        //                 }
        //             }
        //         })
        //         .catch( (err) => {
        //            console.error(err);
        //         });
        //     //removing ajax loading
        //     document.querySelector(".partner-form-loading-container").remove();
        //     //enabling submit button
        //     form.querySelector("input[type=submit]").disabled = false;
        // }

        // ajax method
        setTimeout(() => {
            $.ajax({
                url: "backend/addPartneship.php",
                type: "POST",
                data: singleMessage,
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                        if (data.toString() === "success") {
                            replyToUser.innerText = "You have successfully submitted your Partnership proposal";
                            replyToUser.style.color = "#00b33c";
                            form.append(replyToUser);
                        } else {
                            if (data.includes("Duplicate entry")) {
                                replyToUser.innerText = "You have already submitted your partnership request, we will reply you soon!";
                                form.append(replyToUser);
                                throw new Error("Duplicated data")
                            } else if (data.toString() === "Error Occurred, please try again") {
                                replyToUser.innerText = "An Error occurred please try again";
                                form.append(replyToUser);
                                throw new Error("backend error")
                            } else if (data.toString() === "Validation Problem") {
                                replyToUser.innerText = "Your information is invalid!";
                                replyToUser.style.color = "#D90529";
                                form.append(replyToUser);
                                throw new Error("backend validation throw an error");
                            } else {
                                replyToUser.innerText = "Unknown error occured, please try again later";
                                replyToUser.style.color = "#D90529";
                                form.append(replyToUser);
                                throw new Error("unknown error");
                            }
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                },
                error: function () {
                    replyToUser.innerText = "Server Problem Occured";
                    form.append(replyToUser);
                    throw new Error("Server problem")
                }
            });

            //removing ajax loading
            document.querySelector(".partner-form-loading-container").remove();
            //enabling submit button
            form.querySelector("input[type=submit]").disabled = false;

        }, 500);
    })
}
