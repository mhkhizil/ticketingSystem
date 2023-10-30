import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'

import { Outlet } from 'react-router-dom';

const HomePage = () => {
 
//   console.log(updatedBrands);
//  useEffect(()=>{
//     dispatch(movieLists(movieData))
//  },[]);
//  console.log(movieData);
  return (
    <div>
        <Nav/>
        <Outlet/>


    </div>
  )
}

export default HomePage
