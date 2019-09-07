import { fetch, parseResponse } from 'redux-oauth';

// const reduxOauthConfig = {
//   backend: {
//     apiUrl: 'http://localhost:3000/api',
//     signOutPath: null,
//     authProviderPaths: {
//       facebook: '/auth/facebook/'
//     }
//   },
//   cookies: document.cookie,
//   currentLocation: document.URL
// };

const apiStart = () => {
  return { type: "API_START" };
}

const apiDone = (payload) => {
  return { type: "API_DONE", payload };
}

const apiError = (payload) => {
  return { type: "API_ERROR", payload };
}

const apiRequest = (url) => {
  return dispatch => {
    dispatch(apiStart());

    return dispatch(fetch(url, { method: 'POST' }))
      .then(parseResponse)
      .then(response => {
        dispatch(apiDone(response))
      })
      .catch(errors => dispatch(apiError(errors)));
  };
}

export { apiRequest }
