const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const playButton = document.getElementById("playButton");
const howToPlayButton = document.getElementById("howToPlayButton");
const returnToHomeButton = document.getElementById("returnToHomeButton");
const howToPlayPage = document.getElementById("howToPlay");
const returnFromGame = document.getElementById("returnFromGame");
const guessBox = document.getElementsByClassName("guessBox")
const checkButton = document.getElementById("checkButton");


// =========================
// Random Number Generation 
// =========================

const correctCode = [];

for (let i = 0; i < 4; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    correctCode.push(string(randomDigit));

}

// =========================
// Visual Display of Pages 
// =========================



playButton.addEventListener("click", function () {
    homePage.style.display = "none";
    gamePage.style.display = "block";

});

howToPlayButton.addEventListener("click", function () {
    homePage.style.display = "none";
    howToPlayPage.style.display = "block";

});

returnToHomeButton.addEventListener("click", function () {
    howToPlayPage.style.display = "none";
    homePage.style.display = "block";
});

returnFromGame.addEventListener("click", function () {
    gamePage.style.display = "none";
    homePage.style.display = "block";
})




// =========================
// Guess Box Logic
// =========================


//Logic for keypresses and build current guess to max 4 digits
//only allow numerics keys 0-9
//Backspace / Delete guess Logic

let currentGuess = [];

document.addEventListener("keydown", function (event) {
    if ("0123456789".includes(event.key) &&

        currentGuess.length < 4) {
        currentGuess.push(event.key);
    }


    if (event.key === "Backspace" || event.key === "Delete") {
        currentGuess.pop();
    }


    // Logic for looping through guess boxes

    Array.from(guessBox).forEach((box, index) => {
        box.innerText = currentGuess[index] || "";
        // ||  if current index exists, use it, otherwise just use an emptry string to clear the box
    });

    console.log(currentGuess)

});


// =========================
// Check Box Logic
// =========================


checkButton.addEventListener("click", function () {

    if (currentGuess.length === 4) {

        let allCorrect = true;

        for (let i = 0; i < 4; i++) {
            if (
                currentGuess[i] !== correctCode[i]) {
                allCorrect = false;
                break;
            }

        }
        if (allCorrect) {
            gamePage.style.display = "none";
            successPage.style.display = "block";
        }
    }


});


