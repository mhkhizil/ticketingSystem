import React, { useState } from "react";
import dataFetching from "../Data/dataFetching";
import MovieCard from "../Components/MovieCard";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import Pagination from "../Components/pagination";

const Movies = () => {
  const { filterMovie } = useSelector((state) => state);

  return (
    <div>
      <div className="  flex-wrap flex items-center justify-center gap-8">
        {filterMovie?.filteredMovie?.map((md, index) => {
          return (
            <motion.div
              key={md?.MovieId}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              className={`w-[300px] h-[400px]  `}
            >
              <MovieCard md={md} />
            </motion.div>
          );
        })}
      </div>
      <div className=" text-center my-10">
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
