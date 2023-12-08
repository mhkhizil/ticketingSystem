import React from "react";

import { BiCurrentLocation } from "react-icons/bi";
import dataFetching from "../Data/dataFetching";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCinema, addRoom } from "../Services/dataSlice";

const CinemaList = ({ cl, roomNames, mid }) => {
  const dispatch = useDispatch();
  // console.log(roomNames);
  //movie id por mu t p room id ko tite sit
  const cinemaRoom = dataFetching("Tbl_CinemaRoom");
  console.log(useSelector((state) => state.dataReducer));
  const nav = useNavigate();
  // console.log(cl);
  // console.log(cinemaRoom);
  //direction to cinema location
  const handleLocationClick = () => {
    const cinemaLocation = cl?.CinemaLocation;
    window.location.href = `https://www.google.com/maps?q=${cinemaLocation}`;
  };
  return (
    <>
      <div className="  justify-center items-center  flex-1  xxss:flex xxss:items-center  xxss:justify-evenly">
        <div className=" inline-flex  xxss:w-[20%] ">
          <p className=" inline-flex    xxxs:text-sm sm:text-xl  font-bold">
            {cl?.CinemaName}
          </p>
        </div>
        <div className="inline-flex  mx-3 ">
          <p
            onClick={handleLocationClick}
            className="  inline-flex xxxs:text-sm sm:text-2xl hover:text-red-500 hover:cursor-pointer "
          >
            <BiCurrentLocation />
          </p>
        </div>

        <div className=" cursor-pointer ">
          {roomNames?.map((r, i) => {
            return (
              <p
                onClick={() => {
                  dispatch(
                    addRoom({
                      room: r?.RoomName
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
    </>
  );
};

export default CinemaList;
