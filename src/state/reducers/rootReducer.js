import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import modalStateReducer from './modalStateReducer'
import flashReducer from './flashReducer'
import apiRequestReducer from './apiRequestReducer'
import { authStateReducer } from 'redux-oauth';
import locationReducer from './locationReducer'


const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  modalState: modalStateReducer,
  flashes: flashReducer,
  auth: authStateReducer,
  apiRequest: apiRequestReducer,
  location: locationReducer
})

export default rootReducer;