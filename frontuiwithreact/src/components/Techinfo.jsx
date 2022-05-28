import React from 'react'
import classNames from "classnames"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";
import "./About/About.css"
const Techinfo = ({date,position,className}) => {
  return (
      <>
      <li className={classNames ({
        "list__group__item": true,
        "editList__item": className != undefined
        })}>
        <div className="list__item__data">
          {date ? <span className="about__section-title">{date} - </span> : ""}{position}
        </div>

        {className != undefined ?
          <div className='list__item__func'>
            {/* <button className="save">Save</button> */}
              <AiFillSave className="save"/>
              <FiEdit className="edit"/> 
              <RiDeleteBin6Line className='delete' style={{marginLeft:"10px"}}/> 
          </div> : ""
        }

        </li>
      </>
  )
}

export default Techinfo