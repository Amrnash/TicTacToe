export function evaluateBoard(board) {
  // check rows
  if (checkRows(board).win)
    return { win: true, player: checkRows(board).player };
  // check columns
  if (checkColumns(board).win)
    return { win: true, player: checkColumns(board).player };
  //check diagonal
  if (checkDiagonals(board).win)
    return { win: true, player: checkDiagonals(board).player };
  // if (isWin) return true;
  return { win: false, player: null };
}
function checkRows(board) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "X") {
        countX++;
      }
      if (board[i][j] === "O") {
        countO++;
      }
    }
    if (countX === 3) {
      return { win: true, player: "X" };
    }
    if (countO === 3) return { win: true, player: "O" };
    countX = 0;
    countO = 0;
  }
  return { win: false, player: null };
}
function checkColumns(board) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === "X") {
        countX++;
      }
      if (board[j][i] === "O") {
        countO++;
      }
    }
    if (countX === 3) {
      return { win: true, player: "X" };
    }
    if (countO === 3) return { win: true, player: "O" };
    countX = 0;
    countO = 0;
  }
  return { win: false, player: null };
}

function checkDiagonals(board) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === "X") countX++;
    if (board[i][i] === "O") countO++;
  }
  if (countX === 3) return { win: true, player: "X" };
  if (countO === 3) return { win: true, player: "O" };
  countX = 0;
  countO = 0;
  let j = board.length;
  for (let i = 0; i < board.length; i++) {
    if (board[i][j] === "X") countX++;
    if (board[i][j] === "O") countO++;
    j--;
  }
  if (countX === 3) return { win: true, player: "X" };
  if (countO === 3) return { win: true, player: "O" };
  return { win: false, player: null };
}
