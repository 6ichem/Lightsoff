import {
  GET_MOVIE,
  GET_TRAILER,
  GET_CAST,
  GET_SIMILARMOVIES,
  GET_POPULARMOVIES,
  GET_PLAYINGMOVIES,
} from "../types";
import axios from "axios";

export const getMovie = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US
        `
  );
  dispatch({
    type: GET_MOVIE,
    payload: res.data,
  });
};

export const getTrailer = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US`
  );
  dispatch({
    type: GET_TRAILER,
    payload: res.data,
  });
};

export const getCast = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=89c9c155c849d248347439ec1d8a7bd6`
  );
  dispatch({
    type: GET_CAST,
    payload: res.data,
  });
};

export const getSimilarMovies = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US&page=1`
  );
  dispatch({
    type: GET_SIMILARMOVIES,
    payload: res.data,
  });
};

export const getPopularMovies = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US&page=1&region=us"
  );
  dispatch({
    type: GET_POPULARMOVIES,
    payload: res.data,
  });
};

export const getPlayingMovies = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US&region=us"
  );
  dispatch({
    type: GET_PLAYINGMOVIES,
    payload: res.data,
  });
};
