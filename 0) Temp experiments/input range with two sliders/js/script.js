function getValsOfInputPrice() {
    // Get slider values

    // var parent = this.parentNode;

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

// Initialize Sliders
const sliders = document.querySelectorAll(".c-filters-price > input");
sliders.forEach(slider => {
    if (slider.type === "range") {
        slider.oninput = getValsOfInputPrice;
        // Manually trigger event first time to display values
        slider.oninput();
    }
});

const sliderInputs = document.querySelectorAll(".c-filters-prices-text");
sliderInputs[0].addEventListener('change', function(){
    this.max = sliderInputs[1].value;
    // console.log(this.value, sliderInputs[1].value);
    if(parseFloat(this.value) > parseFloat(sliderInputs[1].value)){
        // console.log("fucking here");
        this.value = sliderInputs[1].value;
    }
    let littleSlider = parseFloat(sliders[0].value) >= parseFloat(sliders[1].value) ? sliders[1] : sliders[0];
    // console.log(littleSlider);
    littleSlider.value = this.value;
});
sliderInputs[1].addEventListener('change',  function () {
    this.min = sliderInputs[0].value;
    if(parseFloat(this.value) < parseFloat(sliderInputs[0].value)){
        this.value = sliderInputs[0].value;
    }
    let bigSlider = parseFloat(sliders[0].value) >= parseFloat(sliders[1].value) ? sliders[0] : sliders[1];
    bigSlider.value = this.value;
});