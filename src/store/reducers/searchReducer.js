import { SEARCH } from "../types";

const initialState = {
  results: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
