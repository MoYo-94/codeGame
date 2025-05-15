const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const playButton = document.getElementById("playButton");
const howToPlayButton = document.getElementById("howToPlayButton");
const returnToHomeButton = document.getElementById("returnToHomeButton");
const howToPlayPage = document.getElementById("howToPlay");
const returnFromGame = document.getElementById("returnFromGame");


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

// Guess Box Logic

let currentGuess = [];

document.addEventListener("keydown", function (event) {
    if ("0123456789".includes(event.key) &&

        currentGuess.length < 4) {
        currentGuess.push(event.key)
    }
    console.log(currentGuess)
})

