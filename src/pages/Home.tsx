import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ()=> {
    const navigate = useNavigate();
  return (
    <div className="Home">
      <h1>THis is Home Page 데쓰쓰</h1>
    </div>
  );
}

export default Home;
