import { createSlice } from "@reduxjs/toolkit";

const miniTVSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    isLoadingMovies:false,
    viewMovieDetail:{}
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setLoadingmovie: (state, action) => {
      state.isLoadingMovies = action.payload;
    },
    setViewMovieDetail: (state, action) => {
      state.viewMovieDetail = action.payload;
    },
  },
});

export const { setMovies ,setLoadingmovie,setViewMovieDetail} = miniTVSlice.actions;

export default miniTVSlice.reducer;
