import React from 'react'
import "../../App.css";
import profileImage from '../../assets/images/profile.jpg';
const Profile = ({version}) => {
  return (
      <div className='mb-110 m-auto'>
          <div className='profile__image__wrapper b-rads50 mb-24'>
            <img className='profile__image__child__div b-rads50' src={profileImage} alt="" />
          </div>
          <h3 className='username'>Nazile Rehimova</h3>
          <p className='role'>Kafedra mudiri</p>
      </div>
  )
}

export default Profile