import React, { useEffect, useState } from 'react';
import classes from './Game.module.css';

function Game() {
  const [gameStatus, setGameStatus] = useState([0, 0]);
  const [turnStatus, setTurnStatus] = useState(0);
  const [gameLayout, setGameLayout] = useState(['', '', '', '', '', '', '', '', '']);
  const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function checkWin() {
    for (let i = 0; i < winOptions.length; i += 1) {
      const [a, b, c] = winOptions[i];
      if (gameLayout[a] === 'X' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus([1, 1]);
        return true;
      }
      if (gameLayout[a] === 'O' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus([1, 2]);
        return true;
      }
    }
    return false;
  }
  function botTurn() {
    for (let i = 0; i < 9; i += 1) {
      if (gameLayout[i] === '') {
        setGameLayout(() => {
          const newArray = gameLayout;
          newArray[i] = 'O';
          return [...newArray];
        });
        setTurnStatus(0);
        return;
      }
    }
  }
  function handleClick(index) {
    if (gameLayout[index] !== '' || gameStatus[0] === 1) return;
    setGameLayout(() => {
      const newArray = gameLayout;
      newArray[index] = 'X';
      return [...newArray];
    });
    setTurnStatus(1);
  }
  function setNewGame() {
    setGameStatus([0, 0]);
    setGameLayout(['', '', '', '', '', '', '', '', '']);
  }
  useEffect(() => {
    if (checkWin()) return;
    if (turnStatus === 1) botTurn();
  }, [gameLayout, turnStatus]);
  return (
    <>
      <div className={classes.layout}>
        {
          gameLayout.map((layout, index) => (
            <span onClick={() => handleClick(index)} key={`0${index}`}>
              {layout}
            </span>
          ))
        }
      </div>
      {gameStatus[0] === 1 ? <h1>{gameStatus[1] === 1 ? 'Игра окончена, победил игрок' : 'Игра окончена, победил бот'}</h1> : null}
      {gameStatus[0] === 1 ? <button type="submit" onClick={setNewGame}>Начать заного</button> : null}
    </>

  );
}

export default Game;
