import React from 'react';
import { BrowserRouter ,Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import {ArticleCreation} from './components/ArticleCreation';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <Link to="/">TOPページ</Link>
        <Link to="/article">記事作成</Link>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<ArticleCreation />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
