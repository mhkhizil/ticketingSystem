import React, { useState } from "react";
import dataFetching from "../Data/dataFetching";
import MovieCard from "../Components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { movieLists } from "../Services/dataSlice";
import { motion } from "framer-motion";
import Pagination from "../Components/pagination";

const Movies = () => {
  const movieData = dataFetching('Tbl_MovieList');
  const [divHover, setDivHover] = useState(false);
  
//   console.log(divHover);
  const dispatch = useDispatch();
  const moviePath = [
    "https://sportshub.cbsistatic.com/i/2023/07/06/928234b4-1059-4965-8dfd-adfdbdae0864/the-nun-ii-2-poster.jpg?auto=webp&width=1200&height=1500&crop=0.8:1,smart",
    "https://i.redd.it/mo8q8wopu3711.jpg",
    "https://m.media-amazon.com/images/I/91RepypuCTL.jpg",
    "https://m.media-amazon.com/images/I/81QBPvhaWVL._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNWZhZjUxZGUtMzM1OC00MjdmLWIzZjUtZTUzODc2ZTI2YzQzXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    "https://www.themoviedb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    "https://pics.filmaffinity.com/Sound_of_Freedom-546775358-large.jpg",
    "https://www.themoviedb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "https://i.etsystatic.com/27062086/r/il/57b1ec/4371998749/il_fullxfull.4371998749_apux.jpg",
  ];
  const updatedMovieLists = movieData?.map((md, index) => ({
    ...md,
    moviePath: moviePath[index % moviePath.length], // Use modulus operator to cycle through colorCodes
  }));
  return (
    <div>
      <div className="  flex-wrap flex items-center justify-center gap-8">
        {updatedMovieLists?.map((md, index) => {
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
      <Pagination/>
      </div>
    
   
    </div>
  );
};

export default Movies;
