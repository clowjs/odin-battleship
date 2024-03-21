class Gameboard {
  constructor() {
    this.board = [];
  }

  placeShip() { return 'TODO: function that places a ship on the gameboard at specified coordinates.'; }

  receiveAttack() {
    return 'TODO: function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.';
  }

  // Gameboards should keep track of missed attacks so they can display them properly.

  allSunk() { return 'TODO: function that determines whether all ships on the gameboard are sunk.'; }
}

module.exports = Gameboard;

// The grids are typically square – usually 10×10

// No.  Class         Size
// 1    Carrier       5
// 2    Battleship    4
// 3    Destroyer	    3
// 4    Submarine	    3
// 5    Patrol Boat   2
