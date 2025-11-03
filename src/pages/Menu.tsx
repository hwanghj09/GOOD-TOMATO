import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const headerMessages = [
  "Pretty Tomato",
  "Good Tomato",
  "ajtwoddl Tomato",
  "Stylish Tomato",
  "Handsome Tomato",
  "Smart Tomato",
  "Lovely Tomato",
  "Powerful Tomato",
  "Cute Tomato",
  "Happy Tomato",
  "Crazy Tomato",
  "Serious Tomato",
  "Charming Tomato",
  "Legendary Tomato",
  "Dancing Tomato",
  "Coding Tomato",
  "Shy Tomato",
  "Cool Tomato",
  "Magic Tomato",
  "Mystery Tomato"
];


  // 랜덤 메시지 상태, 처음 렌더링 시 한 번만 랜덤 선택
  const [headerText, setHeaderText] = useState(headerMessages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * headerMessages.length);
    setHeaderText(headerMessages[randomIndex]);
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  const languages = [
    
    {
      id: 'c',
      title: 'C 언어',
      icon: 'C',
      description: 'C 언어는 시스템 프로그래밍과 임베디드 시스템에서 널리 사용되는 강력한 저수준 언어입니다. 효율적인 메모리 관리와 빠른 실행 속도를 제공합니다.',
      difficulty: 2,
      duration: '4주',
      route: '/c/variable',
      recommended: true,
      categories: ['초급', '중급', '고급']
    }
  ];

  const renderDifficultyDots = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`dot ${i < level ? 'active' : ''}`}
      ></span>
    ));
  };

  return (
    <div className="Menu">
      <div className="header animate-fadeInUp">
        <h1>{headerText}</h1>
        <p className="subtitle">배우고 싶은 것을 선택하세요</p>
        <p className="description">
          각 언어는 기초부터 실전까지 체계적으로 구성되어 있습니다. 
          본인의 목표와 관심사에 맞는 언어를 선택해보세요.
        </p>
      </div>

      <div className="language-grid">
        {languages.map((lang, index) => (
          <div
            key={lang.id}
            className={`language-card animate-fadeInUp animate-delay-${index + 1}`}
            onClick={() => navigate(lang.route)}
          >
            {lang.recommended && (
              <div className="recommended-badge">추천!</div>
            )}

            <div className={`language-icon ${lang.id}-icon`}>
              {lang.icon}
            </div>

            <h2 className="language-title">{lang.title}</h2>

            <p className="language-description">
              {lang.description}
            </p>

            <div className="learning-info">
              <div className="difficulty">
                <span>난이도:</span>
                <div className="difficulty-dots">
                  {renderDifficultyDots(lang.difficulty)}
                </div>
              </div>
              <div className="duration">
                예상 학습기간: {lang.duration}
              </div>
            </div>
            <div className="categories">
              {lang.categories.map(category => (
                <span key={category} className="category-tag">{category}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
