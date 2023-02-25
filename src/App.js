import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import About from './About';
import Blog from './Blog';
import Post from './Post';
import pageTracking from './pageTracking';

import bull from '/bull.png';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />}>
            <Route path="post" element={<Post />}></Route>
          </Route>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const HomePage = () => {
  pageTracking();
  return (
    <div>
  <div className="header">
    <h1>Tradester <img src={bull} alt="Logo" /> </h1>
    
    <div className="links">
      <button>Login</button>
      <button>About</button>
    </div>
    </div>
</div>
  );
};

const Layout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Outlet />
      Footer
    </div>
  );
};
