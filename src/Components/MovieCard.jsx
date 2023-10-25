import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({md}) => {
  return (
  < >
<Link to={'/cinema'}>
<img className=' w-[300px] h-[400px] rounded-xl' src={md?.moviePath} alt="" />
</Link>

  </>
  )
}

export default MovieCard
