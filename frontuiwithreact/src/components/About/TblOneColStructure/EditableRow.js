import { IoMdAdd } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="table__row">
      <td className="table__data editlist__item">
        <input
          type="text"
          required="required"
          placeholder="Enter a position..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
          style={{ width: "80%" }}
        />
      </td>

      <td className="actions editlist__item">
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
