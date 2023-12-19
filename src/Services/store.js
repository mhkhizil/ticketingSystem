import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import filterMovieReducer from './filterMovieSlice'


export const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
    filterMovie:filterMovieReducer
  },
})