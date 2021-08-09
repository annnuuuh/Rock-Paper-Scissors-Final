var classicGameView = document.querySelector('.classic-game-container');
var chooseGameView = document.querySelector('.game-console-container');
var spicyGameView = document.querySelector('.spicy-game-container');
var chosenFightersView = document.querySelector('.winning-player');
var classicGameBtn = document.querySelector('.classic-game-button');
var spicyGameBtn = document.querySelector('.spicy-game-button');
var rockBtn = document.querySelector('#rockBtn');
var scissorsBtn = document.querySelector('#scissorsBtn');
var paperBtn = document.querySelector('#paperBtn');
var spicyAlienBtn = document.querySelector('#alienBtnSpicy');
var spicyLizardBtn = document.querySelector('#lizardBtnSpicy');
var spicyRockBtn = document.querySelector('#rockBtnSpicy');
var spicyPaperBtn = document.querySelector('#paperBtnSpicy');
var spicyScissorsBtn = document.querySelector('#scissorsBtnSpicy');
var changeGameBtn = document.querySelector('.change-game-button');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
var rockChoiceToken = document.querySelector('.rockChoiceToken');
var paperChoiceToken = document.querySelector('.paperChoiceToken');
var scissorsChoiceToken = document.querySelector('.scissorsChoiceToken');
var player1Fighter = document.createElement('img');
var player2Fighter = document.createElement('img');
var player1ChosenFighter = document.querySelector('.chosen-fighters-container').appendChild(player1Fighter);
var player2ChosenFighter = document.querySelector('.chosen-fighters-container').appendChild(player2Fighter);
var announceWinner = document.querySelector('#announceWinner');
var turnDelay = 2000;
var game;

classicGameBtn.addEventListener('click', startClassicGame);
spicyGameBtn.addEventListener('click', startSpicyGame);
changeGameBtn.addEventListener('click', chooseNewGameType);
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

window.onload = function() {
  game = new Game();
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
}

function showPlayer1Fighter() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chosenFightersView.classList.remove('hidden');
  if (game.player1.choice === 'rock') {
    player1Fighter.src = './assets/happy-rocks.png';
    player1ChosenFighter;
  } if (game.player1.choice === 'paper') {
    player1Fighter.src = './assets/happy-paper.png';
    player1ChosenFighter;
  } if (game.player1.choice === 'scissors') {
    player1Fighter.src = './assets/happy-scissors.png';
    player1ChosenFighter;
  } if (game.player1.choice === 'lizard') {
    player1Fighter.src = './assets/lizard.png';
    player1ChosenFighter;
  } if (game.player1.choice === 'alien') {
    player1Fighter.src = './assets/happy-alien.png';
    player1ChosenFighter;
  }
}

function showPlayer2Fighter() {
  if (game.player2.choice === 'rock') {
    player2Fighter.src = './assets/happy-rocks.png';
    player2ChosenFighter;
  } if (game.player2.choice === 'paper') {
    player2Fighter.src = './assets/happy-paper.png';
    player2ChosenFighter;
  } if (game.player2.choice === 'scissors') {
    player2Fighter.src = './assets/happy-scissors.png';
    player2ChosenFighter;
  } if (game.player2.choice === 'lizard') {
    player2Fighter.src = './assets/lizard.png';
    player2ChosenFighter;
  } if (game.player2.choice === 'alien') {
    player2Fighter.src = './assets/happy-alien.png';
    player2ChosenFighter;
  }
}

function playerTurns(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  announceWinner.innerText = game.determineWinner();
  changeGameBtn.classList.remove('hidden');
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
  showPlayer1Fighter();
  showPlayer2Fighter();
  setTimeout(startAnotherGame, 2000);
}

function startAnotherGame() {
    chosenFightersView.classList.add('hidden');
    chooseGameView.classList.add('hidden');
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
  game.playGame(type);
}

function chooseNewGameType() {
  spicyGameView.classList.add('hidden');
  classicGameView.classList.add('hidden');
  chooseGameView.classList.remove('hidden');
  changeGameBtn.classList.add('hidden');
}
