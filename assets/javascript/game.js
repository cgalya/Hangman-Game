window.onload = function() {

var words = ["narwhal", "humpback", "orca", "blue", "beluga", "bowhead", "minke"];
var word = words[Math.floor(Math.random() * words.length)];
var guesses = [];
var wordSpot = document.getElementById('spot');
var correct = document.createElement('ul');
var lives = 10;
var showLives = document.getElementById("mylives");
showLives.innerHTML = "You have " + lives + " guesses remaining";
var rightGuess = [];
document.createElement("img");
var wins = 0;
var showWins = document.getElementById("mywins");
showWins.innerHTML = "Wins: " + wins;



   var createWord = function() {
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'the-word');
      var guess = document.createElement('li');
      guess.setAttribute('id', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = " ";
      } else {
        guess.innerHTML = "_";
        }
      guesses.push(guess);
      wordSpot.appendChild(correct);
      correct.appendChild(guess);

     }
    console.log(word);   
    }




document.addEventListener('keydown', function(event){
  var charTyped = event.key;
  var incorrect = document.getElementById('incorrect');
  var listLetters = document.createElement('li');
  for (var i = 0; i < word.length; i++) {
    if (word[i] === charTyped) {
      guesses[i].innerHTML = charTyped;
      var yes = true;
      rightGuess.push(i);
    } 
  }  
  if (!yes) {
    lives -= 1;
    showLives.innerHTML = "You have " + lives + " guesses remaining";
    incorrect.appendChild(listLetters);
    listLetters.innerHTML = charTyped;
  }
  if (lives === 0) {
    document.getElementById("win").innerHTML = "Game Over! Ready to play again?";
    setTimeout(function() {
      reset();},2000);
  }
  if (rightGuess.length === word.length) {
    if (word === "narwhal") {
      document.getElementById("img").innerHTML = "<img src='assets/images/narwhal.jpg'>";
      var snd1 = new Audio("assets/sounds/whales1.wav");
      snd1.play();
    }
    if (word === "humpback") {
      document.getElementById("img").innerHTML = "<img src='assets/images/humpback.jpg'>";
      var snd2 = new Audio("assets/sounds/whales2.wav");
      snd2.play();
    }
    if (word === "orca") {
      document.getElementById("img").innerHTML = "<img src='assets/images/orca.jpg'>";
      var snd3 = new Audio("assets/sounds/whales3.wav");
      snd3.play();
    }
    if (word === "blue") {
      document.getElementById("img").innerHTML = "<img src='assets/images/blue.jpg'>";
      var snd4 = new Audio("assets/sounds/whales4.wav");
      snd4.play();
    }
     if (word === "beluga") {
      document.getElementById("img").innerHTML = "<img src='assets/images/beluga.jpg'>";
      var snd5 = new Audio("assets/sounds/whales5.wav");
      snd5.play();
    }
     if (word === "bowhead") {
      document.getElementById("img").innerHTML = "<img src='assets/images/bowhead.jpg'>";
      var snd6 = new Audio("assets/sounds/whales6.wav");
      snd6.play();
    }
     if (word === "minke") {
      document.getElementById("img").innerHTML = "<img src='assets/images/minke.jpg'>";
      var snd7 = new Audio("assets/sounds/whales7.wav");
      snd7.play();
    }
    document.getElementById("win").innerHTML = "The whales cheer for you!!!";
    wins += 1;
    showWins.innerHTML = "Wins: " + wins;
    setTimeout(function() {
      reset();},6000);    
  }
})
createWord();



var reset = function() {
  lives = 10
  showLives.innerHTML = "You have " + lives + " guesses remaining";
  guesses = [];
  rightGuess = [];
  document.getElementById("the-word").innerHTML = "";
  document.getElementById("win").innerHTML = "";
  document.getElementById("incorrect").innerHTML = "";
  createWord();
}

}
 