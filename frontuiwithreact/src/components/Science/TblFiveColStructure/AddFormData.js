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
              name="scienceName"
              required="required"
              placeholder="Enter a scienceName..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
              style={{ width: "180px" }}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="category"
              required="required"
              placeholder="Enter an category..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
              style={{ width: "180px" }}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="publicationCountry"
              required="required"
              placeholder="Enter a publicationCountry..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
              style={{ width: "180px" }}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="publicationDate"
              required="required"
              placeholder="Enter an publicationDate..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
              style={{ width: "180px" }}
            />
          </td>
          <td className="table__data tbl__dt__edit_vers">
            <input
              type="text"
              name="link"
              required="required"
              placeholder="Enter an link..."
              onChange={handleAddFormChange}
              className={"edit__achi__input"}
              style={{ width: "180px" }}
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
