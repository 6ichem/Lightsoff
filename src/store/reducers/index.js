import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import showReducer from "./showReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movie: movieReducer,
  trailer: movieReducer,
  cast: movieReducer,
  similarMovies: movieReducer,
  loading: movieReducer,
  popularMovies: movieReducer,
  playingMovies: movieReducer,
  popularShows: showReducer,
  airToday: showReducer,
  results: searchReducer,
  shows: showReducer,
  showTrailer: showReducer,
  showCast: showReducer,
  similarShows: showReducer,
});
