import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./Achievement.css";
const AddData = ({ isAddData, count, width }) => {
  return (
    <tr className="table__row">
      {count != 1 ? (
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
          <IoMdAdd className="add__icon__cont4__position" />
        </>
      ) : (
        <td className="table__data add__data__row">
          <span>{isAddData ? <input type="text" /> : "Elave et"}</span>
          <IoMdAdd className="add__icon" />
        </td>
      )}
    </tr>
  );
};

export default AddData;
