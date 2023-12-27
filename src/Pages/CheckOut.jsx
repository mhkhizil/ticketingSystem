import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const data = useSelector((state) => state.dataReducer);
  console.log(data);
  return (
    //    <div className=" w-full flex items-center justify-center">
    //    <div className=" w-[50%] ">
    //    <p className="  italic font-bold text-3xl text-center">  Confirm</p>
    //    <div className=" ">
    //    <div className=" my-4 flex items-center  justify-around">
    //          <p className=" text-xl w-32 text-right">Movie:</p>
    //          <p className=" text-xl  w-32 text-left">{data?.movie}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className= " text-xl  w-32 text-right">Cinema:</p>
    //          <p className=" text-xl  w-32    text-left">{data?.cinema}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right">Room:</p>
    //          <p className=" text-xl  w-32  text-left">{data?.room}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right">Show date:</p>
    //          <p className=" text-xl w-32  text-left">{data?.showDate}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl w-32 text-right">Show time:</p>
    //          <p className=" text-xl w-32   text-left">{data?.showTime}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right"> Seat Chosen:</p>
    //          <div className=" text-xl w-32  text-left">
    //          {
    //          data?.selectedSeat?.map(s=>{
    //              return(
    //                  <p  className=" inline" >{s?.SeatNo},</p>
    //              )
    //              })
    //         }
    //          </div>
    //       </div>
    //    </div>
    // 
    //    </div>

    //  </div>
    <>
      <h1 className="  italic font-bold text-3xl text-center">Confirm</h1>
      <table className=" table text-center">
        <tbody>
          <tr>
            <td className=" text-xl text-right">Movie:</td>
            <td className=" text-xl text-center">{data?.movie}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Cinema:</td>
            <td className=" text-xl text-center">{data?.cinema}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Room:</td>
            <td className=" text-xl text-center">{data?.room}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Show Date:</td>
            <td className=" text-xl text-center">{data?.showDate}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Show Time:</td>
            <td className=" text-xl text-center">{data?.showTime}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right"> Seat Chosen:</td>
            <td className=" text-xl text-center">
              {" "}
              {data?.selectedSeat?.map((s) => {
                return <p className=" inline">{s?.SeatNo},</p>;
              })}
            </td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Total Cost:</td>
            <td className=" text-xl text-center">{data?.totalSeatPrice}MMK</td>
          </tr>
        </tbody>
      </table>
      <div className=" flex items-center justify-center">
         <button className=" text-white my-4  mx-4 text-end btn glass btn-wide bg-red-700">Book Now</button>
         <button className=" text-white my-4 mx-4 text-end btn glass btn-wide bg-red-700">Buy Now</button>
       </div>
    </>
  );
};
//reload lk yin hoem route ko pyn yt ag lk alert box pya p
//route guard htl
// cinmea choosing ko pyinnpm run
export default CheckOut;
