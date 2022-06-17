import React from "react";
import { GiCancel } from "react-icons/gi";
import { MdLibraryAddCheck } from "react-icons/md";
import "./tblOneColStructure.css";
const AddFormData = ({
  handleAddFormChange,
  handleAddFormSubmit,
  setVisible,
  visible,
}) => {
  function handleCancel() {
    setVisible(!visible);
  }
  return (
    <form onSubmit={handleAddFormSubmit}>
      <table className="tblOneColStructure">
        <tr className="table__row">
          <td className="table__data tbl__dt__edit_vers editlist__item">
            <input
              type="text"
              name="position"
              required="required"
              placeholder="Enter a position..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
            />
          </td>
        </tr>
        <button className="resetBtn addBtn" type="submit">
          <MdLibraryAddCheck />
        </button>
        <button
          className="resetBtn cancelBtn"
          type="submit"
          onClick={handleCancel}
        >
          <GiCancel />
        </button>
      </table>
    </form>
  );
};

export default AddFormData;
