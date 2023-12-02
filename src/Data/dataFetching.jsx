import React, { useEffect, useState } from 'react'



const dataFetching = (dataKey) => {
    // const dispatch=useDispatch();
    const [data, setData] = useState(null);
    const dataFetch=async ()=>{
const fetching=await fetch('https://raw.githubusercontent.com/sannlynnhtun-coding/Movie-Ticket-Online-Booking-System/main/MovieTicketOnlineBookingSystem.json');

const jsonData=await fetching.json();
if (jsonData?.[dataKey]!==data) {
    setData(jsonData?.[dataKey]);
}

// console.log(jsonData?.[dataKey]);
    };
    useEffect(()=>{
        dataFetch();
     
        // dispatch(movieLists(data?.Tbl_CinemaRoom));
   
    },[]);
    return data;

}

export default dataFetching
