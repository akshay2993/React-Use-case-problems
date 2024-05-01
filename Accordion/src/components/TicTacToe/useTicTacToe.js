import { useState } from "react";

const initialBoard = Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setboard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WINNINGPATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function getCurrentStatus(board) {
    const winner = getWinner(board)
    console.log(winner)
    if(!winner ){
      console.log('not winner')
       return isXNext ? 'Next Player: X':'Next Player: O'
    }
    return `Player ${winner} wins!`
  }

  function getWinner(currentBoard) {
    for (let i = 0; i < WINNINGPATTERNS.length; i++) {
      const [a, b, c] = WINNINGPATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null
  }

  function handleClick(index) {
    //check winner
    const winner = getWinner(board);
    if (winner || board[index]){ 
        console.log(winner)
        return
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setboard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setboard(initialBoard);
    setIsXNext(true);
  }

  return { board, getCurrentStatus, getWinner, resetGame, handleClick };
};

export default useTicTacToe;
