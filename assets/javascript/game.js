//variables
var wins = 0;
var losses = 0;
var guesses = 10;


//computer guesses
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

//user guesses array
var userGuesses = [];
userGuesses.push(userPick);

//user engagement (click)
document.onkeyup = function (event) {
  var userPick = event.key;


  //generate random pick
  var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("Computer Guesses: " + computerPick);

  //condition
  if (userPick === computerPick) {
    wins++;
    alert("you chose correct!");
    userGuesses = [];
    guesses = 10;
  } else {
    guesses--;
  }

  if (guesses === 0) {
    losses++;
    guesses = 10;
    userGuesses = [];
  }

  //logging results
  console.log("wins: " + wins);
  console.log("losses: " + losses);
  console.log("guesses: " + guesses);
  
  //show to html
  var gameWins = "<p>Wins: " + wins + "</p>";
  var gameLosses = "<p>Losses: " + losses + "</p>";
  var gameGuesses = "<p>Guesses left: " + guesses + "</p>";
  var myGuesses = "<p>Guesses: " + userGuesses + "</p>";
  var gameDiv = document.getElementById('game');
  gameDiv.innerHTML = gameWins + gameLosses + myGuesses + gameGuesses;

}