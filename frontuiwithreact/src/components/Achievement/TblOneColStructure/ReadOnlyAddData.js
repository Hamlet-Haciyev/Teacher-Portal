import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./tblOneColStructure.css";
const ReadOnlyAddData = ({ setVisible, visible }) => {
  function handleChangeVisible() {
    setVisible(!visible);
  }
  return (
    <div style={{ display: "flex" }}>
      <td className="table__data col1 action">
        <span>Elave et</span>
        <button className="resetButton" onClick={handleChangeVisible}>
          <IoMdAdd className="add__icon" />
        </button>
      </td>
    </div>
  );
};

export default ReadOnlyAddData;
