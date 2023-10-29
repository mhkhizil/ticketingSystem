import React from 'react'
import CinemaList from '../Components/CinemaList'
import { motion } from "framer-motion";
import dataFetching from '../Data/dataFetching';

const Cinema = () => {
  const cinemaList=dataFetching('Tbl_CinemaList');
  console.log(cinemaList);
  return (
    <div className=' flex-col items-center justify-between  '>
    
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
              className={``}
            >
              <CinemaList cl={cl} />
            </motion.div>
          );
        })}

    </div>
  )
}

export default Cinema
