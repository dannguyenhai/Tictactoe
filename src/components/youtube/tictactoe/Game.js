import React, { useState } from "react";
import Board from "./Board";
import "./gameStyle.css";
import { calculateWinner } from "../../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9)
  .fill(null));
  const [xIsNext, setXIsNext]= useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if(winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  const handleReset = () => {
    setBoard(Array(9)
    .fill(null));
    setXIsNext(true);
  }
  return (
    <div className="container">
      <Board cells={board} onClick={handleClick}></Board>
    {winner && <div className="game-winner"> Winner is {winner}</div>}
    <button className="game-reset" onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default Game;
