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
function showFighters() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chosenFightersView.classList.remove('hidden');
  player1Fighter.src = './assets/happy-rocks.png'
  document.querySelector('.chosen-fighters').appendChild(player1Fighter);
  }

  // const img = new Image(100, 200); // width, height
  // img.src = "https://picsum.photos/200/301";
  // document.body.appendChild(img);

function playerTurns(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  game.determineWinner();
  changeGameButton.classList.remove('hidden');
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
  showFighters();
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
