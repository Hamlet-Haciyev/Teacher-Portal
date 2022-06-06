import React from "react";
import { IoMdAdd } from "react-icons/io";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const AddData = ({
  handleInputChange,
  handleAddData,
  obj,
  view,
  inputRef,
  handleChangeView,
  // title,
}) => {
  return (
    <tr className="table__row">
      <td className="table__data add_data">
        <span>
          {view ? (
            <input
              type="text"
              value={obj.position}
              onChange={(e) => handleInputChange(e)}
              ref={inputRef}
            />
          ) : (
            "Elave et"
          )}
        </span>
      </td>
      {!view ? (
        <IoMdAdd
          className="add__icon__cont4__position"
          onClick={(e) => handleChangeView(e)}
        />
      ) : (
        <BsFillBookmarkPlusFill
          className="add__icon__cont4__position about__addData"
          onClick={(e) => handleAddData()}
        />
      )}
    </tr>
  );
};

export default AddData;
