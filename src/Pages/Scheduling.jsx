import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataFetching from "../Data/dataFetching";
import { data } from "autoprefixer";
import { useScroll } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addShowDate, addShowTime } from "../Services/dataSlice";

const Scheduling = () => {
  const dispatch=useDispatch();

  const nav = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);
  const params = useParams();
  const seperateDT = [];
  const fetchingMovieShowDateId = dataFetching("Tbl_MovieShowDate");
  const finalShowDataFetching = dataFetching("Tbl_MovieSchedule");
  const dateArr = fetchingMovieShowDateId?.filter(
    (sd) =>
      sd?.CinemaId === parseInt(params?.cid) &&
      sd?.RoomId === parseInt(params?.rid) &&
      sd?.MovieId === parseInt(params?.mid)
  );
  const finalDate = finalShowDataFetching?.filter(
    (fd) => fd?.ShowDateId === parseInt(dateArr?.map((da) => da?.ShowDateId))
  );
  finalDate?.map((d) =>
    seperateDT.push({
      time: d?.ShowDateTime?.split("T")[1],
      date: d?.ShowDateTime?.split("T")[0],
    })
  );
console.log(seperateDT);
  const [singleDate] = seperateDT;
  console.log(singleDate);

  //   const finalShowDate=
  //   console.log(dateArr?.map((da)=>da?.ShowDateId));
  return (
    <div className=" ">
      <dialog id="my_modal_1" className="modal   ">
        <div className="modal-box h-[300px]  ">
          <form method="dialog" className="">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className=" font-bold text-lg text-center">
            Please select the date that you want to watch!
          </h3>
          <h1 className=" font-bold text-lg text-center text-red-500">
            {singleDate?.date}
          </h1>
          <div>
            <div className=" my-2 w-full flex justify-center">
              <details className="dropdown  ">
                <summary className="m-1 btn  ">Select Time</summary>
                <ul
                  className={` shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}
                >
                  {seperateDT?.map((fd, i) => {
                    return (
                      <li
                        key={i + 1}
                        onClick={() => {
                          setSelectedTime(fd?.time);
                        }}
                        className={`${
                          fd?.time === selectedTime ? "text-red-600" : ""
                        }`}
                      >
                        <a>{fd?.time}</a>
                      </li>
                    );
                  })}
                </ul>
              </details>
              <button
                onClick={() => {
                  dispatch(
                    addShowDate({
                      showDate:singleDate?.date
                    })
                  )
                  nav(`/seating/${params?.rid}`);
                  dispatch(addShowTime({
                    showTime:selectedTime
                  }))
                }}
                disabled={selectedTime === null}
                className=" rounded-xl  m-1 btn  bg-red-600"
              >
                Choose Seat
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Scheduling;
