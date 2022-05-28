import React from "react";
import Tbldata from "../Tbldata";
import "../../App.css";
const Science = () => {
  return (
    <div className="science__section">
      <table className="table__for__science">
        <thead>
          <tr className="table__row">
            <th className="table__head table__data__w1">Elmi işin adı</th>
            <th className="table__head table__data__w2">Kateqoriyası</th>
            <th className="table__head table__data__w2">Nəşr olunduğu ölkə</th>
            <th className="table__head table__data__w2">Nəşr olunduğu tarix</th>
            <th
              className="table__head table__data__w2"
              style={{ flexBasis: "539px", textAlign: "left" }}
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <Tbldata
            scieneName={
              "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri"
            }
            category={"Scopus"}
            country={"Azerbaycan"}
            date={"23.05.2005"}
            link={
              "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"
            }
          />
          <Tbldata
            scieneName={
              "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri"
            }
            category={"Scopus"}
            country={"Azerbaycan"}
            date={"23.05.2005"}
            link={
              "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"
            }
          />
          <Tbldata
            scieneName={
              "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri"
            }
            category={"Scopus"}
            country={"Azerbaycan"}
            date={"23.05.2005"}
            link={
              "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"
            }
          />
          <Tbldata
            scieneName={
              "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri"
            }
            category={"Scopus"}
            country={"Azerbaycan"}
            date={"23.05.2005"}
            link={
              "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"
            }
          />
          <Tbldata
            scieneName={
              "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri"
            }
            category={"Scopus"}
            country={"Azerbaycan"}
            date={"23.05.2005"}
            link={
              "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"
            }
          />
        </tbody>
      </table>
    </div>
  );
};

export default Science;
