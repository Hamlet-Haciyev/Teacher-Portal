import { IoMdAdd } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="table__row">
      <td className="table__data" style={{ width: "180px" }}>
        <input
          type="text"
          required="required"
          placeholder="Elmi işin adı..."
          name="scienceName"
          value={editFormData.scienceName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data" style={{ width: "180px" }}>
        <input
          type="text"
          required="required"
          placeholder="Kateqoriyası..."
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data" style={{ width: "180px" }}>
        <input
          type="text"
          required="required"
          placeholder="Nəşr olunduğu ölkə..."
          name="publicationCountry"
          value={editFormData.publicationCountry}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data" style={{ width: "180px" }}>
        <input
          type="text"
          required="required"
          placeholder="Nəşr olunduğu tarix..."
          name="publicationDate"
          value={editFormData.publicationDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="table__data" style={{ width: "180px" }}>
        <input
          type="text"
          required="required"
          placeholder="Link..."
          name="link"
          value={editFormData.link}
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
