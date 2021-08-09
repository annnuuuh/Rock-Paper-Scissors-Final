// VIEWS
var classicGameView = document.querySelector('.classic-game-container');
var chooseGameView = document.querySelector('.game-console-container');
var spicyGameView = document.querySelector('.spicy-game-container');
var chosenFightersView = document.querySelector('.chosen-fighters');
// BUTTONS
var classicGameBtn = document.querySelector('.classic-game-button');
var spicyGameBtn = document.querySelector('.spicy-game-button');
var rockBtn = document.querySelector('#rock-btn');
var scissorsBtn = document.querySelector('#scissors-btn');
var paperBtn = document.querySelector('#paper-btn');
var spicyAlienBtn = document.querySelector('#alien-btn-spicy');
var spicyLizardBtn = document.querySelector('#lizard-btn-spicy');
var spicyRockBtn = document.querySelector('#rock-btn-spicy');
var spicyPaperBtn = document.querySelector('#paper-btn-spicy');
var spicyScissorsBtn = document.querySelector('#scissors-btn-spicy');
var changeGameButton = document.querySelector('.change-game-button');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
var turnDelay = 2000;
var rockChoiceToken = document.querySelector('.rockChoiceToken');
var paperChoiceToken = document.querySelector('.paperChoiceToken');
var scissorsChoiceToken = document.querySelector('.scissorsChoiceToken');
var player1FighterView = document.querySelector('.player1-fighter');
var player2FighterView = document.querySelector('.player2-fighter');
var player1Fighter = document.createElement('img');
var player2Fighter = document.createElement('img');
var game;

//EVENT LISTENERS
classicGameBtn.addEventListener('click', startClassicGame);
spicyGameBtn.addEventListener('click', startSpicyGame);
rockBtn.addEventListener('click', function () {
  playerTurns('rock')
});
scissorsBtn.addEventListener('click', function () {
  playerTurns('scissors')
});
paperBtn.addEventListener('click', function () {
  playerTurns('paper')
});
spicyAlienBtn.addEventListener('click', function () {
  playerTurns('alien')
});
spicyLizardBtn.addEventListener('click', function () {
  playerTurns('lizard')
});
spicyRockBtn.addEventListener('click', function () {
  playerTurns('rock')
});
spicyScissorsBtn.addEventListener('click', function () {
  playerTurns('scissors')
});
spicyPaperBtn.addEventListener('click', function () {
  playerTurns('paper')
});
changeGameButton.addEventListener('click', chooseNewGameType);

//FUNCTIONS
function showPlayer1Fighter() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chosenFightersView.classList.remove('hidden');
  player1FighterView.classList.remove('hidden');
  if (game.player1.choice === 'rock') {
    player1Fighter.src = './assets/happy-rocks.png';
    document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  } if (game.player1.choice === 'paper') {
    player1Fighter.src = './assets/happy-paper.png'
    document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  } if (game.player1.choice === 'scissors') {
    player1Fighter.src = './assets/happy-scissors.png'
    document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  } if (game.player1.choice === 'lizard') {
    player1Fighter.src = './assets/lizard.png'
    document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  } if (game.player1.choice === 'alien') {
    player1Fighter.src = './assets/happy-alien.png'
    document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  }
}

function showPlayer2Fighter() {
  player2FighterView.classList.remove('hidden');
  if (game.player2.choice === 'rock') {
    player2Fighter.src = './assets/happy-rocks.png';
    document.querySelector('.chosen-fighters').appendChild(player2Fighter);
  } if (game.player2.choice === 'paper') {
    player2Fighter.src = './assets/happy-paper.png'
    document.querySelector('.chosen-fighters').appendChild(player2Fighter);
  } if (game.player2.choice === 'scissors') {
    player2Fighter.src = './assets/happy-scissors.png'
    document.querySelector('.chosen-fighters').appendChild(player2Fighter);
  } if (game.player2.choice === 'lizard') {
    player2Fighter.src = './assets/lizard.png'
    document.querySelector('.chosen-fighters').appendChild(player2Fighter);
  } if (game.player2.choice === 'alien') {
    player2Fighter.src = './assets/happy-alien.png'
    document.querySelector('.chosen-fighters').appendChild(player2Fighter);
  }
}

window.onload = function() {
  game = new Game();
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
}

function playerTurns(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  game.determineWinner();
  changeGameButton.classList.remove('hidden');
  // var humanWins = game.player1.retrieveWinsFromStorage();
  // var computerWins = game.player2.retrieveWinsFromStorage();
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
  showPlayer1Fighter();
  showPlayer2Fighter();
  setTimeout(startAnotherGame, 2000);
}

function startAnotherGame() {
    chosenFightersView.classList.add('hidden');
    chooseGameView.classList.add('hidden');
    player2FighterView.classList.add('hidden');
    player1FighterView.classList.add('hidden');
    if (game.type === 'spicy') {
      spicyGameView.classList.remove('hidden');
  } if (game.type === 'classic') {
      classicGameView.classList.remove('hidden');
  }
}

function startClassicGame(event) {
  event.preventDefault();
  classicGameView.classList.remove('hidden');
  chooseGameView.classList.add('hidden');
  startNewGame('classic');
}

function startSpicyGame(event) {
  event.preventDefault();
  spicyGameView.classList.remove('hidden');
  chooseGameView.classList.add('hidden');
  startNewGame('spicy');
}

function startNewGame(type) {
  // game = new Game(type)
  game.playGame(type);
}

function chooseNewGameType() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chooseGameView.classList.remove('hidden');
  changeGameButton.classList.add('hidden');
}

// function populatePastWins() {
//   document.getElementById("player1wins").innerHTML = localStorage.getItem(`${this.name} wins`);
//   document.getElementById("player2wins").innerHTML = localStorage.getItem(`${this.name} wins`);
//   }
// }
