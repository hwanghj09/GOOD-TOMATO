import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import './markdown.css';


function MarkdownPage() {
  const { lang, docName } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lang || !docName) return;

    fetch(`/md/${lang}/${docName}.md`)
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

  if (loading) return <div>⏳ 문서를 불러오는 중...</div>;

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1>🚫 404 - 페이지를 찾을 수 없습니다</h1>
        <p>
          문서 <code>{`/md/${lang}/${docName}.md`}</code>가 존재하지 않습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPage;
