window.onload = function() {

	var words = ["narwhal", "humpback", "orca", "blue", "beluga", "bowhead", "minke"];
	var word = words[Math.floor(Math.random() * words.length)];	
	var guesses = [];
	var lives = 15;
	var showLives = document.getElementById("mylives");
	showLives.innerHTML = "You have " + lives + " guesses remaining";
	var wins = 0;
	var showWins = document.getElementById("mywins");
	showWins.innerHTML = "Wins: " + wins;
	var correct = document.createElement('ul');


	var createWord = function() {
		var wordSpot = document.getElementById('spot');
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

	createWord();


	var play = function() {
		document.addEventListener('keydown', function(event) {
			var charTyped = event.key;
			var rightGuess = [];
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
    		var incorrect = document.getElementById('incorrect');
  			var listLetters = document.createElement('li');
  			incorrect.appendChild(listLetters);
    		listLetters.innerHTML = charTyped;
  		}
  		if (lives === 0) {
  			document.getElementById("win").innerHTML = "Game Over! Ready to play again?";
  			setTimeout(function() {
      		reset();},2000);
  		}
  		if (rightGuess.length === word.length) {
  			document.getElementById("win").innerHTML = "The whales cheer for you!!!";
  			var snd = new Audio("assets/images/whalesounds.wav");
  			snd.play();
  			showWins.innerHTML = "Wins: " + wins;
		    setTimeout(function() {
		      reset();},2000);
		    if (word === "narwhal") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/narwhal.jpg'>";
		    }
		    if (word === "humpback") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/humpback.jpg'>";
		    }
		    if (word === "orca") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/orca.jpg'>";
		    }
		    if (word === "blue") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/blue.jpg'>";
		    }
		     if (word === "beluga") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/beluga.jpg'>";
		    }
		     if (word === "bowhead") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/bowhead.jpg'>";
		    }
		     if (word === "minke") {
		      document.getElementById("img").innerHTML = "<img src='assets/images/minke.jpg'>";
		    }
  		}
		})
	}

	play();


	var reset = function() {
		lives = 15
	  showLives.innerHTML = "You have " + lives + " guesses remaining";
	  document.getElementById("the-word").innerHTML = "";
	  document.getElementById("win").innerHTML = "";
	  document.getElementById("incorrect").innerHTML = "";
	  createWord();
	  play();
	}


}