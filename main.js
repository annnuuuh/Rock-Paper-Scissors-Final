// VIEWS
var classicGameView = document.querySelector('.classic-game-container');
var chooseGameView = document.querySelector('.game-console-container');
var spicyGameView = document.querySelector('.spicy-game-container');
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
function playerTurns(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  game.determineWinner();
  changeGameButton.classList.remove('hidden');
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
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
  game = new Game(type)
  game.playGame(type);
}

function chooseNewGameType() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chooseGameView.classList.remove('hidden');
  changeGameButton.classList.add('hidden');
}
