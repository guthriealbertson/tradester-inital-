import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Outlet />
      <h1>About</h1>
    </div>
  );
};

export default About;
