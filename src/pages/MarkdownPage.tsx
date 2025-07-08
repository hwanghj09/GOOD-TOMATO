import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import './css/markdown.css';

interface DocItem {
  name: string;
  title: string;
  category: string;
}

type DocMenus = {
  [key: string]: DocItem[];
};

type GroupedDocs = {
  [category: string]: DocItem[];
};

function MarkdownPage() {
  const { lang, docName } = useParams<{ lang: string; docName: string }>();
  const location = useLocation();
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // 언어별 문서 목록 (실제로는 API에서 가져올 수 있음)
  const docMenus: DocMenus = {
    python: [
      { name: "intro", title: "Python 소개", category: "준비" },
      { name: "feature", title: "Python 특징", category: "준비" },
      { name: "install", title: "Python 설치", category: "준비" },
      { name: "io", title: "입출력", category: "초급" },
      { name: "variable", title: "변수와 데이터 타입", category: "초급" },
      { name: "if", title: "조건문", category: "초급" },
      { name: "for", title: "반복문 - for", category: "초급" },
      { name: "while", title: "반복문 - while", category: "초급" },
      { name: "list", title: "리스트", category: "초급" },
      { name: "tuple", title: "튜플", category: "초급" },
      { name: "set", title: "세트", category: "초급" },
      { name: "dictionary", title: "딕셔너리", category: "초급" },
      { name: "function", title: "함수", category: "초급" },
      { name: "import", title: "모듈과 import", category: "초급" },
      { name: "file_io", title: "파일 입출력", category: "중급" },
      { name: "lambda_map_filter", title: "람다, map, filter", category: "중급" },
      { name: "regex", title: "정규 표현식", category: "중급" },
      { name: "class", title: "클래스", category: "중급" },
      { name: "exception", title: "예외 처리", category: "중급" },
      { name: "decorator", title: "데코레이터", category: "중급" },
      { name: "module", title: "모듈과 패키지", category: "중급" },
      { name: "generator", title: "제너레이터", category: "고급" },
      { name: "asyncio", title: "비동기 프로그래밍", category: "고급" },
      { name: "metaclass", title: "메타클래스", category: "고급" },
      
    ],
    algorithm: [
      { name: "stack_queue", title: "스택과 큐", category: "자료구조" },
      { name: "bubble_sort", title: "버블 정렬", category: "정렬" },
      { name: "selection_sort", title: "선택 정렬", category: "정렬" },
      { name: "insertion_sort", title: "삽입 정렬", category: "정렬" },
      { name: "merge_sort", title: "병합 정렬", category: "정렬" },
      { name: "quick_sort", title: "퀵 정렬", category: "정렬" },
      { name: "linear_search", title: "순차 탐색", category: "탐색" },
      { name: "binary_search", title: "이진 탐색", category: "탐색" },
      { name: "bfs_dfs", title: "BFS와 DFS", category: "그래프" },
      { name: "dynamic_programming", title: "동적 프로그래밍", category: "DP" },
      { name: "greedy", title: "그리디 알고리즘", category: "그리디" }
    ],
    machine_learning: [
      { name: "intro", title: "머신러닝 소개", category: "소개" },
      { name: "examples", title: "머신러닝 예시", category: "예시" }
    ],
    deep_learning: [
      { name: "intro", title: "딥러닝 소개", category: "소개" },
      { name: "examples", title: "딥러닝 예시", category: "예시" }
    ]
  };

  const currentDocs = (lang && docMenus[lang]) ? docMenus[lang] : [];
  
  // 카테고리별로 문서 그룹핑
  const groupedDocs: GroupedDocs = currentDocs.reduce((acc: GroupedDocs, doc: DocItem) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  useEffect(() => {
    if (!lang || !docName) return;

    setLoading(true);
    fetch(`/md/${lang}/${docName}.md?t=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error("파일 없음");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [lang, docName]);

  // ✅ 스크롤 맨 위로 이동하는 부분
useEffect(() => {
  window.scrollTo(0, 0);
}, [docName]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getLanguageTitle = (lang: string | undefined): string => {
    const titles: { [key: string]: string } = {
      python: "Python",
      javascript: "JavaScript", 
      java: "Java",
      cpp: "C++",
      csharp: "C#"
    };
    return (lang && titles[lang]) ? titles[lang] : (lang?.toUpperCase() || "문서");
  };

  return (
    <div className="markdown-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{getLanguageTitle(lang)} 문서</h2>
          <Link to="/Menu" className="back-to-menu">
            ← 메뉴로 돌아가기
          </Link>
          
        </div>
        
        <div className="sidebar-nav">
          {Object.entries(groupedDocs).map(([category, docs]) => (
            <div key={category} className="nav-section">
              <h3 className="nav-section-title">{category}</h3>
              <hr></hr>
              <ul className="nav-list">
                {docs.map((doc: DocItem) => (
                  <li key={doc.name} className="nav-item">
                    <Link 
                      to={`/${lang}/${doc.name}`}
                      className={`nav-link ${docName === doc.name ? 'active' : ''}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <main className="content-area">
        {loading && (
          <div className="loading">
            ⏳ 문서를 불러오는 중...
          </div>
        )}

        {error && (
          <div className="error">
            <h1>🚫 404 - 페이지를 찾을 수 없습니다</h1>
            <p>
              문서 <code>{`/md/${lang}/${docName}.md`}</code>가 존재하지 않습니다.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </main>
    </div>
  );
}

export default MarkdownPage;