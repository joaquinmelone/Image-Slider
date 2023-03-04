// CYCLE PICTURES WITH A INTERVAL

function cyclePictures() {
    const currentPicture = document.querySelector(".visible");

    if (currentPicture === document.querySelector(".pfirst")) {
        displayPicture(".p2");
        changeColorBubble(".b2");
    }

    else if (currentPicture === document.querySelector(".p2")) {
        displayPicture(".p3");
        changeColorBubble(".b3");
    }

    else if (currentPicture === document.querySelector(".p3")) {
        displayPicture(".p4");
        changeColorBubble(".b4");
    }

    else if (currentPicture === document.querySelector(".p4")) {
        displayPicture(".plast");

        const currentBubble = document.querySelector(".blast");
        const previousBubble = document.querySelector(".current");
    
        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");
    }

    else if (currentPicture === document.querySelector(".plast")) {
        displayPicture(".pfirst");

        const currentBubble = document.querySelector(".bfirst");
        const previousBubble = document.querySelector(".current");
    
        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");
    }
}

// INTERVALS

const initialInterval = setInterval(cyclePictures, 5000);

// We declare the new interval here so the don't stack each time we press a button
let newInterval;

function resetInterval() {
    if (initialInterval) {
        clearInterval(initialInterval);
    }

    //If a newInterval instance exists before pressing a button we clear it
    clearInterval(newInterval);

    newInterval = setInterval(cyclePictures, 5000); 
}


// BACKWARD AND FORWARD BUTTON

const backwardArrow = document.querySelector(".backward-arrow");
const forwardArrow = document.querySelector(".forward-arrow");

backwardArrow.addEventListener("click", () => {

    //If the current image is the first one, go back to the last one
    if (document.querySelector(".pfirst.visible")) {
        const currentPicture = document.querySelector(".pfirst.visible");
        currentPicture.classList.toggle("visible");

        const previousPicture = document.querySelector(".plast");
        previousPicture.classList.toggle("visible");

        changeColorBubble(".bfirst");

        resetInterval();
    }

    else {
        const currentPicture = document.querySelector(".visible");

        //If Element isn't in "previousElementSibling" it doesn't work
        const previousPicture = currentPicture.previousElementSibling;
        
        currentPicture.classList.toggle("visible");
        previousPicture.classList.toggle("visible");
        
        // I couldn't use the changeColorBubble function because I would have to change it a lot
        const currentBubble = document.querySelector(".current");
        const previousBubble = document.querySelector(".current").previousElementSibling;

        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");
        
        resetInterval();
    }
})

forwardArrow.addEventListener("click", () => {

    //If the current image is the last one, go back to the first one
    if (document.querySelector(".plast.visible")) {
        const currentPicture = document.querySelector(".plast.visible");
        currentPicture.classList.toggle("visible");

        const previousPicture = document.querySelector(".pfirst");
        previousPicture.classList.toggle("visible");

        changeColorBubble(".blast");

        resetInterval();
    }

    else {
        const currentPicture = document.querySelector(".visible");
        const nextPicture = document.querySelector(".visible+div");
    
        currentPicture.classList.toggle("visible");
        nextPicture.classList.toggle("visible");

        // I couldn't use the changeColorBubble function because I would have to change it a lot
        const currentBubble = document.querySelector(".current");
        const previousBubble = document.querySelector(".current").nextElementSibling;

        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");

        resetInterval();
    }
})

// DISPLAY NEW PICTURE FUNCTION

function displayPicture(pictureClass) {
    const currentPicture = document.querySelector(`${pictureClass}`);
    const previousPicture = document.querySelector(".visible");

    currentPicture.classList.toggle("visible");
    previousPicture.classList.toggle("visible");
}


// SELECT BUTTON

const selectButtons = document.querySelectorAll(".select-button");

selectButtons.forEach(button => {
    button.addEventListener("click", e => {

        //Change the color to display the last button you clicked
        const clickedButton = e.target;
        const currentButton = document.querySelector(".current");

        if (clickedButton !== currentButton) {
            clickedButton.classList.toggle("current");
            currentButton.classList.toggle("current");
        }

        //We check which button the user pressed and use the display function
        if (clickedButton === document.querySelector(".bfirst")) {
            displayPicture(".pfirst");
            resetInterval();
        }

        else if (clickedButton === document.querySelector(".b2")) {
            displayPicture(".p2");
            resetInterval();
        }

        else if (clickedButton === document.querySelector(".b3")) {
            displayPicture(".p3");
            resetInterval();
        }

        else if (clickedButton === document.querySelector(".b4")) {
            displayPicture(".p4");
            resetInterval();
        }

        else if (clickedButton === document.querySelector(".blast")) {
            displayPicture(".plast");
            resetInterval();
        }
    })
})

// FUNCTION FOR CHANGING THE COLOR OF THE BUBBLES

function changeColorBubble(bubbleClass) {

    // Check if the bubbleClass is looking for the FIRST button
    if (document.querySelector(`${bubbleClass}`) === document.querySelector(".bfirst")) {
        const currentBubble = document.querySelector(`${bubbleClass}`);
        const previousBubble = document.querySelector(".blast");
    
        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");       
    }


    // Check if the bubbleClass is looking for the LAST button
    else if (document.querySelector(`${bubbleClass}`) === document.querySelector(".blast")) {
        const currentBubble = document.querySelector(`${bubbleClass}`);
        const previousBubble = document.querySelector(".bfirst");
    
        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");
    }

    else {
        const currentBubble = document.querySelector(`${bubbleClass}`);
        const previousBubble = document.querySelector(".current");
    
        currentBubble.classList.toggle("current");
        previousBubble.classList.toggle("current");  
    }
}