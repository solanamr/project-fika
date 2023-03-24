import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../redux/states/moviesSlice";

export default configureStore({
  reducer: {
    movies: moviesSlice,
  },
});