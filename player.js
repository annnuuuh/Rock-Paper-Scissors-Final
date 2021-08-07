class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = null;
  }
  takeTurn(choice) {
    if (!choice) {
      var chosenIndex = Math.floor(Math.random() * game.choices.length);
      this.choice = game.choices[chosenIndex];
      console.log(this.choice);
      return;
    }
      this.choice = choice;
      return;
  }
  saveWinsToStorage() {
  }
  retrieveWinsFromStorage() {
  }
  }
// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage
// retrieveWinsFromStorage
// takeTurn
