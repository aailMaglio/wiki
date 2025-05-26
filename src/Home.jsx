import React from "react";
import { Link } from "react-router-dom";
import { articles } from "./data";
import "./Home.css";
import ThemeToggle from './components/ThemeToggle';

const Home = () => (
  <div
    id="root"
    className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
  >
    <div
      className="w-full max-w-3xl mt-12 p-8 border-4 border-white/30 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-900/80 shadow-xl"
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
