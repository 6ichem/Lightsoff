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
  const res = await axios.get(
    "https://api.themoviedb.org/3/tv/popular?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US"
  );
  dispatch({
    type: GET_POPULARSHOWS,
    payload: res.data,
  });
};

export const getAirToday = () => async (dispatch) => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/tv/airing_today?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US"
  );
  dispatch({
    type: GET_AIRTODAY,
    payload: res.data,
  });
};

export const getShows = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US`
  );
  dispatch({
    type: GET_SHOWS,
    payload: res.data,
  });
};

export const getShowTrailer = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US`
  );
  dispatch({
    type: GET_SHOWTRAILER,
    payload: res.data,
  });
};

export const getShowCast = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US`
  );
  dispatch({
    type: GET_SHOWCAST,
    payload: res.data,
  });
};

export const getSimilarShows = (id = 900) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US`
  );
  dispatch({
    type: GET_SIMILARSHOWS,
    payload: res.data,
  });
};
