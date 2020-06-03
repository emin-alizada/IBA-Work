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
    const id = modalId || $(this).data("modalId");
    $(`#${id}`).removeClass("d-none");

    $(`#${id}`).on('click', function (event) {
        if (id === event.target.id){
            closeModal();
        }
    })

    // $(".modal-container").css('display', 'block');
    document.body.style.overflow = "hidden";
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
$("#closeDropdown").on("click", closeModal)

$(".m-lg-modal-content-radios  input").on('click', function (event) {
    $(".m-lg-modal-content-send").children().each(function () {
        if (!(this.id === event.currentTarget.value && !$(this).hasClass('d-none'))){
            $(this).addClass('d-none');
            if (this.id === event.currentTarget.value){
                $(this).removeClass('d-none');
            }
        }
        else {
            console.log('active')
        }
    })
})