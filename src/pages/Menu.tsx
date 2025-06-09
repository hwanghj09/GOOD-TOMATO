import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ()=> {
    const navigate = useNavigate();
  return (
    <div className="Menu">
      <h1>THis is start_menu Page 데쓰쓰</h1>
      <button onClick={() => navigate("/python/preparation")}>Python</button>
      <button onClick={() => navigate("/js/preparation")}>Js</button>
    </div>
  );
}

export default Menu;
