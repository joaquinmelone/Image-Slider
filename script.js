// CYCLE IMAGES

const backwardArrow = document.querySelector(".backward-arrow");
const forwardArrow = document.querySelector(".forward-arrow");

backwardArrow.addEventListener("click", () => {

    //If the current image is the first one, go back to the last one
    if (document.querySelector(".first.visible")) {
        const currentPicture = document.querySelector(".first.visible");
        currentPicture.classList.toggle("visible");

        const previousPicture = document.querySelector(".last");
        previousPicture.classList.toggle("visible");
    }

    else {
        const currentPicture = document.querySelector(".visible");

        //If Element isn't in "previousElementSibling" it doesn't work
        const previousPicture = currentPicture.previousElementSibling;
        
        currentPicture.classList.toggle("visible");
        previousPicture.classList.toggle("visible");        
    }
})

forwardArrow.addEventListener("click", () => {

    //If the current image is the last one, go back to the first one
    if (document.querySelector(".last.visible")) {
        const currentPicture = document.querySelector(".last.visible");
        currentPicture.classList.toggle("visible");

        const previousPicture = document.querySelector(".first");
        previousPicture.classList.toggle("visible");
    }

    else {
        const currentPicture = document.querySelector(".visible");
        const nextPicture = document.querySelector(".visible+div");
    
        currentPicture.classList.toggle("visible");
        nextPicture.classList.toggle("visible");
    }
})


// SELECT BUTTON

const selectButtons = document.querySelectorAll(".select-button");

selectButtons.forEach(button => {
    button.addEventListener("click", e => {

        //Change the color to display the last button you clicked
        const clickedButton = e.target;
        const currentButton = document.querySelector(".current");

        if (clickedButton === currentButton) {
            //Acá tendría que resetear el timer para que no pase de imagen
        }

        else if (clickedButton !== currentButton) {
            clickedButton.classList.toggle("current");
            currentButton.classList.toggle("current");
        }
    })
})