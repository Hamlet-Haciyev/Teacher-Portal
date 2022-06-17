import React from "react";
import { IoMdAdd } from "react-icons/io";

const ReadOnlyAddData = ({ setVisible, visible }) => {
  function handleChangeVisible() {
    setVisible(!visible);
  }
  return (
    <div style={{ display: "flex" }}>
      <td className="table__data col4" style={{ flexBasis: "180px" }}>
        Elave et
      </td>
      <td className="table__data col4" style={{ flexBasis: "180px" }}></td>
      <td className="table__data col4" style={{ flexBasis: "180px" }}></td>
      <td className="table__data col4" style={{ flexBasis: "180px" }}></td>
      <td className="table__data col4 action">
        <button className="resetButton" onClick={handleChangeVisible}>
          <IoMdAdd className="add__icon" />
        </button>
      </td>
    </div>
  );
};

export default ReadOnlyAddData;
