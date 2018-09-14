
var wins = 0;
var losses = 0;
var guesses = 9;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
  console.log(event);

  var userPick = event.key;

  var gameHTML = document.getElementById("game");

  var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(computerPick);

    if (userPick === computerPick) {
      wins++;
      alert("correct!");
    }
    
    else {
      guesses--;
      alert("wrong!");
    }
    
    if (guesses === 0) {
      losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

  }
  gameHTML.innerHTML = 
  "<h2>Wins: " 
  + wins + 
  "</h2><h2>Losses: " 
  + losses + 
  "</h2><h2>Ties: " 
  + ties + 
  "</h2>";