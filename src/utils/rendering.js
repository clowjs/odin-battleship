import { handleClickSquare } from './eventHandlers';

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');

export function renderBoard(player) {
  const board = player === 'player' ? playerBoard : computerBoard;
  board.classList = 'board';

  const newBoard = document.createElement('div');
  newBoard.classList.add('board');
  newBoard.id = `${player}-board`;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const playerSquare = document.createElement('div');
      playerSquare.classList.add('square');
      playerSquare.dataset.board = player;
      playerSquare.dataset.x = x;
      playerSquare.dataset.y = y;

      playerSquare.addEventListener('click', (event) => handleClickSquare(event));

      board.appendChild(playerSquare);
    }
  }
}
