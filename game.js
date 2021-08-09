
class Game {
  constructor(type) {
    this.player1 = new Player('Human', '👩🏻‍💻');
    this.player2 = new Player('Computer', '💻');
    this.type = type || 'classic';
    this.choices = ['rock', 'paper', 'scissors'];
    this.winner = null;
  }

  playGame(type) {
    this.type = type;
    if (this.type === 'spicy')
      this.choices.push('lizard', 'alien');
  }

  determineWinner() {
    if (this.player1.choice === 'rock' && this.player2.choice === 'lizard' || this.player1.choice === 'rock' && this.player2.choice === 'scissors') {
        this.winner = this.player1.name;
        this.player1.wins++
        this.player1.saveWinsToStorage();
        this.player2.saveWinsToStorage();
        return `👩🏻‍💻 ${game.player1.name} Wins! 👩🏻‍💻`;
    } if (this.player1.choice === 'paper' && this.player2.choice === 'rock' || this.player1.choice === 'paper' && this.player2.choice === 'alien') {
        this.winner = this.player1.name;
        this.player1.wins++
        this.player1.saveWinsToStorage();
        this.player2.saveWinsToStorage();
        return `👩🏻‍💻 ${game.player1.name} Wins! 👩🏻‍💻`;
    } if (this.player1.choice === 'scissors' && this.player2.choice === 'lizard' || this.player1.choice === 'scissors' && this.player2.choice === 'paper') {
        this.winner = this.player1.name;
        this.player1.wins++
        this.player1.saveWinsToStorage();
        this.player2.saveWinsToStorage();
        return `👩🏻‍💻 ${game.player1.name} Wins! 👩🏻‍💻`;
    } if (this.player1.choice === 'lizard' && this.player2.choice === 'paper' || this.player1.choice === 'lizard' && this.player2.choice === 'alien') {
        this.winner = this.player1.name;
        this.player1.wins++
        this.player1.saveWinsToStorage();
        this.player2.saveWinsToStorage();
        return `👩🏻‍💻 ${game.player1.name} Wins! 👩🏻‍💻`;
    } if (this.player1.choice === 'alien' && this.player2.choice === 'paper' || this.player1.choice === 'alien' && this.player2.choice === 'rock') {
        this.winner = this.player1.name;
        this.player1.wins++
        this.player1.saveWinsToStorage();
        this.player2.saveWinsToStorage();
        return `👩🏻‍💻 ${game.player1.name} Wins! 👩🏻‍💻`;
    } if (this.player1.choice === this.player2.choice) {
        this.winner = 'Draw'
        return `😱 It's a draw! 😱`;
    }

        this.winner = this.player2.name;
        this.player2.wins++
        this.player2.saveWinsToStorage();
        this.player1.saveWinsToStorage();
        return `💻 ${game.player2.name} Wins! 💻`;
    }
}
