$('#otpDesc').find('input').each(function() {
    $(this).attr('maxlength', 1);

    $(this).on('keyup', function(e) {
        var parent = $($(this).parent());
        if(e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if(prev.length) {
                $(prev).select();
            }
        } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if(next.length) {
                $(next).select();
            } else {
                if(parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});

function countdown(seconds, element) {
    let minutesDisplay, secondsDisplay;
    setInterval(calculate, 1000);

    function calculate() {
        if ( seconds >= 0 ) {
            minutesDisplay = parseInt(seconds / 60);
            secondsDisplay = parseInt(seconds % 60);

            $("#otpTimer").text(`${("0" + minutesDisplay).slice(-2)}:${("0" + secondsDisplay).slice(-2)}`);
            seconds--;
        } else {
            clearInterval(this);
            // do the work here (end of timer)
        }
    }
}

if ($("#otpTimer")){
    countdown(120, $("#otpTimer"));
}

function openModal(e, modalId) {
    document.body.style.overflow = "hidden";
    const id = modalId || $(this).data("modalId");
    $(`#${id}`).removeClass("d-none");

    $(`#${id}`).on('click', function (event) {
        if (id === event.target.id){
            closeModal();
        }
    })

    // $(".modal-container").css('display', 'block');
    // $(".modal-container").animate({height: "100vh"});
}

function closeModal() {
    // $(".modal-container").animate({height: "0"}, function () {
    //     $(".modal-container").addClass("d-none");
    //     document.body.style.overflow = "auto";
    // });
    $(".modal-container").addClass("d-none");
    document.body.style.overflow = "auto";
}

$("#headerDropdownButton").on("click", openModal);
$("#openHistory").on("click", function(e) {
    // request goes here
    let hasItemInHistory = true;

    if (hasItemInHistory){
        openModal(e, 'historyModalWithContent')
    }
    else {
        openModal(e, 'historyModalempty')
    }
});
$(".b-content-item").on('click', function (e) {
    openModal(e, 'bonusModal');
})
$("#closeDropdown").on("click", closeModal);

$(".m-lg-modal-content-radios  input").on('click', function (event) {
    $(".m-lg-modal-content-send").children().each(function () {
        if (!(this.id === event.currentTarget.value && !$(this).hasClass('d-none'))){
            $(this).addClass('d-none');
            if (this.id === event.currentTarget.value){
                $(this).removeClass('d-none');
            }
        }
    })
})

$('#lgCopyButton').on('click', function () {

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    copyToClipboard($('#lgLink').text());

    const successSpan = $(this).find('.m-lg-modal-content-link-copy-success');

    successSpan.css("display", "flex")
        .hide()
        .fadeIn(600);
    setTimeout(function () {
        successSpan.fadeOut(600)
    }, 1000)
})

$('#bonusSwapButton').on('click', function (e) {
    let isEnoughBalance = true;

    if (isEnoughBalance) {
        closeModal();
        openModal(e, 'bonusModalSuccess');
    }
})