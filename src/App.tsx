/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter ,Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { useState } from 'react';
import {ArticleCreation} from './components/ArticleCreation';
import { css } from '@emotion/react';


const navStyle = css`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const linkStyle = css`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #04D9FF;
  }
`;


// ダミーデータ
export interface Post {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'はじめまして！', content: '今日から日記を始めます！' },
    { id: 2, title: 'おすすめのカフェ', content: 'Hoge市のカフェはおすすめです！' },
    { id: 3, title: '勉強始めます', content: 'Reactの勉強始めます！' },
  ]);

  return (
    <>
    <div className="App">
      <nav css={navStyle}>
        <Link to="/" css={linkStyle}>TOPページ</Link>
        <Link to="/article" css={linkStyle}>記事作成</Link>
      </nav>

    </div>
    <Routes>
      <Route path="/" element={<Home posts={posts} />} />
      <Route path="/article" element={<ArticleCreation posts={posts} setPosts={setPosts} />} />
    </Routes>
    </>
  );
}

export default App;
