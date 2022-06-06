import React, { useRef, useState } from "react";
import classNames from "classnames";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";
import "./About/About.css";
const Techinfo = ({ date, position, className, page }) => {
  const [inputData, setInputData] = useState("");
  const pRef = useRef();
  const inputRef = useRef();
  const [visible, setVisible] = useState(true);
  function handleEdit(e) {
    setVisible(!visible);
    setInputData(pRef.current.textContent);
  }
  function handleChangeData(e) {
    setInputData(inputRef.current.value);
  }
  function handleSave(e) {
    setVisible(!visible);
  }
  function handleDelete(e) {
    if (
      e.target.parentElement.parentElement.classList.contains(
        "about__list__style"
      )
    ) {
      e.target.parentElement.parentElement.remove();
    }
  }
  return (
    <>
      <li
        className={classNames({
          list__group__item: true,
          editList__item: className != undefined,
          about__list__style: page == "aboutEdit",
        })}
      >
        {visible ? (
          <div className="list__item__data" ref={pRef}>
            {inputData ? inputData : date + "  " + position}
          </div>
        ) : (
          <input
            type="text"
            ref={inputRef}
            className="edit__input"
            value={inputData}
            onChange={(e) => handleChangeData(e)}
          />
        )}

        {className != undefined ? (
          <div className="list__item__func">
            {visible ? (
              <>
                <FiEdit className="edit" onClick={(e) => handleEdit(e)} />
                <RiDeleteBin6Line
                  onClick={(e) => handleDelete(e)}
                  className="delete"
                  style={{ marginLeft: "10px" }}
                />
              </>
            ) : (
              <AiFillSave
                className="save"
                onClick={(e) => handleSave(e)}
                style={{ marginLeft: "10px" }}
              />
            )}
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default Techinfo;
