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
          placeholder="Enter a certificateName..."
          name="certificateName"
          value={editFormData.certificateName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data">
        <input
          type="text"
          required="required"
          placeholder="Enter an certificateLink..."
          name="certificateLink"
          value={editFormData.certificateLink}
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
