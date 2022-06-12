import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import "../../App.css";
const AddData = ({
  isAddData,
  setisAddData,
  colCount,
  px,
  inputRef,
  setInputListValue,
  inputListValue,
}) => {
  function handleClick() {
    setisAddData(!isAddData);
  }
  function handleAddData() {
    let arr = [];
    setisAddData(!isAddData);
    for (let i = 0; i < inputRef.current.length; i++) {
      arr.push(inputRef.current.slice(0, colCount)[i].value);
    }
    setInputListValue([
      ...inputListValue,
      { colCount: 4, tblData: [...arr], tblHead: [""], title: "" },
    ]);
    console.log(inputListValue);
  }

  return (
    <tr className="table__row">
      {[...Array(colCount)].map((item, index) => {
        return (
          <td className="table__data" style={{ flexBasis: px }}>
            {isAddData ? (
              <input type="text" ref={(el) => (inputRef.current[index] = el)} />
            ) : index == 0 ? (
              "Elave et"
            ) : (
              ""
            )}
          </td>
        );
      })}
      {!isAddData ? (
        <IoMdAdd
          className="add__icon__cont4__position"
          onClick={(e) => handleClick(e)}
        />
      ) : (
        <MdBookmarkAdd
          className="add__icon__cont4__position"
          onClick={(e) => handleAddData(e)}
        />
      )}
    </tr>
  );
};

export default AddData;
