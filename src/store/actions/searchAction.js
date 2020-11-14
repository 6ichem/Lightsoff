import { SEARCH } from "../types";
import axios from "axios";

export const searchShows = (query) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=KEY&language=en-US&query=${query}&include_adult=false`
    );
    dispatch({
      type: SEARCH,
      payload: res.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};
