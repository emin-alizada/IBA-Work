$("#phoneNumber").inputmask({
    "mask": "(999) 999 99 99",
    showMaskOnHover: false,
});

$(".content-form-input").focus(function (event) {
    $(this).removeClass("content-form-input-error");
    $(this).parent().children(".content-form-input-error-text").remove();
})


function required(event) {
    $(this).val($(this).val().trim())
    if ($(this).val().length < 3) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Bu field doldurulmalıdır</span>")
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


$("#name").focusout(required);

$("#contractId").focusout(required);

$("#phoneNumber").focusout(function (event) {
    if (!$(this).inputmask("isComplete")){
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Bu field doldurulmalıdır</span>")
    }
})

$("#mail").focusout(function (event) {
    $(this).val($(this).val().trim())
    if ($(this).val().length !== 0 && !isEmail($(this).val())) {
        $(this).addClass("content-form-input-error");
        $(this).parent().append("<span class='content-form-input-error-text'>Mailı düzgün formada daxil edin</span>")
    }
})

$()