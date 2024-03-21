class Game {
  constructor(gameboards) {
    this.gameboards = gameboards;
    this.currentPlayer = 0;
  }

  shipList = [
    { name: 'Carrier', size: 5 },
    { name: 'Battleship', size: 4 },
    { name: 'Destroyer', size: 3 },
    { name: 'Submarine', size: 3 },
    { name: 'Patrol Boat', size: 2 }
  ];

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
  }

  attack(coords) {
    this.gameboards[this.currentPlayer].receiveAttack(coords);
  }

  isGameOver() {
    return this.gameboards[0].allSunk() || this.gameboards[1].allSunk();
  }
}

module.exports = Game;
