import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Science from "./Science";
import Achievement from "./Achievement";
const Education = () => {
  return (
    <div className="education__wrapper bg-white">
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/science" element={<Science />}></Route>
          <Route path="/achievement" element={<Achievement />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Education;
