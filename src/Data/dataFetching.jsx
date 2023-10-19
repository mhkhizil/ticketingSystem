import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { movieLists } from '../Services/dataSlice';

const dataFetching = () => {
    const dispatch=useDispatch();
    const dataFetch=async ()=>{
const fetching=await fetch('https://raw.githubusercontent.com/sannlynnhtun-coding/Movie-Ticket-Online-Booking-System/main/MovieTicketOnlineBookingSystem.json');
const data=await fetching.json();
console.log(data?.Tbl_CinemaRoom);
    };
    useEffect(()=>{
        dataFetch();
     
        // dispatch(movieLists(data?.Tbl_CinemaRoom));
   
    },[])

}

export default dataFetching
