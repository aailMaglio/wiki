import React from "react";
import { Link } from "react-router-dom";
import { articles } from "./data";
import "./Home.css";
import ThemeToggle from './components/ThemeToggle';

const Home = () => (
  <div
    id="root"
    className="max-w-4xl mx-auto p-8 home-root bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
  >
    <div
      className="home-container min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-500
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8"
    >
      <h1 className="home-title text-white dark:text-white">Wiki Articles</h1>

      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="article-grid">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="group p-6 rounded-xl 
                       bg-white/10 border border-white/20 shadow-xl backdrop-blur-md 
                       transition-transform transform hover:scale-105 hover:shadow-2xl 
                       text-white dark:bg-white/5 dark:border-white/10 dark:text-white"
          >
            <h2 className="text-xl font-bold mb-2 group-hover:underline">
              {article.title}
            </h2>
            <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
