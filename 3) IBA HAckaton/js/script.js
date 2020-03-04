const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    // event.preventDefault();
    if (!event.target.classList.contains("buttons-item-button-active")) {
        console.log(event.target);
        document.querySelectorAll(".buttons-item-button").forEach((button) => {
            button.classList.remove("buttons-item-button-active");
        });
        event.target.classList.add("buttons-item-button-active");
        document.querySelectorAll(".content-second>div").forEach((div) => {
            event.target.dataset.category === div.dataset.category ?
                div.style.display = "block" :
                div.style.display = "none";
        })
    }
});
