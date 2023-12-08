import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
  cinema: null,
  room: null,
  showDate:null,
  showTime: null,
  selectedSeat: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addMovieName: (state, { payload }) => {
      state.movie = payload.movie;
    },
    addCinema: (state, { payload }) => {
      state.cinema = payload.cinema;
    },
    addRoom: (state, { payload }) => {
      state.room = payload.room;
    },
    addShowDate: (state, { payload }) => {
      state.showDate = payload.showDate;
    },
    addShowTime: (state, { payload }) => {
      state.showTime = payload.showTime;
    },
    addSelectedSeat: (state, { payload }) => {
      state.selectedSeat = payload.selectedSeat;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovieName,
  addCinema,
  addRoom,
  addShowDate,
  addShowTime,
  addSelectedSeat,
} = dataSlice.actions;

export default dataSlice.reducer;
