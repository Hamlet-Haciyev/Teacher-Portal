import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import profileImage from "../../assets/images/profile.jpg";
import "./TechEditInformation.css";
import { MdOutlineModeEdit } from "react-icons/md";

const Profile = ({ name, role, mode }) => {
  const [info, setInfo] = useState("");
  const [click, setClick] = useState(true);
  const roleEdit = useRef();
  const inputEdit = useRef();
  const imgSrc = useRef();
  function handleChangeInfo(e) {
    setInfo(e.target.value);
  }
  function handleClick() {
    setClick(!click);
  }
  useEffect(() => {
    setInfo(role);
  }, []);
  function changeProfileImg() {
    let fs = new FileReader();
    let file = [...inputEdit.current.files][0];
    fs.readAsDataURL(file);
    fs.onload = () => {
      imgSrc.current.src = fs.result;
    };
  }
  return (
    <>
      {mode == undefined ? (
        <div className="mb-110 m-auto">
          <div className="profile__image__wrapper b-rads50 mb-24">
            <img
              className="profile__image__child__div b-rads50"
              src={profileImage}
              alt=""
            />
          </div>
          <h3 className="username">{name}</h3>
          <p className="role">{role}</p>
        </div>
      ) : (
        <div className="mb-110 m-auto" style={{ paddingTop: "40px" }}>
          <div
            className="profile__image__wrapper profile__image__wrapper__edit b-rads50 mb-24"
            style={{ width: "234px" }}
          >
            <img
              className="profile__image__child__div b-rads50 profile__img__edit"
              src={profileImage}
              ref={imgSrc}
              alt=""
            />
            <span className="txt__edit">Profilini deyish</span>
            <div className="profile__editIcon__wrapper">
              <label htmlFor="file">
                <MdOutlineModeEdit className="edit__tech__profile__editIcon" />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                accept="jpg jpef png"
                ref={inputEdit}
                onChange={changeProfileImg}
              />
            </div>
          </div>
          <div className="usnm__rol__edt">
            <h3 className="username">{name}</h3>
            <>
              {click ? (
                <p className="role" ref={roleEdit}>
                  {role == info ? role : info}
                </p>
              ) : (
                <input
                  className="edit__tech__info__input"
                  style={{
                    padding: "5px 0px 10px 15px",
                    borderTop: "2px solid #101f4a",
                    borderBottom: "2px solid #101f4a",
                  }}
                  type="text"
                  value={info}
                  onChange={(e) => handleChangeInfo(e)}
                />
              )}
            </>

            <MdOutlineModeEdit
              className="usnm__rol__edt__icon"
              onClick={handleClick}
              style={click ? "" : { transform: "translateY(-20px)" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
