import {
  GET_POPULARSHOWS,
  GET_AIRTODAY,
  GET_SHOWS,
  GET_SHOWTRAILER,
  GET_SHOWCAST,
  GET_SIMILARSHOWS,
} from "../types";
import axios from "axios";

export const getPopularShows = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=KEY&language=en-US"
    );
    dispatch({
      type: GET_POPULARSHOWS,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getAirToday = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=KEY&language=en-US"
    );
    dispatch({
      type: GET_AIRTODAY,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getShows = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=KEY&language=en-US`
    );
    dispatch({
      type: GET_SHOWS,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getShowTrailer = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=KEY&language=en-US`
    );
    dispatch({
      type: GET_SHOWTRAILER,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getShowCast = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=KEY&language=en-US`
    );
    dispatch({
      type: GET_SHOWCAST,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const getSimilarShows = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=KEY&language=en-US`
    );
    dispatch({
      type: GET_SIMILARSHOWS,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};
