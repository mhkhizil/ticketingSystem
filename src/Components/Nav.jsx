import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav  className=' mb-6'>
        <div className="  navbar bg-base-200 shadow-xl">


<div className="  block xxxs:flex-1">
<Link to={'/'}>
    <p className="btn btn-ghost normal-case md:text-xl  ">Myanmar  <span className= '  font-Lobster normal-case text-sm sm:text-lg md:text-xl    text-red-500'>Ticketing </span>Service</p>
    </Link>
    <p></p>
  </div>

  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className=" md:m-4  input input-bordered w-24 md:w-auto" />
    </div>
   
  </div>

</div>
    </nav>
  )
}

export default Nav
