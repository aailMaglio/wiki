import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ArticleDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/articles/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Article not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("# 404\nArticle not found."));
  }, [id]);

  return (
  <div id="root" className="article-detail-root bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
      <Link to="/"className="mt-4 inline-block hover:underline text-black-500 dark:text-white-300">
        ← Back to Wiki
      </Link>
    </div>
  </div>
  );
};

export default ArticleDetail;
