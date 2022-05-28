import React, { useEffect, useRef, useState } from "react";
import "./TechEditInformation.css";
import { MdOutlineModeEdit } from "react-icons/md";
const MiniInfo = ({ title, subtitle, mbnone, version }) => {
  const [info, setInfo] = useState("");
  const [click, setClick] = useState(true);
  const inputEdit = useRef();
  function handleChangeInfo(e) {
    setInfo(e.target.value);
  }
  function handleClick() {
    setClick(!click);
  }
  useEffect(() => {
    setInfo(subtitle);
  }, []);

  return (
    <>
      {version == undefined ? (
        <>
          <div className="mini__info__wrapper">
            <h3 className="mini__info__title">{title}</h3>
            <p className="mini__info__subtitle">{subtitle}</p>
            {mbnone !== "none" ? <div className="hr"></div> : ""}
          </div>
        </>
      ) : (
        <>
          <div className="mini__info__wrapper mini__info__wrapper__edit">
            <div className="edit__tech__info">
              <h3 className="mini__info__title mini__info__title__edit">
                {title}
              </h3>
              <>
                {click ? (
                  <p ref={inputEdit} className="edit__tech__info__p">
                    {subtitle == info ? subtitle : info}
                  </p>
                ) : (
                  <input
                    className="edit__tech__info__input"
                    type="text"
                    value={info}
                    onChange={(e) => handleChangeInfo(e)}
                  />
                )}
              </>
              <MdOutlineModeEdit
                className="edit__tech__info__editIcon"
                onClick={handleClick}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniInfo;
