// import React, { useEffect, useState } from 'react'
import Research from "./Research";
import Button from "./Button";
import Profile from "./Profile";
const Information = () => {
  // const [clientHeight, setClientHeight] = useState("")
  // useEffect(() => {
  //   setClientHeight(window.innerHeight)
  // },[clientHeight])
  return (
    <div className='d-flex fl-dir pt-43' style={{height:100+"vh"}}>
        <Profile/>
        <Research/>
        <Button/>
    </div>
  )
}

export default Information