import React, { useEffect, useState } from 'react'
import classes from './Game.module.css'
import Turn from './Score/Turn'
import Result from './Score/Result'
import Cell from './Cells/Cell'
import miniMax from './MiniMax/miniMax.js'

function Game () {
  const [gameStatus, setGameStatus] = useState({
    gameOver: false,
    whoIsWin: 0,
    whoIsTurn: 0,
    turnCounter: 0
  })
  const [gameLayout, setGameLayout] = useState(['', '', '', '', '', '', '', '', ''])
  const winOptions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  function checkWin () {
    for (let i = 0; i < winOptions.length; i += 1) {
      const [a, b, c] = winOptions[i]
      if (gameLayout[a] === 'X' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus((prevState) => {
          return {
            ...prevState,
            gameOver: true,
            whoIsWin: 1
          }
        })
        return true
      }
      if (gameLayout[a] === 'O' && gameLayout[a] === gameLayout[b] && gameLayout[b] === gameLayout[c]) {
        setGameStatus(prevState => ({
          ...prevState,
          gameOver: true,
          whoIsWin: 2
        }))
        return true
      }
    }
    if (gameStatus.turnCounter === 9) {
      setGameStatus((prevState) => ({
        ...prevState,
        gameOver: true,
        whoIsWin: 0
      }))
      return true
    }
    return false
  }

  function botTurn () {
    const bestMove = miniMax([...gameLayout], 'O').index
    setGameLayout((prevState) => {
      prevState[bestMove] = 'O'
      return (prevState)
    })
    endOfTurn()
  }

  function handleClick (index) {
    if (gameLayout[index] !== '' || gameStatus.gameOver || gameStatus.whoIsTurn) return
    setGameLayout(() => {
      const newArray = gameLayout
      newArray[index] = 'X'
      return [...newArray]
    })
    endOfTurn()
  }

  function endOfTurn () {
    setGameStatus((prevState) => ({
      ...prevState,
      turnCounter: prevState.turnCounter + 1,
      whoIsTurn: !prevState.whoIsTurn
    }))
  }

  function setNewGame () {
    setGameStatus({
      gameOver: false,
      whoIsWin: 0,
      whoIsTurn: 0,
      turnCounter: 0
    })
    setGameLayout(['', '', '', '', '', '', '', '', ''])
  }

  useEffect(() => {
    if (checkWin()) return
    if (gameStatus.whoIsTurn) setTimeout(botTurn, 700)
  }, [gameLayout, gameStatus.whoIsTurn])

  return (
    <div className={classes.substrate}>
      <div className={classes.gameBackground}>
        {gameStatus.gameOver ? <Result whoIsWin={gameStatus.whoIsWin}/> : <Turn whoIsTurn={gameStatus.whoIsTurn}/>}
        <div className={classes.layout}>
          {gameLayout.map((layout, index) => (
            <Cell
              layout={layout}
              click={handleClick}
              key={index}
              index={index}
            />
          ))}
        </div>
        <span
          className={!gameStatus.gameOver ? classes.restart : classes.restartActive}
          onClick={setNewGame}
        >
            RESTART
        </span>
      </div>
    </div>
  )
}

export default Game
