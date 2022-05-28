import React, { useEffect, useState } from "react";
import "../../App.css";
const Achievement = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(
      Math.floor(
        document.querySelector(".achievement__section").getBoundingClientRect()
          .width / 4
      ) - 15
    );
  }, [width]);
  return (
    <>
      <div className="achievement__section">
        <h4 className="achievement__diplom">Diplom</h4>
        <table className="" style={{ marginBottom: "40px" }}>
          <thead>
            <tr className="table__row">
              <th className="table__head" style={{ flexBasis: width + "px" }}>
                Elmi dərəcə
              </th>
              <th className="table__head" style={{ flexBasis: width + "px" }}>
                Universitet
              </th>
              <th className="table__head" style={{ flexBasis: width + "px" }}>
                İxtisas
              </th>
              <th className="table__head" style={{ flexBasis: width + "px" }}>
                Diplomun kateqoriyası
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Dosent
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Azərbaycan Dövlət Neft və Sənaye Universiteti
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                İnformasiya Texnologiyaları
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Fərqlənmə
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Dosent
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Azərbaycan Dövlət Neft və Sənaye Universiteti
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                İnformasiya Texnologiyaları
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Fərqlənmə
              </td>
            </tr>
          </tbody>
        </table>

        <table className="" style={{ marginBottom: "40px" }}>
          <thead>
            <tr className="table__row">
              <th
                className="table__head"
                style={{
                  flexBasis: width + "px",
                  textAlign: "left",
                  borderRight: "none",
                }}
              >
                Sertifikatın adı
              </th>
              <th
                className="table__head"
                style={{
                  flexBasis: width + "px",
                  textAlign: "left",
                  borderLeft: "none",
                }}
              >
                Sertifikatın linki{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Cisco Networking Academy
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=2%3A5
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                Cisco Networking Academy
              </td>
              <td className="table__data " style={{ flexBasis: width + "px" }}>
                https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=2%3A5
              </td>
            </tr>
          </tbody>
        </table>

        <div className="achievement__table__row">
          <h4 className="achievement__diplom">Proyekt</h4>
          <table className="" style={{ width: "100%" }}>
            <thead>
              <tr className="table__row">
                <th
                  className="table__head one_portion"
                  style={{
                    flexBasis: width + "px",
                    textAlign: "left",
                    borderRight: "none",
                  }}
                >
                  Proyektin adı
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <td
                  className="table__data one_portion"
                  style={{ flexBasis: width + "px" }}
                >
                  Proyekt haqqında məlumat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="achievement__table__row">
          <h4 className="achievement__diplom">Ixtira</h4>
          <table className="" style={{ width: "100%" }}>
            <thead>
              <tr className="table__row">
                <th
                  className="table__head one_portion"
                  style={{
                    flexBasis: width + "px",
                    textAlign: "left",
                    borderRight: "none",
                  }}
                >
                  İxtiranın adı
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <td
                  className="table__data one_portion"
                  style={{ flexBasis: width + "px" }}
                >
                  İxtira haqqında məlumat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="achievement__table__row">
          <h4 className="achievement__diplom">Patent</h4>
          <table className="" style={{ width: "100%" }}>
            <thead>
              <tr className="table__row">
                <th
                  className="table__head one_portion"
                  style={{
                    flexBasis: width + "px",
                    textAlign: "left",
                    borderRight: "none",
                  }}
                >
                  Patentin adı
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <td
                  className="table__data one_portion"
                  style={{ flexBasis: width + "px" }}
                >
                  Patent haqqında məlumat
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Achievement;
