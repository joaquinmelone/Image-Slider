// CYCLE IMAGES

const backwardArrow = document.querySelector(".backward-arrow");
const forwardArrow = document.querySelector(".forward-arrow");

backwardArrow.addEventListener("click", () => {

})

forwardArrow.addEventListener("click", () => {

})


// SELECT BUTTON

const selectButtons = document.querySelectorAll("select-button");

selectButtons.forEach(button => {
    button.addEventListener("click", e => {
        console.log(e.target);
    })
})