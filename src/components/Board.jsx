import { useEffect, useState } from "react";
import { Tile } from "./Tile";
import { Button } from "./Button";
import { copyBoard } from "../utilities/copyBoard";
import { evaluateBoard } from "../utilities/evaluateBoard";
import "./Board.css";
export const Board = () => {
  const [board, setBoard] = useState(
    Array.from(new Array(3), () => new Array(3).fill(""))
  );
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState({ tie: false, win: "" });
  useEffect(() => {
    const { win, player, numberOfPlays } = evaluateBoard(board);
    console.log(numberOfPlays.count)
    if (numberOfPlays.count === 9 && !gameOver.win) setGameOver({ tie: true, win: "" });
    if (win) setGameOver({ tie: false, win: player });
  }, [turn, board]);
  const handleClickTile = (e) => {
    if (!e.target.classList.contains("tile")) return;
    const tileIdx = e.target.getAttribute("data-idx").split(",");
    const x = tileIdx[0];
    const y = tileIdx[1];
    const currentBoard = copyBoard(board);
    if (turn === "X") {
      currentBoard[x][y] = "X";
      setBoard(currentBoard);
      setTurn("O");
    } else {
      currentBoard[x][y] = "O";
      setBoard(currentBoard);
      setTurn("X");
    }
  };
  const handleReset = (e) => {
    const newBoard = Array.from(new Array(3), () => new Array(3).fill(""));
    setGameOver({ tie: false, win: ""})
    setBoard(newBoard)
    setTurn("X");
  }
  return (
    <>
    <div className="board" onClick={handleClickTile}>
      {gameOver.tie && <h1 className="result">Draw!</h1>}
      {gameOver.win && <h1 className="result">Player {gameOver.win} Wins! </h1>}
      {board.map((row, i) => {
        return (
          <div className="row" key={i}>
            {board[i].map((tileValue, j) => {
              return (
                <Tile
                  key={j}
                  value={board[i][j]}
                  idx={[i, j]}
                  gameOver={gameOver.win || gameOver.tie}
                />
              );
            })}

          </div>
        );
      })}
      <Button text={"Reset"} onClick={handleReset}  />
    </div>
    </>
  );
};
