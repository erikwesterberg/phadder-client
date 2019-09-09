import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const configureStore = () => {
  // return createStore(rootReducer, applyMiddleware(thunk, logger));
  return createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk, logger)
    )
  )
};

export default configureStore;
