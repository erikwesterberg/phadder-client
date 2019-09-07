import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import modalStateReducer from './modalStateReducer'
import flashReducer from './flashReducer'
import oauthReducer from './oauthReducer'
import { authStateReducer } from 'redux-oauth';


const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  modalState: modalStateReducer,
  flashes: flashReducer,
  auth: authStateReducer,
  oauthReducer
})

export default rootReducer;