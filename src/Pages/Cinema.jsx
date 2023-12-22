import React, { useEffect, useState } from 'react'
import CinemaList from '../Components/CinemaList'
import { motion } from "framer-motion";
import dataFetching from '../Data/dataFetching';
import { Outlet, useParams } from 'react-router-dom';

const Cinema = () => {
  const mid=useParams();
  const cRomm=dataFetching('Tbl_CinemaRoom');
  const cinemaList=dataFetching('Tbl_CinemaList');
  const cinemaImg=[
    "https://elevenmyanmar.com/sites/news-eleven.com/files/news-images/dsc_7715mmk.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76J122OzDeSCOgh97N_55Ox2IRLHivObcgA&usqp=CAU",
    "https://lh3.googleusercontent.com/p/AF1QipPGCv8iI8cPn0Ytlgun0GZH4J4q-kItMWDGh8Eh=s1600-w400",
    "https://media.licdn.com/dms/image/C5122AQEhtDqzaVFngQ/feedshare-shrink_800/0/1552097811421?e=2147483647&v=beta&t=-n6Cftt7Fy4DAb2h4nH_UBTNVX-VewHTPiUgQDEjFrA",
    "https://1.bp.blogspot.com/_fgqXBhsYtOM/TH6hB1IFAiI/AAAAAAAADRM/j6UoEomEXJM/s1600/16+Myanmar+3+100.jpg",
    "https://1.bp.blogspot.com/_fgqXBhsYtOM/TI7S3Z7_zTI/AAAAAAAADSs/g2SiBZBfuvU/s1600/16+Myanmar+3+078.jpg",
    "https://i2.wp.com/www.relicsofrangoon.com/wp-content/uploads/2020/10/DSC_4205.jpg?ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlyO8Dl6qm174JHV3Z7bHlp_fmClgT8t1Lw&usqp=CAU",
    "https://fastly.4sqi.net/img/general/600x600/13999881_VFwcusGdDvKTYPu3eaVl3PTo8PEhMYJCnYqM_-I3tMc.jpg",
    "https://elevenmyanmar.com/sites/news-eleven.com/files/news-images/dsc_7715mmk.jpg"
  ]
  // const cinemaList=cinemaListOg?.map((cl,index)=>(
  //     {
  //       ...cl,
  //       cinemaImg:cinemaImg[index % cinemaImg.length]
  //     }
  //   ))
 
  const sd = dataFetching("Tbl_MovieShowDate");
  // const cinemaIdFromScheduling=sd?.map(s=>s?.CinemaId);
  // console.log(cinemaIdFromScheduling);

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
    // console.log(roomNames);

    // Loop through cinemaList and fetch room names for each CinemaId
    cinemaList?.forEach((cl) => {
      fetchRoomNames(cl.CinemaId);
    });
  }, [cinemaList]);
  console.log(cinemaList);
  const testingFiletr=sd?.filter(s=>(
    s?.MovieId ==mid?.mid 
   ));
   console.log(testingFiletr);
   const includedCinemaLists=testingFiletr?.map(ic=>ic?.CinemaId);
   console.log(includedCinemaLists);
   const filteredCinemaList = cinemaList?.filter(cl => includedCinemaLists?.includes(cl?.CinemaId));
console.log(filteredCinemaList);
  // console.log(roomNames);
  return (
    <div className=' flex-col items-center justify-center  '>
    <Outlet/>
     {filteredCinemaList?.map((cl, index) => {
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
