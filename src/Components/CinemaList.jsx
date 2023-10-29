import React from 'react';

import {BiCurrentLocation} from "react-icons/bi";

const CinemaList = ({cl}) => {
 
  return (
    <>
      <div className='  flex items-center  justify-evenly'>
       <div className='w-[15%]'>
       <p>{cl?.CinemaName}</p>
       </div>
 <div className='w-[5%]'>
 <p><BiCurrentLocation/></p>
 </div>
 <div className=''>
 <p>avdddd</p>
 </div>
      </div>
    </>
  )
}

export default CinemaList
