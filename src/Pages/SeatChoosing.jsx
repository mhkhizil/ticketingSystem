import React from "react";
import "../style.css";
import dataFetching from "../Data/dataFetching";
import { useParams } from "react-router-dom";

const SeatChoosing = () => {
  const {id}=useParams();
  console.log(id);
  const fetchingSetaNumbers=dataFetching("Tbl_RoomSeat");

  const seatForRoom=fetchingSetaNumbers?.filter((m)=>m.RoomId===parseInt(id));
  console.log(seatForRoom?.map((m)=>m));
  return (
    <div className=" w-[100%] flex-col items-center justify-center ">
      <div className="  my-16 flex items-center justify-center">
        <div className=" bg-white w-[800px] h-[100px]  shadow-spec"></div>
      </div>
      <div>
    <div className=" px-72 flex  flex-wrap items-center justify-around">
    {
      seatForRoom?.map((m)=>{
        return(
          <p className="p-1 m-2 border w-[30px]">{m?.SeatNo}</p>
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
