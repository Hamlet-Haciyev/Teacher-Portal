import React from 'react'

const Tbldata = ({ scieneName, category, country, date, link }) => {
  
  return (
        <tr className="table__row">
           <td className="table__data table__data__w1">{scieneName }</td>
          <td className="table__data table__data__w2">{category}</td>
          <td className="table__data table__data__w2">{country}</td>
          <td className="table__data table__data__w2">{ date}</td>
          <td className="table__data table__data__w2" >{ link}</td>
        </tr>
  )
}

export default Tbldata