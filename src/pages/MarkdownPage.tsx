// MarkdownPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownPage() {
  const { lang, docName } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!lang || !docName) return;

    fetch(`/md/${lang}/${docName}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("문서 없음");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError(false);
      })
      .catch(() => setError(true));
  }, [lang, docName]);

  if (error) {
    return <div>⚠️ 문서를 찾을 수 없습니다</div>;
  }

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPage;
