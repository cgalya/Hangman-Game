var words = ["siamese", "russian-blue", "manx", "ragdoll", "maine-coon", "persian"];
var word = words[Math.floor(Math.random() * words.length)];
var guesses = [];
var wordHolder = document.getElementById('hold');
var correct = document.createElement('ul');
var lives = 15;
var showLives = document.getElementById("mylives");
showLives.innerHTML = "You have " + lives + " guesses remaining";

   result = function () {
 
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      var guess = document.createElement('li');
      if (word[i] === "-") {
        guess.innerHTML = " ";
      } else {
        guess.innerHTML = "_";
      }
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
    console.log(word);
  }

    result();



document.addEventListener('keydown', function(event){
  var charTyped = event.key;
  var incorrect = document.getElementById('incorrect');
  var listLetters = document.createElement('li');
  for (var i = 0; i < word.length; i++) {
    if (word[i] === charTyped) {
      guesses[i].innerHTML = charTyped;
      var yes = true;
    } 
  }  
  if (!yes) {
    lives -= 1;
    showLives.innerHTML = "You have " + lives + " guesses remaining";
    incorrect.appendChild(listLetters);
    listLetters.innerHTML = charTyped;
    }
  if (lives === -1) {
    alert("Game Over!!");
    location.reload();
    alert("Want to play again?");
  }
})



