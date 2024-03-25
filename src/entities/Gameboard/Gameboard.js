class Gameboard {
  constructor() {
    // 0 = empty space
    // 1 = ship
    // 2 = miss
    // 3 = hit
    this.ships = [];
    this.board = [];

    for (let i = 0; i < 10; i += 1) {
      this.board.push(Array(10).fill(0));
    }
  }

  canPlaceShip(ship, coordinates) {
    const [x, y] = coordinates;

    if (ship.orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i += 1) {
        if (this.board[x + i][y] === 1) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if (this.board[x][y + i] === 1) {
          return false;
        }
      }
    }

    return true;
  }

  placeShip(ship) {
    this.ships.push(ship);
    ship.coordinates.forEach((coordinate) => {
      this.board[coordinate.x][coordinate.y] = 1;
    });
  }

  placeShipsRandomly(shipList) {
    shipList.forEach((ship) => {
      let placed = false;

      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        ship.setCoordinates({ x, y }, orientation);

        if (this.canPlaceShip(ship, [x, y])) {
          this.placeShip(ship);
          placed = true;
        }
      }
    });
  }

  getShip(coordinates) {
    const [x, y] = coordinates;

    return this.ships.find(
      (ship) => ship
        .coordinates
        .some((coordinate) => coordinate.x === x && coordinate.y === y)
    );
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;

    if (this.board[x][y] === 1) {
      const ship = this.getShip(coordinates);
      ship.hit();
      this.board[x][y] = 3;
    } else {
      this.board[x][y] = 2;
    }
  }

  isAttackValid(coordinates) {
    const [x, y] = coordinates;

    return this.board[x][y] !== 2 && this.board[x][y] !== 3;
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

module.exports = Gameboard;

// The grids are typically square – usually 10×10

// No.  Class         Size
// 1    Carrier       5
// 2    Battleship    4
// 3    Destroyer     3
// 4    Submarine     3
// 5    Patrol Boat   2
