import React from "react";
import "../../App.css";
import "./Achievement.css";
import TblStructureFour from "./TblFourColStructure/TblStructure";
import TblStructureTwo from "./TblTwoColStructure/TblStructure";
import TblStructureOne from "./TblOneColStructure/TblStructure";
const Edit = () => {
  return (
    <>
      <div className="achievement__section">
        <TblStructureFour
          sectionHead={"Diplom"}
          degree={"Elmi dərəcə "}
          uni={"Universitet"}
          specialty={"İnformasiya Texnologiyaları"}
          category={"Diplomun kateqoriyası"}
        />
        <TblStructureTwo
          sectionHead={"Sertifikat"}
          name={"Sertifikatın adı"}
          link={"Sertifikatın linki"}
        />
        <TblStructureOne sectionHead={"Proyekt"} name={"Proyektin adı"} />
        <TblStructureOne sectionHead={"İxtira"} name={"İxtiranın adı"} />
        <TblStructureOne sectionHead={"Patent"} name={"Patentin adı"} />
      </div>
    </>
  );
};

export default Edit;
