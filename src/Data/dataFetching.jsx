import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { movieLists } from '../Services/dataSlice';

const dataFetching = () => {
    // const dispatch=useDispatch();
    const [data, setData] = useState(null);
    const dataFetch=async ()=>{
const fetching=await fetch('https://raw.githubusercontent.com/sannlynnhtun-coding/Movie-Ticket-Online-Booking-System/main/MovieTicketOnlineBookingSystem.json');
const jsonData=await fetching.json();

setData(jsonData?.Tbl_MovieList);
console.log(data);
    };
    useEffect(()=>{
        dataFetch();
     
        // dispatch(movieLists(data?.Tbl_CinemaRoom));
   
    },[]);
    return data;

}

export default dataFetching
