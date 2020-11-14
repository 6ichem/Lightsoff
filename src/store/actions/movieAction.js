import {
  GET_MOVIE,
  GET_TRAILER,
  GET_CAST,
  GET_SIMILARMOVIES,
  GET_POPULARMOVIES,
  GET_PLAYINGMOVIES,
} from "../types";
import axios from "axios";

export const getMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=KEY&language=en-US
        `
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getTrailer = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=KEY&language=en-US`
    );
    dispatch({
      type: GET_TRAILER,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getCast = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=KEY`
    );
    dispatch({
      type: GET_CAST,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getSimilarMovies = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=KEY&language=en-US&page=1`
    );
    dispatch({
      type: GET_SIMILARMOVIES,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=KEY&language=en-US&page=1&region=us"
    );
    dispatch({
      type: GET_POPULARMOVIES,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getPlayingMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=KEY&language=en-US&region=us"
    );
    dispatch({
      type: GET_PLAYINGMOVIES,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};
