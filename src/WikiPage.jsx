import React, { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "./data";

const WikiPage = () => {
  const [search, setSearch] = useState("");

  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem"}}>Wiki Articles</h1>
      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      {filtered.map(article => (
        <div key={article.id} style={{ marginBottom: "1rem" }}>
          <Link to={`/article/${article.id}`} style={{ fontWeight: "bold" }}>
            {article.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WikiPage;
