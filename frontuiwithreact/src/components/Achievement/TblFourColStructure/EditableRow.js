import { IoMdAdd } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
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
          <GiCancel />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
