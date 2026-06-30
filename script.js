
// =========================
// Element Selectors
// =========================

const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const playButton = document.getElementById("playButton");
const howToPlayButton = document.getElementById("howToPlayButton");
const returnToHomeButton = document.getElementById("returnToHomeButton");
const howToPlayPage = document.getElementById("howToPlay");
const returnFromGame = document.getElementById("returnFromGame");
const guessBox = document.getElementsByClassName("guessBox")
const checkButton = document.getElementById("checkButton");
const guessCountDisplay = document.getElementById("guessCountDisplay");
const successPage = document.getElementById("successPage");

// =========================
// Game State 
// =========================

const correctCode = [];
let currentGuess = [];
let guessCount = 0;

// =========================
// Random Number Generation 
// =========================


while(correctCode.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);
    const strDigit= randomDigit.toString()
    if(correctCode.includes(strDigit)){
//Do Nothing
    }else{
    correctCode.push(strDigit);
    }
}
console.log(correctCode);

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


});


// =========================
// Check Box Logic
// =========================


checkButton.addEventListener("click", function () {

    if (currentGuess.length === 4) {
        guessCount++;
        guessCountDisplay.innerText = guessCount;

        // Create an array to store digits
        let result = [];
        result.length = 4;

        let allCorrect = true;

//Green Loop Check

        for (let i = 0; i < 4; i++) {
            if (
                currentGuess[i] !== correctCode[i]) {
                allCorrect = false;

            } else {
                result[i] = "green";

            }

        }

// Yellow Loop Check

for (let k = 0; k< 4; k++){
    if (correctCode.includes(currentGuess[k]) && result[k] != "green"){
        result[k] = "yellow";
    }}



// Loops to say if the index is not green, loop through and make it black
        for (let j = 0; j < 4; j++) {
            if(result[j] === undefined)
                result[j] = "black"
        }


console.log(result)
        if (allCorrect) {
            gamePage.style.display = "none";
            successPage.style.display = "block";
        }
    

}});




