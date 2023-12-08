import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addMovieName } from "../Services/dataSlice";

const MovieCard = ({ md }) => {
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();

  const dispatch = useDispatch();
  const handleClick = (md) => {
    dispatch(addMovieName({ movie: md?.MovieTitle }));
    nav(`/cinema/${md?.MovieId}`);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" hover:opacity-50 relative"
    >
      {isHovered && (
        <div className={`absolute inset-0 flex items-center justify-center `}>
          <button
            onClick={handleClick(md)}
            className="bg-red-500 text-white p-2 rounded-xl  "
          >
            Book Cinema
          </button>
        </div>
      )}

      <img
        className=" w-[300px] h-[400px] rounded-xl"
        src={md?.moviePath}
        alt=""
      />

      <p className=" bg-red-700 rounded-full px-2  text-white absolute  bottom-[20px] left-[20px]">
        {md?.Duration}
      </p>
      <p className=" bg-red-700 rounded-full px-2  text-white absolute  bottom-[20px] right-[20px]">
        {md?.ReleaseDate?.split("T")[0]}
      </p>
    </div>
  );
};

export default MovieCard;
