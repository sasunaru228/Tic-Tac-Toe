import React, { useEffect, useState } from 'react';
import classes from './Game.module.css';

function Game() {
  const [gameStatus, setGameStatus] = useState([0, 0]);
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
    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (let i = 0; i < winOptions.length; i += 1) {
      const [a, b, c] = winOptions[i];
      if (gameLayout[a] === 'X' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus([1, 1]);
        return;
      }
      if (gameLayout[a] === 'O' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus([1, 2]);
        return;
      }
    }
  }
  function botTurn(index) {
    for (let i = 0; i < 9; i += 1) {
      if (gameLayout[i] === '' && i !== index) {
        setGameLayout(() => {
          const newArray = gameLayout;
          newArray[i] = 'O';
          return [...newArray];
        });
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
    botTurn(index);
  }
  function setNewGame() {
    setGameStatus([0, 0]);
    setGameLayout(['', '', '', '', '', '', '', '', '']);
  }
  useEffect(() => {
    checkWin();
  }, [gameLayout]);
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
