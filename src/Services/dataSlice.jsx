import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    movieLists: (state,{payload}) => {
   
      state.movieList =payload.movieList
    },
   
  
  },
})

// Action creators are generated for each case reducer function
export const { movieLists } = dataSlice.actions

export default dataSlice.reducer