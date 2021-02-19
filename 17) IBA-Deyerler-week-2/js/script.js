function openModal(e, modalId) {
    document.body.style.overflow = "hidden";
    const id = modalId || $(this).data("modalId");
    $(`#${id}`).fadeIn("fast");

    $(`#${id}`).on('click', function (event) {
        if (id === event.target.id) {
            closeModal();
        }
    })
}

function closeModal() {
    $(".modal-container").fadeOut("fast");
    document.body.style.overflow = "auto";
}

$('.card').on('click', openModal);