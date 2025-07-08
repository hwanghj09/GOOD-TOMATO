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
      id: 'python',
      title: 'Python',
      icon: 'PY',
      description: '간단하고 읽기 쉬운 문법으로 프로그래밍을 시작하기에 완벽한 언어입니다. 데이터 분석, AI, 웹 개발까지 다양한 분야에서 활용됩니다.',
      difficulty: 1,
      duration: '4주',
      route: '/python/intro',
      recommended: true,
      categories: ['준비', '초급', '중급', '고급']
    },
    {
      id: 'algorithm',
      title: 'Algorithm',
      icon: 'AL',
      description: '문제 해결 능력을 키우는 핵심적인 방법입니다. 정렬, 탐색 등 다양한 알고리즘을 배우고 효율적인 코드를 작성하는 법을 익힙니다.',
      difficulty: 3,
      duration: '2주',
      route: '/algorithm/stack_queue',
      recommended: false,
      categories: ['자료구조', '정렬', '탐색', '그래프', 'DP', '그리디']
    },
    {
      id: 'machine_learning',
      title: 'Machine Learning',
      icon: 'ML',
      description: '데이터로부터 학습하여 예측하고 의사결정을 내리는 기술입니다. 지도/비지도 학습, 회귀, 분류 등 다양한 알고리즘을 다룹니다.',
      difficulty: 4,
      duration: '6주',
      route: '/machine_learning/intro',
      recommended: true,
      categories: ['소개', '지도 학습', '비지도 학습', '강화 학습']
    },
    {
      id: 'deep_learning',
      title: 'Deep Learning',
      icon: 'DL',
      description: '인공신경망을 기반으로 복잡한 패턴을 학습하는 인공지능의 한 분야입니다. 이미지/음성 인식, 자연어 처리 등 최신 AI 기술을 배웁니다.',
      difficulty: 5,
      duration: '8주',
      route: '/deep_learning/intro',
      recommended: true,
      categories: ['소개', '신경망', 'CNN', 'RNN', '프레임워크']
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
