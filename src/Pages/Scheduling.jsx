import React from "react";
import { useParams } from "react-router-dom";
import dataFetching from "../Data/dataFetching";
import { data } from "autoprefixer";

const Scheduling = () => {
  const params = useParams();

  const fetchingMovieShowDateId = dataFetching("Tbl_MovieShowDate");
  const finalShowDataFetching=dataFetching("Tbl_MovieSchedule");
  const dateArr=fetchingMovieShowDateId?.filter((sd)=>sd?.CinemaId===parseInt(params?.cid) && sd?.RoomId===parseInt(params?.rid) && sd?.MovieId===parseInt(params?.mid));
  const finalDate=finalShowDataFetching?.filter((fd)=>fd?.ShowDateId===parseInt(dateArr?.map((da)=>da?.ShowDateId)));
//   const finalShowDate=
//   console.log(dateArr?.map((da)=>da?.ShowDateId));
  return (
    <div className=" ">
   <dialog id="my_modal_1" className="modal   ">
  <div className="modal-box h-[300px]  ">
    <form method="dialog" className="">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   
    <h3 className=" font-bold text-lg text-center">Please select the date that you want to watch!</h3>
    <div className=" my-4 w-full flex justify-center">
    <details className="dropdown  ">
  <summary className="m-1 btn  ">Select date</summary>
  <ul className="  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
   {
    finalDate?.map((fd,i)=>{
        return(
            <li key={i+1}><a >{fd?.ShowDateTime}</a></li>
        )
    })
   }
    

  </ul>
</details>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default Scheduling;
