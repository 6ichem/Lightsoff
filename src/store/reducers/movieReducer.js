import {
  GET_MOVIE,
  GET_TRAILER,
  GET_CAST,
  GET_SIMILARMOVIES,
  GET_POPULARMOVIES,
  GET_PLAYINGMOVIES,
} from "../types";

const initialState = {
  movie: [],
  trailer: [],
  cast: [],
  similarMovies: [],
  loading: true,
  popularMovies: [],
  playingMovies: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case GET_TRAILER:
      return {
        ...state,
        trailer: action.payload,
        loading: false,
      };
    case GET_CAST:
      return {
        ...state,
        cast: action.payload,
        loading: false,
      };
    case GET_SIMILARMOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        loading: false,
      };
    case GET_POPULARMOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case GET_PLAYINGMOVIES:
      return {
        ...state,
        playingMovies: action.payload,
      };
    default:
      return state;
  }
}
