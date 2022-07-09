import { useState, useEffect } from "react";
import { evaluateBoard } from "../utilities/evaluateBoard";
export const useLocalStorage = () => {
  const [board, setBoard] = useState(
    Array.from(new Array(3), () => new Array(3).fill(""))
  );
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState({ tie: false, win: "" });
  useEffect(() => {
    const board = JSON.parse(localStorage.getItem("board"));
    const turn = JSON.parse(localStorage.getItem("turn"));
    if (board && turn) {
      const { win, player, numberOfPlays } = evaluateBoard(board);
      setBoard(board);
      setTurn(turn);
      if (numberOfPlays.count === 9 && !gameOver.win)
        setGameOver({ tie: true, win: "" });
      if (win) setGameOver({ tie: false, win: player });
    }
  }, []);
  return { board, turn, gameOver, setBoard, setGameOver, setTurn };
};
