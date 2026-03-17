import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import AdComponent from './AdComponent';
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
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth > 768;
  });

  // 언어별 문서 목록 (실제로는 API에서 가져올 수 있음)
  const docMenus: DocMenus = {
    c: [
        { name: "variable", title: "변수", category: "기본" },
        { name: "list", title: "리스트", category: "기본" },
        { name: "pointer", title: "포인터", category: "기본" },
        { name: "scanf", title: "입력", category: "기본" },
        { name: "if", title: "조건문", category: "기본" },
        { name: "for", title: "반복문 for", category: "기본" },
        { name: "while", title: "반복문 while", category: "기본" },
        { name: "function", title: "함수", category: "기본" },
        {name : "productmanager", title : "상품관리프로그램", category : "기본"},
      ],
    linux: [
      { name: "intro", title: "리눅스 소개", category: "기본" },
      { name: "windows-diff", title: "Windows와 차이점", category: "기본" },
      { name: "dir-structure", title: "디렉토리의 구조", category: "기본" },
      { name: "path-types", title: "상대/절대 경로", category: "기본" },
      { name: "pwd", title: "pwd", category: "명령어" },
      { name: "ls", title: "ls", category: "명령어" },
      { name: "mv", title: "mv", category: "명령어" },
      { name: "cd", title: "cd", category: "명령어" },
      { name: "mkdir", title: "mkdir", category: "명령어" },
      { name: "touch", title: "touch", category: "명령어" },
      { name: "nano", title: "nano", category: "명령어" },
      { name: "gcc-install", title: "GCC 설치", category: "C 언어" },
      { name: "c-run", title: "C 언어 실행", category: "C 언어" },
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
    fetch(`/md/${lang}/${docName}.md?t=${Date.now()}`, { cache: "no-store" })
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

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getLanguageTitle = (lang: string | undefined): string => {
    const titles: { [key: string]: string } = {
      python: "Python",
      linux: "Linux"
    };
    return (lang && titles[lang]) ? titles[lang] : (lang?.toUpperCase() || "문서");
  };

  return (
    <div className={`markdown-container ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {!sidebarOpen && (
        <button
          className="sidebar-open-toggle"
          onClick={toggleSidebar}
          aria-label="사이드바 열기"
        >
          ☰ 
        </button>
      )}

      <div
        className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      
      <nav className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{getLanguageTitle(lang)} 문서</h2>
          <Link to="/Menu" className="back-to-menu">
            ← 메뉴로 돌아가기
          </Link>
          <button
            className="sidebar-toggle"
            onClick={toggleSidebar}
            aria-label="사이드바 토글"
            aria-pressed={sidebarOpen}
          >
            <span className="toggle-icon">☰</span>
            <span className="toggle-label">{sidebarOpen ? "닫기" : "메뉴"}</span>
          </button>
          
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
            {content.split('[AD]').map((part, index) => (
              <div key={index}>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {part}
                </ReactMarkdown>

                {index < content.split('[AD]').length - 1 && <AdComponent />}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default MarkdownPage;
