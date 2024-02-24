var title = document.querySelector("h1"); //header of the site
var dice1 = document.querySelector(".img1"); //dice1 image
var dice2 = document.querySelector(".img2"); //dice2 image
var button = document.querySelector(".btn"); // Select the button
var pl1Score = document.getElementById("p1Score");
var pl2Score = document.getElementById("p2Score");

// var total = 0;
var pl1WinCounter = 0;
var pl2WinCounter = 0;
// var pl1WinRatio = 0;
// var pl2WinRatio = 0;

var phrases = ["Harder daddy", "Oh yeah", "Gonna cum", "AHHHHH", "Yamete kudasai", "Be gentle please", "Aw aw aw aw", "Yeah baby", "3er beek Yones", "Is that all?", "Is it all in?", "Pathetic", "Etai des", "Onichan yameti", "Seriously, what am i doing in my life"]

function roleDice() {
  var randomNumber1 = Math.floor((Math.random() * 6)) + 1; //1-6
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1; //1-6

  var randomDiceImage1 = "./images/dice" + randomNumber1 + "alt.png" //picking image for dice1
  var randomDiceImage2 = "./images/dice" + randomNumber2 + "alt.png" //picking image for dice2

  dice1.setAttribute("src", randomDiceImage1); //changing dice1 img
  dice2.setAttribute("src" , randomDiceImage2); //changing dice2 img

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins!"; //header says pl1 won
    pl1WinCounter++;
  }
  else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins!"; //header says pl2 won
    pl2WinCounter++;
  }
  else {
    title.innerHTML = "Draw!"; //header says draw
  }

  pl1Score.innerHTML = "Player 1 wins: " + pl1WinCounter;
  pl2Score.innerHTML = "Player 2 wins: " + pl2WinCounter;

  button.innerHTML = phrases[Math.floor(Math.random() * phrases.length)]
}

button.addEventListener("click", roleDice); //click key to role dice