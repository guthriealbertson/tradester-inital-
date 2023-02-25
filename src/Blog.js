import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import pageTracking from './pageTracking';

const Blog = () => {
  pageTracking();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Blog</h1>
      <button onClick={() => navigate('/blog/post')}>Post content</button>
      <Outlet />
    </div>
  );
};

export default Blog;
