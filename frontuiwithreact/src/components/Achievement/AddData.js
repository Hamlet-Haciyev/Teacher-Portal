import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import "./Achievement.css";
const AddData = ({ isAddData, count, width, setisAddData }) => {
  // const [td, setTd] = useState([]);
  function handleClick(e) {
    setisAddData(!isAddData);
  }
  // useEffect(() => {
  //   for (let i = 0; i < count; i++) {
  //     setTd([
  //       ...td,
  //       <td className="table__data" style={{ flexBasis: `${width}px` }}></td>,
  //     ]);
  //   }

  //   console.log(td);
  // }, [td]);
  useEffect(() => {
    Array.from({ length: count }, (item, index) => (
      <td
        className="table__data"
        style={{ flexBasis: `${width}px` }}
        key={index}
      >
        {isAddData ? <input type="text" /> : ""}
      </td>
    ));
  });
  return (
    <tr className="table__row">
      {/* {Array.from({ length: count }, (item, index) => {
        <td
          className="table__data"
          style={{ flexBasis: `${width}px` }}
          key={index}
        >
          {isAddData ? <input type="text" /> : ""}
        </td>;
      })} */}
      {/* {count != 1 ? (
        <>
           <td className="table__data" style={{ flexBasis: `${width}px` }}>
            {isAddData ? <input type="text" /> : "Elave et"}
          </td>
          <td className="table__data" style={{ flexBasis: `${width}px` }}>
            {isAddData ? <input type="text" /> : ""}
          </td>
          <td className="table__data" style={{ flexBasis: `${width}px` }}>
            {isAddData ? <input type="text" /> : ""}
          </td>
          <td className="table__data" style={{ flexBasis: `${width}px` }}>
            {isAddData ? <input type="text" /> : ""}
          </td> 

          {!isAddData ? (
            <IoMdAdd
              className="add__icon__cont4__position"
              onClick={(e) => handleClick(e)}
            />
          ) : (
            <MdBookmarkAdd
              className="add__icon__cont4__position"
              onClick={(e) => handleClick(e)}
            />
          )}
        </>
      )
        : (
        <td className="table__data add__data__row">
          <span>{isAddData ? <input type="text" /> : "Elave et"}</span>
          <IoMdAdd className="add__icon" />
        </td>
      )} */}
    </tr>
  );
};

export default AddData;
