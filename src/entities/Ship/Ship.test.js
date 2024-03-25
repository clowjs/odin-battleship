const Ship = require('./Ship');

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test('should initialize a ship with the correct length', () => {
    expect(ship.length).toBe(3);
  });

  test('should initialize a ship with 0 hits', () => {
    expect(ship.numberOfHits).toBe(0);
  });

  test('should initialize a ship as not sunk', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('should increase the number of hits when hit() is called', () => {
    ship.hit();
    expect(ship.numberOfHits).toBe(1);
  });

  test('should return true if the ship is sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('should return false if the ship is not sunk', () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('should set the ship coordinates correctly for horizontal orientation', () => {
    const coordinate = { x: 2, y: 3 };
    const orientation = 'horizontal';
    ship.setCoordinates(coordinate, orientation);
    const expectedCoordinates = [
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
    ];
    expect(ship.coordinates).toEqual(expectedCoordinates);
  });

  test('should set the ship coordinates correctly for vertical orientation', () => {
    const coordinate = { x: 2, y: 3 };
    const orientation = 'vertical';
    ship.setCoordinates(coordinate, orientation);
    const expectedCoordinates = [
      { x: 2, y: 3 },
      { x: 2, y: 4 },
      { x: 2, y: 5 },
    ];
    expect(ship.coordinates).toEqual(expectedCoordinates);
  });
});
