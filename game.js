//game class
class Game {
  constructor(type) {
    this.player1 = new Player('Human', '👩🏻‍💻');
    this.player2 = new Player('Computer', '💻');
    this.type = type;
    this.choices = ['rock', 'paper', 'scissors'];
    this.draw = false;
  }
  playGame(type) {
    this.type = type;
    if (this.type === 'spicy')
      this.choices.push('lizard', 'alien');
      console.log(this.choices);
    }
  determineWinner() {
      if (this.player1.choice === 'rock' && this.player2.choice === 'lizard') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'rock' && this.player2.choice === 'scissors') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'paper' && this.player2.choice === 'rock') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'paper' && this.player2.choice === 'alien') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'scissors' && this.player2.choice === 'lizard') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'scissors' && this.player2.choice === 'paper') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'lizard' && this.player2.choice === 'paper') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'lizard' && this.player2.choice === 'alien') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'alien' && this.player2.choice === 'paper') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === 'alien' && this.player2.choice === 'rock') {
        this.player1.wins++;
        console.log(`Player 1 wins with ${this.player1.choice}`);
        return;
      } if (this.player1.choice === this.player2.choice) {
        console.log('it is a draw!');
        return;
            }
        this.player2.wins++;
        console.log(`Player 2 wins with ${this.player2.choice}`);
    }
}

// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
