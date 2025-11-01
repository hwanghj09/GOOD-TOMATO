import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // 언어별 문서 목록 (실제로는 API에서 가져올 수 있음)
  const docMenus: DocMenus = {
    c: [
      { name: "variable", title: "변수", category: "기본" },
      {name : "list", title: "리스트", category: "기본"},
      {name : "pointer", title: "포인터", category: "기본"},
      {name : "for", title: "for", category: "기본"},

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
      python: "Python"
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
            {content.split('[AD]').map((part, index) => (
              <div key={index}>
                <ReactMarkdown>{part}</ReactMarkdown>
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