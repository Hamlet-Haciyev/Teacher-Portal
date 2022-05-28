import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import EditAbout from "./About/Edit";
import Science from "./Science/Science";
import EditScience from "./Science/Edit";
import Achievement from "./Achievement/Achievement";
import EditAchi from "./Achievement/Edit";
// import Edit from "./About/Edit";
const Education = () => {
  return (
    <>
      <div className="education__wrapper bg-white">
        <div className="bg-white">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/about/edit" element={<EditAbout />}></Route>
            <Route path="/science" element={<Science />}></Route>
            <Route path="/science/edit" element={<EditScience />}></Route>
            <Route path="/achievement" element={<Achievement />}></Route>
            <Route path="/achievement/edit" element={<EditAchi />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Education;
