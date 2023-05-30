import React, { useState } from 'react'
import classes from './Authorization.module.css'

function Authorization () {
  const [login, setLogin] = useState('')
  const [submitting, setSubmitting] = useState(true)

  function enterLogin () {
    localStorage.setItem('name', login)
  }

  function checkLogin (loginEnter) {
    setLogin(loginEnter.trim())
    if (loginEnter.trim() === '') {
      setSubmitting(true)
      return
    }
    setSubmitting(false)
  }

  return (
    <div className={classes.main}>
      <span className={classes.logo}>MiniGame</span>
      <form onSubmit={() => enterLogin()}>
        <input
          className={classes.inputLogo}
          type="text"
          value={login}
          onChange={(e) => checkLogin(e.target.value)}
        />
        <button
          className={classes.confirm}
          disabled={submitting}
          type="submit"
          onSubmit={() => enterLogin()}
          to={login.trim() !== '' ? '/main' : '/zazazoo'}>ENTER
        </button>
      </form>
    </div>
  )
}

export default Authorization
