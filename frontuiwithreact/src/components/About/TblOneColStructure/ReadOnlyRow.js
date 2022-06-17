import React from "react";
import { FiEdit } from "react-icons/fi";
// import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
const ReadOnlyRow = ({ ls, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <tr className="table__row">
        <td className="table__data editlist__item">{ls.position}</td>
        <td className="actions editlist__item">
          <FiEdit
            className="editAchi"
            onClick={(event) => handleEditClick(event, ls)}
          />
          <RiDeleteBin6Line
            className="deleteAchi"
            onClick={() => handleDeleteClick(ls.id)}
          />
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
