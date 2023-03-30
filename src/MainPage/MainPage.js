import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game/Game';

function MainPage() {
  const nameUser = localStorage.getItem('name');
  const logout = () => {
    localStorage.removeItem('name');
  };
  return (
    <>
      <h1>
        {`Привет ${nameUser}`}
      </h1>
      <Link to="/" onClick={logout}>Выйти</Link>
      <Game />
    </>
  );
}

export default MainPage;
