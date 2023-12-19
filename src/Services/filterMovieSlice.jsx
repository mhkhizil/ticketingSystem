import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredMovie:null
};

export const filterMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addfilteredMovie: (state,  {payload} ) => {
      state.filteredMovie = payload.filteredMovie;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const {
addfilteredMovie
} = filterMovieSlice.actions;

export default filterMovieSlice.reducer;
