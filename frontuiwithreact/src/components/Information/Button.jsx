import React from 'react'
import {  NavLink ,useNavigate} from "react-router-dom"
const Button = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   history('/about/edit')
  //   console.log(history);
  // },[])
  return (
    <div className='m-auto mt-3'>
      {/* I use useNavigate hooks like Navlink alternative */}

      {/* <NavLink to={"/about/edit"} className='custom_btn' >Tenzimlemeler</NavLink> */}
      <button onClick={()=>navigate("/about/edit")}className='custom_btn'>Tenzimlemeler</button>
    </div>
  )
}

export default Button