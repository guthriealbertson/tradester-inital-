import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./style.css";
import About from "./About";
import Blog from "./Blog";
import Post from "./Post";

import bull from "/workspaces/tradester-inital-/src/bull.png";

import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
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
  return (
    <div>
      <div className="home">
        <h1>Welcome to tradester</h1>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <h1>
          Tradester <img src={bull} alt="Logo" />{" "}
        </h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
