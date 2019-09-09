import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import i18n from './i18n'
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import configuredStore from './state/store/store'
import { verifyCredentials } from "./state/actions/reduxTokenAuthConfig";
import { initialize } from 'redux-oauth';
import './modules/capitalize'

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

const store = configuredStore;
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