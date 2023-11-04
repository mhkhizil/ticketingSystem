import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cinema from '../Pages/Cinema'
import Movies from '../Pages/Movies'
import Scheduling from '../Pages/Scheduling'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<HomePage/>}>
        <Route index element={<Movies/>}/>
        <Route path='/cinema/:mid' element={<Cinema/>}>
          <Route path='/cinema/:mid/scheduling/:cid/:rid' element={<Scheduling/>}/>
        </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Path
