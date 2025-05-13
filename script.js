const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
    homePage.style.display = "none";
    gamePage.style.display = "block";

});
