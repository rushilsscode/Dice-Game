var player1 = prompt("player1: ");
var player2 = prompt("player2: ");

document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimg1);
document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

var print;
if (randomNumber1 > randomNumber2) {
  print = player1 + " wins";
} else if (randomNumber2 > randomNumber1) {
  print = player2 + "wins";
} else {
  print = "Draw";
}

document.querySelector("h1").innerHTML = print;

document.querySelector(".btn button").addEventListener("click", function () {
  location.reload();
});
