import { IoMdAdd } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  inputRef,
}) => {
  return (
    <tr className="table__row">
      <td className="table__data">
        <input
          type="text"
          required="required"
          placeholder="Enter a scienceDegree..."
          name="scienceDegree"
          value={editFormData.scienceDegree}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data">
        <input
          type="text"
          required="required"
          placeholder="Enter an university..."
          name="university"
          value={editFormData.university}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data">
        <input
          type="text"
          required="required"
          placeholder="Enter a privatization..."
          name="privatization"
          value={editFormData.privatization}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data">
        <input
          type="text"
          required="required"
          placeholder="Enter an diploma..."
          name="diploma"
          value={editFormData.diploma}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="actions">
        <button className="resetButton" type="submit">
          <IoMdAdd />
        </button>
        <button
          className="resetButton"
          type="button"
          onClick={handleCancelClick}
        >
          <MdBookmarkAdd />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
