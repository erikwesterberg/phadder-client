
import { SIGN_OUT } from 'redux-oauth';

const initialState = {
  loading: false,
  loaded: false,
  time: null,
  errors: null
};

const oauthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_START":
      return {
        ...state,
        loading: true, loaded: false, time: null, errors: null
      };
    case "API_DONE":
      return {
        ...state,
        loading: false, loaded: true, time: action.payload.time, errors: null
      };
    case "API_ERROR":
      return {
        ...state,
        loading: false, loaded: false, time: null, errors: action.payload.toString()
      };
      case SIGN_OUT:
        return {
          ...state,
          ...initialState
        };  
    default:
      return state;
  }
}

export default oauthReducer