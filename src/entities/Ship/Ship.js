class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.orientation = null;
    this.coordinates = [];
  }

  hit() { this.numberOfHits += 1; }

  isSunk() {
    return this.numberOfHits === this.length;
  }

  setCoordinates(coordinate, orientation) {
    this.coordinates = [];

    if (this.length === 1) return;

    this.orientation = orientation;

    for (let i = 0; i < this.length; i += 1) {
      this.coordinates.push(orientation === 'horizontal'
        ? { x: coordinate.x + i, y: coordinate.y }
        : { x: coordinate.x, y: coordinate.y + i });
    }
  }
}

module.exports = Ship;
