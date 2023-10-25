import React from 'react'

const MovieCard = ({md}) => {
  return (
  < >
  <img className=' w-[300px] h-[400px] rounded-xl' src={md?.moviePath} alt="" />

  </>
  )
}

export default MovieCard
