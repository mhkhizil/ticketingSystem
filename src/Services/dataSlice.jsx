import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
  cinema: null,
  room: null,
  showDate:null,
  showTime: null,
  selectedSeat: [],
  totalSeatPrice:null
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
    addTotalSeatPrice: (state, { payload }) => {
      state.totalSeatPrice = payload.totalSeatPrice;
    },
    clearData: (state) => {
      // Reset the relevant parts of the state to initial values
      return {
        ...state,
        movie: "",
        cinema: "",
        room: "",
        showDate: "",
        showTime: "",
        selectedSeat: [],
        totalSeatPrice: 0,
      };
    }
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
  addTotalSeatPrice,
  clearData 
} = dataSlice.actions;

export default dataSlice.reducer;
