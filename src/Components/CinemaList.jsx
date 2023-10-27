import React from 'react'
import dataFetching from '../Data/dataFetching'

const CinemaList = ({cl}) => {
 
  return (
    <div>
      <div className=' flex items-center justify-center'>
        <p>{cl?.CinemaName}</p>
        <p>Location</p>
      </div>
    </div>
  )
}

export default CinemaList
