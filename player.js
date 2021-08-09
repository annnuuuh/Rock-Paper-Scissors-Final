class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = localStorage.getItem(`${this.name} wins`) || 0;
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
    console.log(objectToStore);
  }

  retrieveWinsFromStorage() {
    var retrievedObject = localStorage.getItem(`${this.name} wins`);
    var parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
  }

  }
// when i display the wins, i am retreiving from storage and that is
// what is displayed
