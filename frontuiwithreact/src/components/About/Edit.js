import React from "react";
import "./TblOneColStructure/tblOneColStructure.css";
import TblOneColStructure from "./TblOneColStructure/TblStructure";
import Select from "react-select";
const Edit = () => {
  const options = [
    { value: "C/C++", label: "C/C++" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Delphi", label: "Delphi" },
    { value: "Lisp", label: "Lisp" },
    { value: "Visual", label: "Visual" },
    { value: "C#", label: "C#" },
    { value: "HTML", label: "HTML" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "PHP", label: "PHP" },
    { value: "Fortran", label: "Fortran" },
  ];
  return (
    <div
      className="about__section"
      style={{ backgroundColor: "#F4F5FC", padding: "0", paddingRight: "10px" }}
    >
      <div style={{ paddingBottom: "35px", borderBottom: "2px solid #eee" }}>
        <TblOneColStructure sectionHead={"Tehsil"} />
      </div>
      <div
        className=""
        style={{
          paddingBottom: "35px",
          borderBottom: "2px solid #eee",
          paddingTop: "36px",
        }}
      >
        <h4 className="about__section-head">İxtisas üzrə bacarıqlar</h4>

        <ul className="list__group">
          <Select
            options={options}
            closeMenuOnSelect={false}
            // components={animatedComponents}
            defaultValue={options}
            placeholder={"Proqramlaşdırma"}
            isMulti
          />
        </ul>
        {/* <div className="tag-area">
          <label htmlFor="tag-input" className="label">
            {" "}
          </label>
          <ul>
            <input type="text" className="tag-input" id="tag-input" />
          </ul>
        </div> */}
      </div>
      <TblOneColStructure sectionHead={"Is tecrubesi"} />
    </div>
  );
};

export default Edit;
