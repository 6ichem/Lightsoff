import { SEARCH, GET_TRENDS } from "../types";
import axios from "axios";

export const searchShows = (query = "") => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=89c9c155c849d248347439ec1d8a7bd6&language=en-US&query=${query}&include_adult=false`
  );
  dispatch({
    type: SEARCH,
    payload: res.data,
  });
};

export const getTrends = (activePage = 1) => async (dispatch) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=89c9c155c849d248347439ec1d8a7bd6&page=${activePage}`
  );
  dispatch({
    type: GET_TRENDS,
    payload: res.data,
  });
};
