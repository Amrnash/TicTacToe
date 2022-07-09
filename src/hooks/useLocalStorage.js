import { useState, useEffect } from "react";
import { evaluateBoard } from "../utilities/evaluateBoard";
export const useLocalStorage = () => {
  const [board, setBoard] = useState(
    Array.from(new Array(3), () => new Array(3).fill(""))
  );
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState({ tie: false, win: "" });
  const [isFullCount, setIsFullCount] = useState(0);
  useEffect(() => {
    const board = JSON.parse(localStorage.getItem("board"));
    if (board) {
      const { win, player, numberOfPlays } = evaluateBoard(board);
      setBoard(board);
      setTurn("X");
    }
  }, []);
};
