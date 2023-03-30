import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Authorization from './Authorization/Authorization';
import MainPage from './MainPage/MainPage';

function App() {
  const navigate = useNavigate();
  const nameUser = localStorage.getItem('name');
  const route = nameUser ? '/main' : '/';
  useEffect(() => {
    navigate(route);
    // if (localStorage.getItem('name')) {
    //   navigate('/main');
    // } else {
    //   navigate('/');
    // }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
