// import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import "./Navbar.css";
const Navbar = () => {
  // const navigate = useNavigate();
  // navigate.arguments
  //  useEffect(() => {
  // handleOnclick()
  // console.log(window.innerHeight);
  // setView(window.innerHeight);
  //   }, [view]);

  //   const handleOnclick = (e) => {
  //     let element =
  //       e.target.parentElement.className == "about__section__link"
  //         ? e.target.parentElement
  //         : "";
  //     let firstliElement = document.getElementById("about");
  // firstliElement alternativ varianti asagidakidi
  // let firstliElement = e.target.parentElement.parentElement.firstChild;
  // firstliElement.classList.remove("active");
  /* (Custom) yazdigim active className */
  //#region Custom activeClassName
  // if (e.target.parentElement.classList.contains("about__section__link") || e.target.classList.contains("about__section__link")) {
  //   if (data != "") {
  //     data.classList.remove("active")
  //   }
  // } else {
  // }

  // setData(element);
  // if (data != "") {
  //   data.classList.remove("active");
  // }

  // if (element) {
  //   element.classList.add("active");
  // }
  //#endregion
  //   };
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          padding: "0px",
          marginBottom: "0px",
        }}
      >
        <li className="about__section__link" id="about">
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Haqqinda
          </NavLink>
        </li>
        <li className="about__section__link">
          <NavLink
            to="/science"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Elmi isler
          </NavLink>
        </li>
        <li className="about__section__link">
          <NavLink
            to="/achievement"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Nailiyyetler
          </NavLink>
        </li>
        <div className="exit__btn__wrapper">
          <BiExit className="exit__icon" />
          <a className="exit__btn">Cixis et</a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
