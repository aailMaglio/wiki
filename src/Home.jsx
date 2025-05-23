// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { articles } from "./data";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-title"> Wiki Articles</h1>
    <div className="article-grid">
      {articles.map((article) => (
        <Link
          to={`/article/${article.id}`}
          key={article.id}
          className="article-card"
        >
          <h2>{article.title}</h2>
          <p>Read more →</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
