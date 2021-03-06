class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = parseInt(localStorage.getItem(`${this.name} wins`)) || 0;
    this.choice = null;
  }

  takeTurn(choice) {
    if (!choice) {
      var chosenIndex = Math.floor(Math.random() * game.choices.length);
      this.choice = game.choices[chosenIndex];
      return;
    }

      this.choice = choice;
      return;
  }

  saveWinsToStorage() {
    var objectToStore = this.wins;
    var stringifiedObject = JSON.stringify(objectToStore);
    localStorage.setItem(`${this.name} wins`, stringifiedObject);
  }

  retrieveWinsFromStorage() {
    var retrievedObject = localStorage.getItem(`${this.name} wins`);
    var parsedObject = JSON.parse(retrievedObject);
    this.wins = parsedObject;
    return `Wins: ${this.wins}`;
  }

}
