var gameSelection = document.getElementById("gametype");
var scoreBoard = document.getElementById("scoreboard");
var gameChoices = document.getElementById("choices");
var player1scoredisplay = document.getElementById("player1score");
var player2scoredisplay = document.getElementById("player2score");

var choice = {0:'ROCK', 1:'PAPER', 2:'SCISSORS'};
var player1score = 0;
var player2score = 0;

// scoreBoard.style.visibility = "hidden";
// gameChoices.style.visibility = "hidden";
player1scoredisplay.textContent = player1score;
player2scoredisplay.textContent = player2score;
