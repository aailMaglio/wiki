// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ArticleDetail from "./ArticleDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  </Router>
);

export default App;
