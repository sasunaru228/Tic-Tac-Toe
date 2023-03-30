import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Authorization.module.css';

function Authorization() {
  const [login, setLogin] = useState('');
  const userName = localStorage.getItem('name');
  function enterLogin() {
    if (login.trim() !== '') {
      localStorage.setItem('name', login);
      setLogin('');
    } else alert('слишком короткий никнейм');
  }

  return (
    <div className={classes.main}>
      <span className={classes.logo}>MiniGame</span>
      <input
        className={classes.inputLogo}
        type="text"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <Link className={classes.enter} onClick={() => enterLogin()} to={login.trim() !== '' ? '/main' : '/'}>ENTER</Link>

      {userName ? <h1>{userName}</h1> : null}
    </div>
  );
}

export default Authorization;
