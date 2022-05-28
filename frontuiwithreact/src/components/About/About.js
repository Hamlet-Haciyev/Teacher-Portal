import React from "react";
import "../../App.css";
import Techinfo from "../Techinfo";
const About = () => {
  return (
    <div className="about__section">
      <div
        className=""
        style={{ paddingBottom: "35px", borderBottom: "2px solid #eee" }}
      >
        <h4 className="about__section-head">Təhsil</h4>

        <ul className="list__group">
          <Techinfo
            date={"1975-1981"}
            position={
              "Azərbaycan Dövlət Neft və Sənaye Universiteti - Avtomatika və telemexanika, elektrik mühəndisi"
            }
          />
          <Techinfo
            date={"29.12.1997"}
            position={
              "Texniki Elmlər Namizədi - İnformasiya işlənməsi və idarəetmə sistemləri"
            }
          />
          <Techinfo date={"02.11.2001"} position={"Dosent” elmi adı"} />
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
        <h4 className="about__section-head">İxtisas üzrə bacarıqlar</h4>

        <ul className="list__group">
          <Techinfo
            position={
              "Proqramlaşdırma: C/C++, Python, Java, Pascal, Delphi, Lisp, Visual Prolog, C#, HTML, CSS, JavaScript, PHP, Fortran"
            }
          />
        </ul>
      </div>
      <div className="" style={{ paddingTop: "36px" }}>
        <h4 className="about__section-head">Is tecrubesi</h4>

        <ul className="list__group">
          <Techinfo
            date={"1975-1981"}
            position={
              "Azərbaycan Dövlət Neft və Sənaye Universiteti - Avtomatika və telemexanika, elektrik mühəndisi"
            }
          />
          <Techinfo
            date={"29.12.1997"}
            position={
              "Texniki Elmlər Namizədi - İnformasiya işlənməsi və idarəetmə sistemləri"
            }
          />
          <Techinfo
            date={"02.11.2001"}
            position={
              "ASOİU - operator, mühəndis, böyük mühəndis, assistent, baş müəllim, kafedra müdiri"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default About;
