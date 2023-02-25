import React from 'react';
import { Outlet } from 'react-router-dom';
import pageTracking from './pageTracking';

const About = () => {
  pageTracking();
  return (
    <div>
      <Outlet />
      <h1>About</h1>
    </div>
  );
};

export default About;
