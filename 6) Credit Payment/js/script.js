$("#phoneNumber").inputmask({
    "mask": "(999) 999 99 99",
    showMaskOnHover: false,
});

function clearErrors() {
    $(this).removeClass("content-form-input-error");
    $(this).parent().children(".content-form-input-error-text").remove();
}

$(".content-form-input").focus(clearErrors)

let validationPassed = true;

function required(event) {
    $(this).val($(this).val().trim())
    if ($(this).val().length < 3) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Bu field doldurulmalıdır</span>")
        validationPassed = false;
    }
}

function validatePhoneNumber(event) {
    if (!$(this).inputmask("isComplete")){
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Bu field doldurulmalıdır</span>")
        validationPassed = false;
    }
}

function validateMail (event) {
    $(this).val($(this).val().trim())
    if ($(this).val().length !== 0 && !isEmail($(this).val())) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Mailı düzgün formada daxil edin</span>")
        validationPassed = false;
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validatePrice(event) {
    $(this).val($(this).val().trim())
    if ($(this).val().length === 0) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Bu field doldurulmalıdır</span>")
        validationPassed = false;
    }
    else if (Number.isNaN(parseFloat($(this).val()))) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Məbləği düzgün şəkildə daxil edin.</span>")
        validationPassed = false;
    }
    else {
        $(this).val(parseFloat($(this).val()));
    }
}


$("#name").focusout(required);

$("#contractId").focusout(required);

$("#phoneNumber").focusout(validatePhoneNumber)

$("#mail").focusout(validateMail)

$("#price").focusout(validatePrice)

$(".content-form-submit").click(function (event) {

    $(".content-form-input").each(clearErrors)

    validationPassed = true

    $("#name").trigger("focusout");

    $("#contractId").trigger("focusout");

    $("#phoneNumber").trigger("focusout");

    $("#mail").trigger("focusout");

    $("#price").trigger("focusout");

    if (validationPassed){
        let overlay = `
    <div class="overlay">
    <div class="overlay-content">
        <div class="overlay-content-info">
            <h3 class="overlay-content-info-header">Ad, Soyad</h3>
            <p class="overlay-content-info-text">${$("#name").val()}</p>
        </div>
        <div class="overlay-content-info">
            <h3 class="overlay-content-info-header">Müqavilə nömrəsi</h3>
            <p class="overlay-content-info-text">${$("#contractId").val()}</p>
        </div>`;
        if($("#mail").val().length>0) {
            overlay+= `
        <div class="overlay-content-info">
            <h3 class="overlay-content-info-header">E-poçt</h3>
            <p class="overlay-content-info-text">${$("#mail").val()}</p>
        </div> `;
        }
        overlay += `
        <p class="overlay-content-price">${$("#price").val()} AZN</p>
        <button class="overlay-content-submit">TƏSDİQ ET</button>
    </div>
    <button class="overlay-close"><img src="img/close.png" alt="" class="overlay-close-img"></button>
</div>
`
        $("script:first-of-type").before(overlay);
        $(".overlay-close").click(function (event) {
            $(".overlay").remove();
        })

        $(".overlay-content-submit").click(function () {
            $(".content-form").trigger("submit");
        })
    }
})