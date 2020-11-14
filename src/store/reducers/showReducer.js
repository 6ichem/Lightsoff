import {
  GET_POPULARSHOWS,
  GET_AIRTODAY,
  GET_SHOWS,
  GET_SHOWTRAILER,
  GET_SHOWCAST,
  GET_SIMILARSHOWS,
} from "../types";

const initialState = {
  popularShows: [],
  airToday: [],
  shows: [],
  showTrailer: [],
  showCast: [],
  similarShows: [],
};

export default function showReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POPULARSHOWS:
      return {
        ...state,
        popularShows: action.payload,
        loading: false,
      };
    case GET_AIRTODAY:
      return {
        ...state,
        airToday: action.payload,
        loading: false,
      };
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case GET_SHOWTRAILER:
      return {
        ...state,
        showTrailer: action.payload,
        loading: false,
      };
    case GET_SHOWCAST:
      return {
        ...state,
        showCast: action.payload,
        loading: false,
      };
    case GET_SIMILARSHOWS:
      return {
        ...state,
        similarShows: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
