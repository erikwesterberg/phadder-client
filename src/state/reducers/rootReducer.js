import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import modalStateReducer from './modalStateReducer'
import flashReducer from './flashReducer'

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  modalState: modalStateReducer,
  flashes: flashReducer
})

export default rootReducer;