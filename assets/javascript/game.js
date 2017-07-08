var modal = document.getElementById("myModal");


//when the window loads, press any key to start the game
window.onload = function() {
  document.addEventListener('keydown', newGame, false);
  modal.style.display = "block";
  document.getElementById("start").innerHTML = "*Press any key to get started!*";
}

//removes previous event listener, inserts text, and starts the game
var newGame = function() {
  document.removeEventListener('keydown', newGame, false);
  modal.style.display = "none";
  document.getElementById("currentWhale").innerHTML = "Current Whale";
  document.getElementById("letGuessed").innerHTML = "Letters Already Guessed";
  document.getElementById("start").innerHTML = "Type a letter to make a guess!";
  start();
}

  



var start = function() {

  //chooses a random word from the list
  var words = ["narwhal", "humpback", "orca", "blue", "beluga", "bowhead", "minke"];
  var word = words[Math.floor(Math.random() * words.length)];

  //used for creating the word guessing areas
  var guesses = [];
  var wordSpot = document.getElementById('spot');
  var rightGuess = [];

  //sets up life counter
  var lives = 10;
  var showLives = document.getElementById("mylives");
  showLives.innerHTML = "You have " + lives + " guesses remaining";

  //sets up win counter
  var wins = 0;
  var showWins = document.getElementById("mywins");
  showWins.innerHTML = "Wins: " + wins;


  //picks word and sets out underscores
  var createWord = function() {
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
      var guess = document.createElement('div');
      guess.setAttribute('id', 'guess');
      guess.innerHTML = "_";
      guesses.push(guess);
      wordSpot.appendChild(guess);
      
    }
    console.log(word);   
  }

  /* if the player's guess is right, it replaces an underscore in the word */
  document.addEventListener('keydown', function(event){
    var charTyped = event.key;
    var incorrect = document.getElementById('incorrect');
    var listLetters = document.createElement('div');
    for (var i = 0; i < word.length; i++) {
      if (word[i] === charTyped) {
        guesses[i].innerHTML = charTyped;
        var yes = true;
        rightGuess.push(i);
      } 
    }  
    /* if the player guesses wrong, it is placed in letters already guessed and the player loses a life */
    if (!yes) {
      lives -= 1;
      showLives.innerHTML = "You have " + lives + " guesses remaining";
      incorrect.appendChild(listLetters);
      listLetters.innerHTML = charTyped;
    }
    //if lives reaches 0, the game is over and resets after 2 seconds
    if (lives === 0) {
      document.getElementById("win").innerHTML = "Game Over! Ready to play again?";
      setTimeout(function() {
        reset();},2000);
    }
    /* if the word is guessed, a picture of the whale is displayed along with whale sounds*/
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
      //win count goes up by one and the game resets after 6 seconds
      document.getElementById("win").innerHTML = "The whales cheer for you!!!";
      wins += 1;
      showWins.innerHTML = "Wins: " + wins;
      setTimeout(function() {
        reset();},6000);    
    }
  })


  //resets the game
  var reset = function() {
    lives = 10
    showLives.innerHTML = "You have " + lives + " guesses remaining";
    guesses = [];
    rightGuess = [];
    document.getElementById("spot").innerHTML = "";
    document.getElementById("win").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";
    createWord();
  }

    createWord();

}



 