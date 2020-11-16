import { SEARCH, GET_TRENDS } from "../types";

const initialState = {
  results: [],
  trends: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case GET_TRENDS:
      return {
        ...state,
        trends: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
