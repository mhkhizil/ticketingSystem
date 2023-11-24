import React, { useState } from "react";
import "../style.css";
import dataFetching from "../Data/dataFetching";
import { useParams } from "react-router-dom";

const SeatChoosing = () => {
  const[selected,setSelected]=useState([]);
  const {id}=useParams();
  console.log(selected);
  // console.log(id);
  const fetchingSetaNumbers=dataFetching("Tbl_RoomSeat");

  const seatForRoom=fetchingSetaNumbers?.filter((m)=>m.RoomId===parseInt(id));
  // console.log(seatForRoom);
  function chunkArray(array, chunkSize) {
    var result = [];
    for (var i = 0; i < array?.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
var chunkedArray = chunkArray(seatForRoom, 20);/// to get each row as a small  array within in the big array 
// console.log(chunkedArray[0][0]);
  // console.log(seatForRoom?.map((m)=>m));
  return (
    <div className=" w-[100%] flex flex-col items-center justify-center ">
     
        <div className=" my-6 bg-white w-[80%]  h-[100px]  shadow-spec"></div>
      
      <div className="w-[80%] ">
  <div>
    {
      chunkedArray?.map((c,i)=>{
        return(
          <div key={i+1} className="  flex items-center justify-center">
   
            {
              
              c?.map((s,a)=>{
                // console.log(c);

                return(
                  <p key={s?.SeatId} onClick={()=> {
                        setSelected(prevState=>([
                          ...prevState,
                          s?.SeatId
                        ]))
                  }}  className={`${selected.includes(s?.SeatId) ? 'bg-red-500':''} rounded-lg hover:bg-red-500 cursor-pointer m-1 text-center border border-r-white sm:text-sm  xxxs:text-xxs xxss:w-3 sm:w-6 md:w-12`}>{s?.SeatNo}</p>
                )
              })
            }
          </div>
        )
      })
    }
  </div>
        {/* row */}
        {/* <div className=" flex items-center justify-around">
          <div className=" flex ">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div className=" flex ">
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
          </div>
          <div className=' flex '>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    </div>
        </div> */}
      </div>
    </div>
  );
};

export default SeatChoosing;
