export function copyBoard(board) {
  const copiedBoard = Array.from(new Array(3), () => new Array(3).fill(""));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      copiedBoard[i][j] = board[i][j];
    }
  }
  return copiedBoard;
}
