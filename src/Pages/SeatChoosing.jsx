import React, { useState } from "react";

import dataFetching from "../Data/dataFetching";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedSeat, addTotalSeatPrice } from "../Services/dataSlice";
import Swal from "sweetalert2";

const SeatChoosing = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataReducer);
  const [selected, setSelected] = useState([]);
  const { id } = useParams();
  // console.log(selected);
  // console.log(id);
  const fetchingSetaNumbers = dataFetching("Tbl_RoomSeat");
  const fetchingSeatPrice = dataFetching("Tbl_SeatPrice");
  const seatPriceForRoom = fetchingSeatPrice?.filter(
    (m) => m.RoomId === parseInt(id)
  );
  const seatForRoom = fetchingSetaNumbers?.filter(
    (m) => m.RoomId === parseInt(id)
  );
  console.log(seatPriceForRoom);
  // console.log(seatForRoom);
  function chunkArray(array, chunkSize) {
    var result = [];
    for (var i = 0; i < array?.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
  var chunkedArray = chunkArray(seatForRoom, 20); /// to get each row as a small  array within in the big array
  // console.log(chunkedArray);
  // console.log(seatForRoom?.map((m)=>m));
  const seatNoLooping = seatForRoom?.filter((se) =>
    selected.includes(se?.SeatId)
  );
  console.log(seatNoLooping);
  //  console.log(seatPriceForRoom);
  //  const finalSeatPrice=seatPriceForRoom?.filter(spr=>seatNoLooping?.some((seat) => seat.RowName === spr.RowName));
  //  console.log(finalSeatPrice);

  const totalPrice = seatNoLooping?.reduce((acc, seat) => {
    const seatPrice = seatPriceForRoom.find(
      (price) => price.RowName === seat.RowName
    );
    return acc + (seatPrice ? seatPrice.SeatPrice : 0);
  }, 0);
  console.log(totalPrice);

  return (
    <div className=" w-[100%] flex flex-col items-center justify-center ">
      <div className=" my-6 bg-white w-[80%]  h-[100px]  shadow-spec"></div>

      <div className="w-[80%]  ">
        <div className=" flex justify-evenly   ">
          <div className=" flex-col  ">
            {seatPriceForRoom?.map((p) => (
              <p className=" text-center mb-2 border sm:text-sm  xxxs:text-xxs xxss:w-3 sm:w-6 md:w-12">
                {p?.RowName}
              </p>
            ))}
          </div>
          <div>
            {chunkedArray?.map((c, i) => {
              return (
                <div key={i + 1} className="  flex items-center justify-center">
                  {c?.map((s, a) => {
                    // console.log(s);

                    return (
                      <p
                        key={s?.SeatId}
                        onClick={() => {
                          setSelected((prevState) => {
                            if (prevState.includes(s?.SeatId)) {
                              // Remove the SeatId if it's already present
                              return prevState.filter((id) => id !== s?.SeatId);
                            } else {
                              // Add the SeatId if it's not present
                              return [...prevState, s?.SeatId];
                            }
                          });
                        }}
                        className={`${
                          selected.includes(s?.SeatId) &&
                          s?.SeatType === "single"
                            ? "bg-red-500"
                            : selected.includes(s?.SeatId) &&
                              s?.SeatType === "couple"
                            ? "bg-blue-700"
                            : ""
                        } rounded-lg hover:bg-red-500 cursor-pointer m-1 text-center border border-r-white sm:text-sm  xxxs:text-xxs xxss:w-3 sm:w-6 md:w-12`}
                      >
                        {s?.SeatNo}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex  items-center justify-center">
        <div className=" flex items-center justify-around">
          <div className=" w-10 h-5 bg-red-500 rounded-2xl"></div>
          <p className="mx-2"> Single</p>
        </div>
        <div className=" flex items-center justify-around">
          <div className=" w-10 h-5 bg-blue-700 rounded-2xl"></div>
          <p className="mx-2"> Couple</p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        {seatNoLooping?.length != 0 ? <p>Selected seats:</p> : ""}
        {seatNoLooping?.map((seat) => {
          return <p>{seat?.SeatNo},</p>;
        })}
      </div>
      {seatNoLooping?.length != 0 ? (
        <button
          onClick={() => {
            dispatch(
              addSelectedSeat({
                selectedSeat: seatNoLooping,
              })
            );
            dispatch(
              addTotalSeatPrice({
                totalSeatPrice: totalPrice,
              })
            );
            if (
              data?.movie === null ||
              data?.cinema === null ||
              data?.showTime === null
            ) {
              let timerInterval;
              Swal.fire({
                title: "Auto redirect alert!",
                html: "Data required !you will be redirected to home page to choose data in <b></b> milliseconds.",
                timer: 3000,
                timerProgressBar: true,
                background: "#212730",
                didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  nav("/");
                }
              });
            } else {
              nav("/checkout");
            }
          }}
          className=" bg-red-700 text-white my-4 text-end btn glass"
        >
          Check out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SeatChoosing;
