import React from 'react'
import { Link } from 'react-router-dom'
import Game from './Game/Game'
import Mockup from './Mockup/Mockup'
import classes from './MainPage.module.css'

function MainPage () {
  const nameUser = localStorage.getItem('name')
  const logout = () => {
    localStorage.removeItem('name')
  }
  return (
    <>
      <div className={classes.header}>
        <span className={classes.userName}>
          {`User Name:  ${nameUser}`}
        </span>
        <Link className={classes.exit} to="/" onClick={logout}>Exit</Link>
      </div>
      <Game />
      <Mockup />
    </>
  )
}

export default MainPage
