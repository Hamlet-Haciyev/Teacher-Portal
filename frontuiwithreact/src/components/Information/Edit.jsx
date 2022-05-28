import React from 'react'
import Research from "./Research";
// import Button from "./Button";
import Profile from "./Profile";
const Edit = () => {
 return (
    <div className='d-flex fl-dir pt-43' style={{height:100+"vh",padding:"0px 0px 50px",justifyContent:"center"}}>
     <Profile version={ "edit"}/>
     <Research version={ "edit"}/>
    </div>
  )
}

export default Edit