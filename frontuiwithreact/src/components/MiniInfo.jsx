import React from 'react'

const MiniInfo = ({title,subtitle,mbnone}) => {
  return (
      <div className='mini__info__wrapper'>
          <h3 className='mini__info__title'>{title}</h3>
          <p className='mini__info__subtitle'>{subtitle}</p>
          {
              mbnone != "none" ? <div className='hr'></div> : ""
          }
     </div>
  )
}

export default MiniInfo