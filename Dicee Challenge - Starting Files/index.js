//player 1
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomDice1);

//player 2
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player Tie!";
}