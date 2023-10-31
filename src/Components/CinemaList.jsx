import React from 'react';

import {BiCurrentLocation} from "react-icons/bi";
import dataFetching from '../Data/dataFetching';

const CinemaList = ({cl,roomNames}) => {
  console.log(roomNames);

  const cinemaRoom=dataFetching('Tbl_CinemaRoom');
  //direction to cinema location 
    const handleLocationClick = () => {
      const cinemaLocation = cl?.CinemaLocation;
      window.location.href = `https://www.google.com/maps?q=${cinemaLocation}`;
    };


 
  return (
    <>
      <div className='  justify-center items-center  flex-1  xxss:flex xxss:items-center  xxss:justify-evenly'>
       <div className=' inline-flex  xxss:w-[20%] '>
       <p className=' inline-flex    xxxs:text-sm sm:text-xl  font-bold'>{cl?.CinemaName}</p>
       </div>
 <div className='inline-flex  mx-3 '>
 <p onClick={handleLocationClick} className='  inline-flex xxxs:text-sm sm:text-2xl hover:text-red-500 hover:cursor-pointer ' ><BiCurrentLocation/></p>
 </div>
 <div className=' cursor-pointer '>
 {
  roomNames?.map((r)=>(
    <p className='bg-red-500 rounded-xl block  xxss:inline-flex text-white p-2 m-2 xxxs:text-sm sm:text-xl hover:opacity-60'>{r}</p>
  ))
 }


 </div>
      </div>
    </>
  )
}

export default CinemaList
