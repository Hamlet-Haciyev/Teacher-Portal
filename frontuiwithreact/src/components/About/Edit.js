import React, { useRef, useState } from "react";
import "../../App.css";
import "./About.css";
import AddData from "./AddData";
import Techinfo from "../Techinfo";
import Select from "react-select";
const Edit = () => {
  const inputRef = useRef();
  // const [category, setCategory] = useState("");
  const [list, setList] = useState([
    {
      date: "1975-1981",
      position:
        "Azərbaycan Dövlət Neft və Sənaye Universiteti - Avtomatika və telemexanika, elektrik mühəndisi",
      className: "editList__item",
      page: "aboutEdit",
    },
    {
      date: "29.12.1997",
      position:
        "Texniki Elmlər Namizədi - İnformasiya işlənməsi və idarəetmə sistemləri",
      className: "editList__item",
      page: "aboutEdit",
    },
    {
      date: "02.11.2001",
      position: "Dosent” elmi adı",
      className: "editList__item",
      page: "aboutEdit",
    },
  ]);
  const [view, setView] = useState(false);
  const [obj, setObj] = useState({ position: "", date: "" });
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
  function handleInputChange(e) {
    const newData = {
      date: "02.11.2001",
      position: inputRef.current.value,
      className: "editList__item",
      page: "aboutEdit",
    };
    setObj(newData);
  }
  function handleChangeView(e) {
    setView(!view);
  }
  function handleAddData() {
    // setCategory(title);
    setList([...list, obj]);
    setView(!view);
    setObj({ position: "", date: "" });
    // console.log(category);
  }
  return (
    <div
      className="about__section"
      style={{ backgroundColor: "#F4F5FC", padding: "0", paddingRight: "10px" }}
    >
      <div
        className=""
        style={{ paddingBottom: "35px", borderBottom: "2px solid #eee" }}
      >
        <h4 className="about__section-head about__sect__edit__head">Təhsil</h4>

        <ul className="list__group">
          {list.map((ls, index) => (
            <Techinfo key={index} {...ls} />
          ))}
        </ul>
        <AddData
          // title={"tehsil"}
          handleInputChange={handleInputChange}
          handleAddData={handleAddData}
          obj={obj}
          view={view}
          inputRef={inputRef}
          handleChangeView={handleChangeView}
        />
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
      <div className="" style={{ paddingTop: "36px" }}>
        <h4 className="about__section-head">Is tecrubesi</h4>

        <ul className="list__group">
          {list.map((ls, index) => (
            <Techinfo key={index} {...ls} />
          ))}
        </ul>
        {/* <AddData
          // title={"tecrube"}
          handleInputChange={handleInputChange}
          handleAddData={handleAddData}
          obj={obj}
          view={view}
          inputRef={inputRef}
          handleChangeView={handleChangeView}
        /> */}
      </div>
    </div>
  );
};

export default Edit;
