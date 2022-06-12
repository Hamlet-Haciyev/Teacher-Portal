import React, { useEffect, useState, useRef } from "react";
import AddData from "./AddData";

const TblStructure = ({
  colCount,
  title,
  tblHead,
  tblData,
  inputRef,
  setInputListValue,
  inputListValue,
}) => {
  const [px, setPx] = useState("");
  const [isAddData, setisAddData] = useState(false);

  useEffect(() => {
    if (colCount == 4) {
      setPx("232px");
    } else if (colCount == 2) {
      setPx("464px");
    } else if (colCount == 1) {
      setPx("928px");
    }
  }, []);
  return (
    <div className="tblWrapper">
      <h4 className="achievement__diplom">{title}</h4>
      <table className="">
        <thead>
          <tr className="table__row">
            {[...Array(colCount)].map((dt, index) => {
              return (
                <th
                  className="table__head"
                  style={{ flexBasis: px != undefined ? px : "" }}
                >
                  {tblHead[index]}
                </th>
              );
            })}
            <th
              className="table__head"
              style={{ flexBasis: px != undefined ? px : "" }}
            >
              Elmi dərəcə
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table__row">
            {[...Array(colCount)].map((dt, index) => {
              return (
                <td
                  className="table__data"
                  style={{ flexBasis: px != undefined ? px : "" }}
                >
                  {tblData[index]}
                </td>
              );
            })}
          </tr>
          <AddData
            colCount={colCount}
            isAddData={isAddData}
            setisAddData={setisAddData}
            px={px}
            inputRef={inputRef}
            setInputListValue={setInputListValue}
            inputListValue={inputListValue}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TblStructure;
