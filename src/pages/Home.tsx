import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/home.css';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="Home">
      <h1>
        Good <span className="tomato">Tomato</span>
      </h1>
      
      <p className="subtitle">
        프로그래밍 언어를 배우는 가장 쉽고 체계적인 방법
        <br />
        지금 바로 시작해보세요!
      </p>
      <p className="description-text">
        Good Tomato는 초보자를 위한 프로그래밍 학습 플랫폼입니다.
      </p>
      
      <button 
        className="start-button animate-fadeInUp" 
        onClick={() => navigate("/Menu")}
      >
        시작하기
      </button>  
      <div className="footer-info">
        <p>&copy; 2025 Tomato Academy by Hwang Hyeon jun. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Home;