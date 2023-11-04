import React, { useEffect, useState } from 'react'
import CinemaList from '../Components/CinemaList'
import { motion } from "framer-motion";
import dataFetching from '../Data/dataFetching';
import { Outlet, useParams } from 'react-router-dom';

const Cinema = () => {
  const mid=useParams();

  const cinemaList=dataFetching('Tbl_CinemaList');
  const cRomm=dataFetching('Tbl_CinemaRoom');
//  console.log(cRomm); 
  const [roomNames, setRoomNames] = useState({});//store room name 

  useEffect(() => {
    // Define a function to fetch room names based on CinemaId
    const fetchRoomNames = (cinemaId) => {
      const filteredRoomNames = cRomm?.filter(room => room.CinemaId === cinemaId) //filtering to get objects that have same cinemaID(will made new array with object that have same cinemaID)
        ?.map(room => ({
          RoomId: room.RoomId,
          RoomName: room.RoomName,
        })); 
      //  console.log(filteredRoomNames);//Remap above filtered array to get only room names array 
      setRoomNames((prevRoomNames) => ({
        ...prevRoomNames,
        [cinemaId]: filteredRoomNames,
      }));
    };

    // Loop through cinemaList and fetch room names for each CinemaId
    cinemaList?.forEach((cl) => {
      fetchRoomNames(cl.CinemaId);
    });
  }, [cinemaList]);
  // console.log(roomNames);
  return (
    <div className=' flex-col items-center justify-center  '>
    <Outlet/>
     {cinemaList?.map((cl, index) => {
          return (
            <motion.div
              key={cl?.CinemaId}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
                
              }}
              whileHover={{ scale: 1.1 }}
              className={` m-24 border border-red-500 rounded-xl p-4 shadow-xl` }
            >
              <CinemaList cRomm={cRomm}  mid={mid} cl={cl} roomNames={roomNames[cl.CinemaId] || []} />
            </motion.div>
          );
        })}
           

    </div>
  )
}

export default Cinema
