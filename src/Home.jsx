import React from "react";
import { Link } from "react-router-dom";
import { articles } from "./data";
import "./Home.css";
import ThemeToggle from './components/ThemeToggle';
import { root } from "postcss";

const Home = () => (
<div id="root" className="home-root bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500">
  <div className="home-container min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-500 p-8">
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
</div>
);

export default Home;
