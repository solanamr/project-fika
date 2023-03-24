import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    movies: [],
    moviesCopy: []
  };


  export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies", async () => {
      try {
        const res = await axios.get("/movies.json");

        const data = await res.data.movies;
        return {data: data};

      } catch (error) {
        console.log(error);
      }
    }
  );

  export const postMovie = createAsyncThunk("movies/postMovie", async (movie) => {
    try {
      const data = await axios.post("http://localhost:3000/movies", movie);
      return data;
    } catch (err) {
      console.error(err);
    }
  });

  export const deleteMovie = createAsyncThunk("movies/deleteMovie", async (id) => {
    try {
      const data = await axios.delete(`http://localhost:3000/movies/${id}`);
      console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  });

  export const moviesSlice = createSlice({
    name: "movies",
    initialState: EmptyState,
    reducers: {
      addMovie: (state, action) => {
        state.movies.push(action.payload)
      },
      filterMovie: (state, action) => {
        state.movies = state.movies.filter(
          (d) => d.id !== action.payload
        ); 
      },
      searchMovies: (state, action) =>{
        state.movies = action.payload === "" ? state.movies : state.moviesCopy.filter((e) => 
        e.title.toLowerCase().includes(action.payload));
      },
      resetMovies: (state) =>{
        state.moviesCopy = []
      },
      sortMovies: (state, action) => {
        action.payload === "asc"
          ? state.movies.sort(function (a, b) {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : state.movies.sort(function (a, b) {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      },
      filterGenre: (state, action) => {
        state.movies = state.moviesCopy.filter(
          (m) => m.genre === action.payload
        );
      },


    },
    extraReducers(builder) {
      builder
        .addCase(fetchMovies.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchMovies.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.movies = data.data;
          state.moviesCopy = data.data;
  
          if (data.errors === "There is not data") {
            state.movies = [];
            state.moviesCopy = [];
          }
          
        });
    },
  });

  export const { addMovie, filterMovie, searchMovies, resetMovies, sortMovies, filterGenre } = moviesSlice.actions;

// export const selectById = (state, id) => state.properties.properties.find((i) => i.id.toString() === id)
// export const selectAllProperties = (state) => state.properties.properties
// export const selectMeta = (state) => state.properties.meta
// export const selectMeta2 = (state) => state.properties.meta2
// export const selectMeta3 = (state) => state.properties.meta3

export default moviesSlice.reducer;