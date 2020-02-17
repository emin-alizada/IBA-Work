// const wmtButtons = document.querySelector(".wmt-nav");
//
// wmtButtons.addEventListener("click", (event)=>{
//     event.preventDefault();
//     if(event.target.classList.contains("wmt-nav-item-link")){
//         document.querySelectorAll(".wmt-nav-item").forEach((li)=>{
//             li.classList.remove("button");
//         });
//         event.target.parentElement.classList.add("button");
//         document.querySelectorAll(".wmt-cards-item").forEach((card)=>{
//             if(event.target.dataset.category==="all"){
//                 card.style.display = "block";
//             }
//             else {
//                 event.target.dataset.category === card.dataset.category ?
//                     card.style.display = "block" :
//                     card.style.display = "none";
//             }
//         })
//     }
// });


const wmtButtons = $(".wmt-nav");

wmtButtons.on("click", function (event) {
    event.preventDefault();
    if($(event.target).hasClass("wmt-nav-item-link")){
        $(".wmt-nav-item").each(function (index){
            $( this ).removeClass("button");
        });
        $(event.target.parentElement).addClass("button");
        $(".wmt-cards-item").each(function (){
            if($(event.target).data("category")==="all"){
                $(this).show();
            }
            else {
                $(event.target).data("category") === $(this).data("category") ?
                    $(this).show() :
                    $(this).hide()
            }
        })
    }
});

// wmtButtons.each(function (index) {
//
// });