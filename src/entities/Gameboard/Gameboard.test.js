const Gameboard = require('./Gameboard');

test('Empty test', () => { expect(true).toBe(true); });

// describe('Gameboard', () => {
//   let gameboard;

//   beforeEach(() => {
//     gameboard = new Gameboard();
//   });

//   test('should initialize an empty board', () => {
//     expect(gameboard.board).toEqual([]);
//   });

//   test('should place a ship on the gameboard at specified coordinates', () => {
//     // TODO: Write test code to place a ship on the gameboard and verify the coordinates
//   });

//   test('should receive an attack and record the coordinates of the missed shot', () => {
//     // TODO: Write test code to receive an attack and verify the coordinates of the missed shot
//   });

//   test('should determine whether all ships on the gameboard are sunk', () => {
//     // TODO: Write test code to determine whether all ships on the gameboard are sunk
//   });
// });