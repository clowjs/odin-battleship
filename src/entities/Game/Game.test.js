const Game = require('./Game');

test('Empty test', () => { expect(true).toBe(true); });

// describe('Game', () => {
//   let game;

//   beforeEach(() => {
//     const gameboards = [/* mock gameboards */];
//     game = new Game(gameboards);
//   });

//   test('should initialize with the correct gameboards', () => {
//     expect(game.gameboards).toEqual([/* mock gameboards */]);
//   });

//   test('should initialize with currentPlayer set to 0', () => {
//     expect(game.currentPlayer).toBe(0);
//   });

//   test('should switch currentPlayer to 1 when switchPlayer() is called', () => {
//     game.switchPlayer();
//     expect(game.currentPlayer).toBe(1);
//   });

//   test('should switch currentPlayer to 0 when switchPlayer() is called twice', () => {
//     game.switchPlayer();
//     game.switchPlayer();
//     expect(game.currentPlayer).toBe(0);
//   });

//   test('should call receiveAttack() on the current player\'s gameboard when attack() is called', () => {
//     const mockCoords = { x: 1, y: 2 };
//     game.attack(mockCoords);
//     expect(game.gameboards[game.currentPlayer].receiveAttack).toHaveBeenCalledWith(mockCoords);
//   });

//   test('should return true if any of the gameboards are all sunk', () => {
//     game.gameboards[0].allSunk = jest.fn(() => true);
//     expect(game.isGameOver()).toBe(true);
//   });

//   test('should return false if none of the gameboards are all sunk', () => {
//     game.gameboards[0].allSunk = jest.fn(() => false);
//     game.gameboards[1].allSunk = jest.fn(() => false);
//     expect(game.isGameOver()).toBe(false);
//   });
// });
