import React from 'react';

import {BiCurrentLocation} from "react-icons/bi";

const CinemaList = ({cl}) => {
 
  return (
    <>
      <div className=' flex items-center  justify-evenly'>
       <div>
       <p>{cl?.CinemaName}</p>
       </div>
 <div>
 <p><BiCurrentLocation/></p>
 </div>
      </div>
    </>
  )
}

export default CinemaList
