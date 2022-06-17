import React from "react";
import { FiEdit } from "react-icons/fi";
// import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
const ReadOnlyRow = ({ ls, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <tr className="table__row" style={{ overflow: "hidden" }}>
        <td className="table__data" style={{ width: "180px" }}>
          {ls.scienceName}
        </td>
        <td className="table__data" style={{ width: "180px" }}>
          {ls.category}
        </td>
        <td className="table__data" style={{ width: "180px" }}>
          {ls.publicationCountry}
        </td>
        <td className="table__data" style={{ width: "180px" }}>
          {ls.publicationDate}
        </td>
        <td className="table__data" style={{ width: "180px" }}>
          {ls.link}
        </td>
        <td className="actions">
          <FiEdit
            className="editAchi"
            onClick={(event) => handleEditClick(event, ls)}
          />
          <RiDeleteBin6Line
            className="deleteAchi"
            onClick={() => handleDeleteClick(ls.id)}
          />
          {/* <button type="button" onClick={(event) => handleEditClick(event, ls)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(ls.id)}>
          Delete
        </button> */}
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
