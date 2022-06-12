import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./Achievement.css";
import TblStructure from "./TblStructure";
const Edit = () => {
  const inputRef = useRef([]);
  const [inputListValue, setInputListValue] = useState([
    {
      title: "Diplom",
      tblHead: [
        "Elmi dərəcə",
        "Universitet",
        "İxtisas",
        "Diplomun kateqoriyası",
      ],
      tblData: [
        "Dosent",
        "Azərbaycan Dövlət Neft və Sənaye Universiteti",
        "İnformasiya Texnologiyaları",
        "Fərqlənmə",
      ],
      colCount: 4,
    },
    {
      title: "Sertifikat",
      tblHead: ["Sertifikatın adı", "Sertifikatın linki "],
      tblData: [
        "Cisco Networking Academy",
        "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=2%3A5",
      ],
      colCount: 2,
    },
    {
      title: "Proyekt",
      tblHead: ["Proyektin adı"],
      tblData: ["Proyekt haqqında məlumat"],
      colCount: 1,
    },
  ]);

  return (
    <>
      <div className="achievement__section">
        {inputListValue.map((item, index) => {
          return (
            <TblStructure
              key={index}
              title={item.title}
              tblHead={item.tblHead}
              tblData={item.tblData}
              colCount={item.colCount}
              inputRef={inputRef}
              setInputListValue={setInputListValue}
              inputListValue={inputListValue}
            />
          );
        })}

        {/* <TblStructure
          key={2}
          title={""}
          tblHead={}
          tblData={}
          colCount={2}
        />
        <TblStructure
          key={3}
          title={""}
          tblHead={}
          tblData={}
          colCount={1}
        /> */}
      </div>
    </>
  );
};

export default Edit;
