import { useState } from "react";
import useTicTacToe from "./useTicTacToe";
import "./style.css";

const TicTacToe = () => {
  const { board, getCurrentStatus, getWinner, resetGame, handleClick } =
    useTicTacToe();

  return (
    <div className="main-wrapper">
      <div className="game-board">
        {board &&
          board.map((b, index) => {
            return (
              <button
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
                disabled={b !== null}
                >{b}</button>
            );
          })}
      </div>
      <p style={{color: 'white'}}>{getCurrentStatus(board)}</p>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default TicTacToe;
