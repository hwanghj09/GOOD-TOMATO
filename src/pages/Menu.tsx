import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ()=> {
    const navigate = useNavigate();
  return (
    <div className="Menu">
      <h1>let's go</h1>
      <button onClick={() => navigate("/python/intro")}>Python</button>
      <button onClick={() => navigate("/python/io")}>시험</button>
      <button onClick={() => navigate("/js/intro")}>Js</button>
    </div>
  );
}

export default Menu;
