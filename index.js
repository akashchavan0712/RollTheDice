
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImageSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;

var image1;
var image2;

image1 = document.querySelectorAll("img")[0];
image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randomDiceImageSource1);
image2.setAttribute("src" , randomDiceImageSource2);

var winner;

if (randomNumber1 > randomNumber2)
{
  winner = document.querySelector("h1");
  winner.innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1)
{
  winner = document.querySelector("h1");
  winner.innerHTML = "Player 2 Wins";
}
else{
  winner = document.querySelector("h1");
  winner.innerHTML = "Well It's a Draw";
}
