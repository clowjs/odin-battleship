export function handleClickSquare(event) {
  const square = event.target;
  const { board, x, y } = square.dataset;
  console.log(`Clicked on ${board} board at x: ${x}, y: ${y}`);
}