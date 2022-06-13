import React from "react";

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
      <table>
        <tr className="table__row">
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="scienceDegree"
              required="required"
              placeholder="Enter a scienceDegree..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="university"
              required="required"
              placeholder="Enter an university..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="privatization"
              required="required"
              placeholder="Enter a privatization..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="diploma"
              required="required"
              placeholder="Enter an diploma..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
            />
          </td>
        </tr>
      </table>

      <button type="submit">Add</button>
      <button type="submit" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddFormData;
