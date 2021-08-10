var classicGameView = document.querySelector('.classic-game-container');
var chooseGameView = document.querySelector('.game-console-container');
var spicyGameView = document.querySelector('.spicy-game-container');
var chosenFightersView = document.querySelector('.winning-player');
var classicGameBtn = document.querySelector('.classic-game-button');
var spicyGameBtn = document.querySelector('.spicy-game-button');
var changeGameBtn = document.querySelector('.change-game-button');
var rockBtn = document.querySelector('#rockBtn');
var scissorsBtn = document.querySelector('#scissorsBtn');
var paperBtn = document.querySelector('#paperBtn');
var spicyAlienBtn = document.querySelector('#alienBtnSpicy');
var spicyLizardBtn = document.querySelector('#lizardBtnSpicy');
var spicyRockBtn = document.querySelector('#rockBtnSpicy');
var spicyPaperBtn = document.querySelector('#paperBtnSpicy');
var spicyScissorsBtn = document.querySelector('#scissorsBtnSpicy');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
var announceWinner = document.querySelector('#announceWinner');
var player1Fighter = document.createElement('img');
var player2Fighter = document.createElement('img');
var player1ChosenFighter = document.querySelector('.chosen-fighters-container').appendChild(player1Fighter);
var player2ChosenFighter = document.querySelector('.chosen-fighters-container').appendChild(player2Fighter);
var game;

classicGameBtn.addEventListener('click', startClassicGame);
spicyGameBtn.addEventListener('click', startSpicyGame);
changeGameBtn.addEventListener('click', chooseNewGameType);
rockBtn.addEventListener('click', function () {
  playGame('rock')
});
scissorsBtn.addEventListener('click', function () {
  playGame('scissors')
});
paperBtn.addEventListener('click', function () {
  playGame('paper')
});
spicyAlienBtn.addEventListener('click', function () {
  playGame('alien')
});
spicyLizardBtn.addEventListener('click', function () {
  playGame('lizard')
});
spicyRockBtn.addEventListener('click', function () {
  playGame('rock')
});
spicyScissorsBtn.addEventListener('click', function () {
  playGame('scissors')
});
spicyPaperBtn.addEventListener('click', function () {
  playGame('paper')
});

window.onload = function() {
  game = new Game();
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function playGame(choice) {
  show(changeGameBtn);
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  announceWinner.innerText = game.determineWinner();
  player1Wins.innerText = `Wins: ${game.player1.wins}`;
  player2Wins.innerText = `Wins: ${game.player2.wins}`;
  showPlayer1Fighter();
  showPlayer2Fighter();
  setTimeout(startAnotherGame, 2000);
}

function showPlayer1Fighter() {
  hide(spicyGameView);
  hide(classicGameView);
  show(chosenFightersView);
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

function startAnotherGame() {
  hide(chosenFightersView);
  hide(chooseGameView);
  if (game.type === 'spicy') {
    show(spicyGameView);
} if (game.type === 'classic') {
    show(classicGameView);
  }
}

function startClassicGame(event) {
  event.preventDefault();
  show(classicGameView);
  hide(chooseGameView);
  startNewGame('classic');
}

function startSpicyGame(event) {
  event.preventDefault();
  show(spicyGameView);
  hide(chooseGameView);
  startNewGame('spicy');
}

function startNewGame(type) {
  // game = new Game();
  game.playGame(type);
}

function chooseNewGameType() {
  show(chooseGameView);
  hide(spicyGameView);
  hide(classicGameView);
  hide(changeGameBtn);
}
