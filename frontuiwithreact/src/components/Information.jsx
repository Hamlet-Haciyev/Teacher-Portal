import React from 'react'
import Research from "./Research";
import Button from "./Button";
import Profile from "./Profile";
const Information = () => {
  return (
    <div className='d-flex fl-dir pt-43'>
        <Profile/>
        <Research/>
        <Button/>
    </div>
  )
}

export default Information