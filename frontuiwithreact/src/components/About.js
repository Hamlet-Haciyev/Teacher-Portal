import React from "react";
import "../App.css";
const About = () => {
  return (
    <div className="about__section">
      <div
        className=""
        style={{ paddingBottom: "35px", borderBottom: "2px solid #eee" }}
      >
        <h4 className="about__section-head">Tehsil</h4>
        <ul className="list__group">
          <li className="list__group__item">
            <span className="about__section-title">1975-1981-</span>Azerbaycan
            Dovlet Neft v; Senaye unversiteti - Avtomatika ve
            telemexanika,elektrik muhendisi
          </li>
          <li className="list__group__item">
            <span className="about__section-title">29.12.1997-</span>Texniki
            Elmler Namizedi - Informasiya islenmesi ve idareetme sistemleri
          </li>
          <li className="list__group__item">
            <span className="about__section-title">02.11.2001-</span>"Dosent"
            elmi adi
          </li>
        </ul>
      </div>
      <div
        className=""
        style={{
          paddingBottom: "35px",
          borderBottom: "2px solid #eee",
          paddingTop: "36px",
        }}
      >
        <h4 className="about__section-head">Ixtisas uzre bacariqlar</h4>
        <ul className="list__group">
          <li className="list__group__item">
            <span className="about__section-title">Proqramlasdirma:</span>C/C++,
            Python, Java, Pascal, Delphi, Lisp, Visual Prolog, C#, HTML, CSS,
            Javascript, PHP, Fortran
          </li>
        </ul>
      </div>
      <div className="" style={{ paddingTop: "36px" }}>
        <h4 className="about__section-head">Is tecrubesi</h4>
        <ul className="list__group">
          <li className="list__group__item">
            <span className="about__section-title">1976-1985 - </span>Azərbaycan
            Ticarət Nazirliyinin Məlumat Mərkəzi - Operator, mühəndis, böyük
            mühəndis, şöbə müdiri
          </li>
          <li className="list__group__item">
            <span className="about__section-title">1985-1991 - </span>Azərbaycan
            Elmi Kosmik Tədqiqat İnstitutu - Proqram mühəndisi
          </li>
          <li className="list__group__item">
            <span className="about__section-title">
              1991-ci ildən indiyə qədər -{" "}
            </span>
            ASOİU - operator, mühəndis, böyük mühəndis, assistent, baş müəllim,
            kafedra müdiri
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
