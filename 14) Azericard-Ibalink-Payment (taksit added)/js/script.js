let errors = false;

function buttonClickAddListener() {
    $('button').click(function () {
            $('button').removeClass('active');
            $('button').removeClass('passive');
            $('button').removeClass('error');
            $(this).addClass('active');
            $('button').not(this).addClass('passive');
            switch (this.id) {
                case "mastercard":
                    $("#cardType").val(1);
                    break;
                case "visa":
                    $("#cardType").val(2);
                    break;
                case "other-card":
                    $("#cardType").val(3);
                    break;
            }
            if (this.dataset.taksit) {
                $("#taksit-term").val(this.dataset.taksit);
                OnChangeInstallment(this.dataset.taksit);
            }
            $("#cardTypeButtons").next('span').remove();
            $("#taksitPeriod").next('span').remove();
        }
    );
}

buttonClickAddListener();

$('#card-number').mask('0000 0000 0000 0000');
$('#cvc-cvv').mask('000');
$('#expiry-date').mask('00/00');

function clearErors() {
    $(this).next('span').remove();
    $(this).removeClass('error');
}

$(".form-input").focus(clearErors);

function validateCardNumber() {
    let cardNumberRegEx = /^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/;
    let cardNumber = $('#card-number');
    if (cardNumber.val() === "" || !cardNumberRegEx.test(cardNumber.val())) {
        cardNumber.addClass('error');
        cardNumber.after('<span class="errors">Bu field doldurulmalıdır</span>');
        errors = true;
    }
}

function validateExpiryDate() {
    let expiryDateRegEx = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
    let expiryDate = $('#expiry-date');
    if (expiryDate.val() === "" || !expiryDateRegEx.test(expiryDate.val())) {
        expiryDate.addClass('error');
        expiryDate.after('<span class="errors">Bu field doldurulmalıdır</span>');
        errors = true;
    } else {
        const $month = $("#expiry-month");
        const $year = $("#expiry-year");
        $month.val(expiryDate.val().split('/')[0]);
        $year.val(expiryDate.val().split('/')[1]);
    }
}

function validateCvv() {
    let cvvRegEx = /^([0-9]{3,3})$/;
    let cvv = $('#cvc-cvv');
    if (cvv.val() === "" || !cvvRegEx.test(cvv.val())) {
        cvv.addClass('error');
        cvv.after('<span class="errors">Bu field doldurulmalıdır</span>');
        errors = true;
    }
}

function validateCardType() {
    let cardType = $("#cardType");
    if ( cardType.val() !== "1" && cardType.val() !== "2" && cardType.val() !== "3") {
        $("#cardTypeButtons").after('<span class="errors">Bu field doldurulmalıdır</span>');
        errors = true;
    }
}
function validateTaksit() {
    let taksitPeriod = $("#taksit-term");
    if ( !taksitPeriod.val() ) {
        $(".taksit-button").addClass("error");
        $("#taksitPeriod").after('<span class="errors">Bu field doldurulmalıdır</span>');
        errors = true;
    }
}


$('#card-number').focusout(validateCardNumber);
$('#expiry-date').focusout(validateExpiryDate);
$('#cvc-cvv').focusout(validateCvv);

$('#submitBtn').click(function () {
    errors=false;
    $('.errors').remove();
    validateCardNumber();
    validateExpiryDate();
    validateCvv();
    validateCardType();
    if (errors === false) {
        // alert("your data has successfully been  inserted");
    } else {
        return false;
    }
});


$('#pay-w-t').click(function () {
    errors=false;
    $('.errors').remove();

    validateTaksit();
    if (errors === false) {
        clickPayHandler()
        // console.log("your data has successfully been  inserted");
    } else {
        return false;
    }
});

function openMenu() {
    document.getElementById('menu').style.display = "block";
    document.body.style.overflow = "hidden";
    $(".overlay-content").animate({height: "80vh"});
}

function closeMenu() {

    $(".overlay-content").animate({height: "0"}, function () {
        document.getElementById('menu').style.display = "none";
        document.body.style.overflow = "auto";
    });
}

// function removeToolTip() {
//     $(".tooltiptext").style.visibility = "hidden";
//     $(".tooltiptext").style.opacity = "0";
// }


$("#menu").on("click", function (event) {
    if (event.target === this) {
        closeMenu();
    }
});

$('#direct-p').on('click', function (e) {
    e.preventDefault();
    $("#taksit-term").remove();
    clickCancelHandler()
    $("#cform").submit();
})
