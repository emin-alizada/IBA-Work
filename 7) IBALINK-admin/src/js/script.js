$('#otpDesc').find('input').each(function () {
    $(this).attr('maxlength', 1);

    $(this).on('keyup', function (e) {
        var parent = $($(this).parent());
        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
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
        if (seconds >= 0) {
            minutesDisplay = parseInt(seconds / 60);
            secondsDisplay = parseInt(seconds % 60);

            $("#otpTimer").text(`${("0" + minutesDisplay).slice(-2)}:${("0" + secondsDisplay).slice(-2)}`);
            seconds--;
        } else {
            clearInterval(this);
            // do the work here (end of timer)
            $("#otpSumbit").attr('disabled', true);
        }
    }
}

if ($("#otpTimer").length) {
    countdown(10, $("#otpTimer"));
}

function openModal(e, modalId) {
    document.body.style.overflow = "hidden";
    const id = modalId || $(this).data("modalId");
    $(`#${id}`).removeClass("d-none");

    $(`#${id}`).on('click', function (event) {
        if (id === event.target.id) {
            closeModal();
        }
    })
}

function closeModal() {
    $(".modal-container").addClass("d-none");
    document.body.style.overflow = "auto";
}

$("#headerDropdownButton").on("click", openModal);
$("#openHistory").on("click", function (e) {
    // request goes here
    let hasItemInHistory = true;

    if (hasItemInHistory) {
        openModal(e, 'historyModalWithContent')
    } else {
        openModal(e, 'historyModalempty')
    }
});
$(".b-content-item").on('click', function (e) {
    $('#bonusModal .error-message-container').addClass('d-none');
    $('#bonusModal #bonusSwapButton').attr('disabled', false);
    openModal(e, 'bonusModal');
})
$("#closeDropdown").on("click", closeModal);

$(".m-lg-modal-content-radios  input").on('click', function (event) {
    $(".m-lg-modal-content-send").children().each(function () {
        if (!(this.id === event.currentTarget.value && !$(this).hasClass('d-none'))) {
            $(this).addClass('d-none');
            if (this.id === event.currentTarget.value) {
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
    } else {
        $('#bonusModal .error-message-container').removeClass('d-none');
        $(this).attr('disabled', true);
    }
})

$('.header-list-item-link').hover(
    function (e) {
        $('.header-list-item-link').each(function (index, link) {
            $(link).addClass('header-list-item-link-hover__passive');
        });
    },
    function (e) {
        $('.header-list-item-link').each(function (index, link) {
            $(link).removeClass('header-list-item-link-hover__passive');
        });
    }
);

// Range Price

const allFilters = [];

let $range = $("#rangeInput");
let $inputFrom = $("#rangeInputFrom");
let $inputTo = $("#rangeInputTo");
let instance;
let min = 0;
let max = 1000;
let from = 0;
let to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    hide_min_max: true,
    hide_from_to: true,
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: function (data) {
        updateInputs(data);
        addPriceRangeToActiveFilters(data.input[0].id, data.from, data.to);
    }
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

function addPriceRangeToActiveFilters(id, from, to) {
    const priceRange = allFilters.find((filter) => filter.id === id);
    priceRange.shouldBeShownInFilters = true;
    priceRange.value = 'Price: ' + from + '-' + to;
    showActiveFilters();
}

$inputFrom.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

    addPriceRangeToActiveFilters('rangeInput', $inputFrom.val(), $inputTo.val());
});

$inputTo.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);

    addPriceRangeToActiveFilters('rangeInput', $inputFrom.val(), $inputTo.val());
});

function resetPriceRange() {
    instance.update({
        from: min,
        to: max,
    });
    $inputFrom.val(min);
    $inputTo.val(max);
}

// End of Range Price

$(document).on('click', function (event) {
    if (!$(event.target).closest('.r-header-filter-form-wrapper').length) {
        $('.r-header-filter-form-wrapper-active').removeClass('r-header-filter-form-wrapper-active');
    }
});

$('.r-header-filter-form-header').on('click', function (event) {
    // first if is to prevent double click on Tarix
    if (!event.target.classList.contains('r-header-filter-form-wrapper-date-input')) {
        if ($(this).parent().hasClass('r-header-filter-form-wrapper-active')) {
            $('.r-header-filter-form-wrapper-active').removeClass('r-header-filter-form-wrapper-active');
        } else {
            $('.r-header-filter-form-wrapper-active').removeClass('r-header-filter-form-wrapper-active');
            $(this).parent().addClass('r-header-filter-form-wrapper-active');
        }
    }
});

$('#openFilters').on('click', function () {
    $('.r-header-main').addClass('d-none');
    $('.r-header-filter-wrapper').removeClass('d-none');
});

$('#closeFilters').on('click', function () {
    $('.r-header-filter-wrapper').addClass('d-none');
    $('.r-header-main').removeClass('d-none');
})

$('#filterForm input[type="checkbox"]').each(function (index, el) {
    let idInitial = 'filterFormCheckbox';
    el.id = idInitial + index;
    allFilters.push({
        id: el.id,
        value: $(el).parent().text().split('\n')[0],
        shouldBeShownInFilters: el.checked,
    })
    $(el).on('change', function (e) {
        allFilters.find((filter) => filter.id === el.id).shouldBeShownInFilters = el.checked;
        showActiveFilters();
    })
});


allFilters.push({
    id: 'rangeInput',
    value: null,
    shouldBeShownInFilters: false,
});

allFilters.push({
    id: 'dateRange',
    value: null,
    shouldBeShownInFilters: false,
})


showActiveFilters();

function showActiveFilters() {
    let shouldActiveFiltersBeShown = allFilters.some(function (filter) {
        return filter.shouldBeShownInFilters;
    });
    if (shouldActiveFiltersBeShown) {
        $('.r-header-filter-actives-list').empty();
        $('.r-header-filter-actives').removeClass('d-none');
        const activeFilters = allFilters.filter(function (filter) {
            return filter.shouldBeShownInFilters;
        });
        activeFilters.forEach(function (activeFilter) {
            $(".r-header-filter-actives-list").append(
                $(`<div class="r-header-filter-actives-list-item">
                    <p class="r-header-filter-actives-list-item-text fw-700 fs-xs">${activeFilter.value}</p> 
                    <button class="r-header-filter-actives-list-item-close" data-filter-id="${activeFilter.id}">
                        <img src="img/filterItemClose.svg" alt="">
                     </button>
            </div>`)
            );
            $('.r-header-filter-actives-list-item-close').on('click', removeCheckboxFilterFromActive)
        });
        $('.r-header-main-controls-filter-text-number').text(`(+${activeFilters.length})`)
        $('#openFilters > .r-header-main-controls-item-icon').attr("src", "img/filter-active.svg");
    } else {
        $('.r-header-filter-actives').addClass('d-none');
        $('.r-header-main-controls-filter-text-number').text(null);
        $('#openFilters > .r-header-main-controls-item-icon').attr("src", "img/filter.svg");
    }
}

$('#dateRangeFrom').inputmask({
    alias: "datetime",
    inputFormat: "dd/mm/yyyy",
    showMaskOnHover: false,
});

$('#dateRangeTo').inputmask({
    alias: "datetime",
    inputFormat: "dd/mm/yyyy",
    showMaskOnHover: false,
});

$('#dataRangeApply').on('click', function () {
    const dateRange = allFilters.find((filter) => filter.id === 'dateRange');
    dateRange.value = $('#dateRangeFrom').val() + '-' + $('#dateRangeTo').val();
    dateRange.shouldBeShownInFilters = true;
    showActiveFilters();
})

function removeCheckboxFilterFromActive(e) {
    const id = this.dataset.filterId;
    if (id.includes('dateRange')) {
        $('#dateRangeFrom').val(null);
        $('#dateRangeTo').val(null);
    } else if (id.includes('filterFormCheckbox')) {
        document.getElementById(id).checked = false;
    } else if (id.includes('rangeInput')) {
        resetPriceRange();
    }
    allFilters.find((filter) => filter.id === id).shouldBeShownInFilters = false;
    $(this).off();
    showActiveFilters();
}

$('#filterFormSubmit').on('click', function () {
    $('#filterForm').submit();
});

$('#filterFormReset').on('click', function () {
    document.getElementById('filterForm').reset();
    allFilters.forEach(function (filter) {
        filter.shouldBeShownInFilters = false;
    });
    resetPriceRange();
    showActiveFilters();
})

const desc = obj.find('#description').text();