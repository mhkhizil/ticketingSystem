import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataFetching from "../Data/dataFetching";
import { useDispatch, useSelector } from "react-redux";
import { addfilteredMovie } from "../Services/filterMovieSlice";

const Nav = () => {
  const [filterData, setFilterData] = useState("");
  const movieData = dataFetching("Tbl_MovieList");
  const dispatch = useDispatch();

  //   console.log(divHover);

  const moviePath = [
    "https://sportshub.cbsistatic.com/i/2023/07/06/928234b4-1059-4965-8dfd-adfdbdae0864/the-nun-ii-2-poster.jpg?auto=webp&width=1200&height=1500&crop=0.8:1,smart",
    "https://i.redd.it/mo8q8wopu3711.jpg",
    "https://m.media-amazon.com/images/I/91RepypuCTL.jpg",
    "https://m.media-amazon.com/images/I/81QBPvhaWVL._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNWZhZjUxZGUtMzM1OC00MjdmLWIzZjUtZTUzODc2ZTI2YzQzXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    "https://www.themoviedb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/495/1qsbnxlvcfi7kuwxyu7bxjsrajp-538.jpg",
    "https://www.themoviedb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "https://i.etsystatic.com/27062086/r/il/57b1ec/4371998749/il_fullxfull.4371998749_apux.jpg",
  ];
  const updatedMovieLists = movieData?.map((md, index) => ({
    ...md,
    moviePath: moviePath[index % moviePath.length], // Use modulus operator to cycle through colorCodes
  }));
  useEffect(() => {
    const searchResult = updatedMovieLists?.filter((md) =>
      md?.MovieTitle.toLowerCase()?.includes(filterData)
    );
    dispatch(addfilteredMovie({ filteredMovie: searchResult }));
  }, [filterData, dispatch, updatedMovieLists]);
  return (
    <nav className=" mb-6">
      <div className="  navbar bg-base-200 shadow-xl">
        <div className="  block xxxs:flex-1">
          <Link to={"/"}>
            <p className="btn btn-ghost normal-case md:text-xl  ">
              Myanmar{" "}
              <span className="  font-Lobster normal-case text-sm sm:text-lg md:text-xl    text-red-500">
                Ticketing{" "}
              </span>
              Service
            </p>
          </Link>
          <p></p>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              onChange={(e) => {
                setFilterData(e.target.value.toLowerCase());
              }}
              type="text"
              placeholder="Search"
              className=" md:m-4  input input-bordered w-24 md:w-auto"
              value={filterData}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
