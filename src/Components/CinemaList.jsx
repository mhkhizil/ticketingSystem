import React from "react";

import { BiCurrentLocation } from "react-icons/bi";
import dataFetching from "../Data/dataFetching";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCinema, addRoom } from "../Services/dataSlice";

const CinemaList = ({ cl, roomNames, mid }) => {
  const dispatch = useDispatch();
  const data = useParams();

  //movie id por mu t p room id ko tite sit
  const sd = dataFetching("Tbl_MovieShowDate");
  //  console.log(roomNames);
  const testingFiletr = sd?.filter(
    (s) => s?.MovieId == data?.mid && s?.CinemaId == cl?.CinemaId
  );
  console.log(testingFiletr);
  const requiredRoomId = testingFiletr?.map((id) => id?.RoomId);
  console.log(requiredRoomId);
  const finalRoomName = roomNames?.filter((rd) =>
    requiredRoomId?.includes(rd?.RoomId)
  );
  console.log(finalRoomName);
  //  console.log(testingFiletr);

  //  console.log(testingFiletr);
  //  console.log(testingFiletr);
  const nav = useNavigate();
  // console.log(cl);
  // console.log(cinemaRoom);
  //direction to cinema location
  const handleLocationClick = () => {
    const cinemaLocation = cl?.CinemaLocation;
    window.location.href = `https://www.google.com/maps?q=${cinemaLocation}`;
  };
  return (
    <div className="   justify-evenly items-center  flex-1  ">
      <div className=" group  relative inline-flex   ">
        <img
          src={cl?.cinemaImg}
          className=" group-hover:opacity-40 w-[300px] h-[200px]"
          alt=""
        />
        <p
          onClick={handleLocationClick}
          className=" hidden group-hover:block  hover:text-white absolute  text-3xl  top-28  left-32   text-red-500 hover:cursor-pointer "
        >
          <BiCurrentLocation />
        </p>
      </div>
      <div className="  flex items-center justify-center  ">
        <p className=" text-center inline-flex    xxxs:text-sm sm:text-xl  font-bold">
          {cl?.CinemaName}
        </p>
      </div>

      <div className="  w-[300px] flex items-center justify-center flex-wrap cursor-pointer ">
        {finalRoomName?.map((r, i) => {
          return (
            <p
              onClick={() => {
                dispatch(
                  addRoom({
                    room: r?.RoomName,
                  })
                );
                nav(
                  `/cinema/${mid?.mid}/scheduling/${cl?.CinemaId}/${r?.RoomId}`
                );
                dispatch(
                  addCinema({
                    cinema: cl?.CinemaName,
                  })
                );
                document.getElementById("my_modal_1").showModal();
              }}
              key={i + 1}
              className="bg-red-500 rounded-xl block  xxss:inline-flex text-white p-2 m-2 xxxs:text-sm sm:text-xl hover:opacity-60"
            >
              {r?.RoomName}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CinemaList;
