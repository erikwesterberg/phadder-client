import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import configureStore from "./state/store/configureStore";
import { verifyCredentials } from "./state/actions/reduxTokenAuthConfig";
import { initialize } from 'redux-oauth';

const reduxOauthConfig = {
  backend: {
    apiUrl: 'http://localhost:3000/api',
    signOutPath: null,
    authProviderPaths: {
      facebook: '/auth/facebook/'
    }
  },
  cookies: document.cookie,
  currentLocation: document.URL
};

const store = configureStore();
verifyCredentials(store);

window.store = store

store.dispatch(initialize(reduxOauthConfig)).then(
  () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  }
);

serviceWorker.unregister();





