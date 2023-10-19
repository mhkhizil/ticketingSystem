import React from 'react'
import Nav from '../Components/Nav'
import dataFetching from '../Data/dataFetching'

const HomePage = () => {
  dataFetching();
  return (
    <div>
        <Nav/>
  This is home
    </div>
  )
}

export default HomePage
