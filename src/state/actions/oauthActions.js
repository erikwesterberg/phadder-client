import { fetch, parseResponse } from 'redux-oauth';

const apiStart = () => {
  return { type: "API_START" };
}

const apiDone = (payload) => {
  return { type: "API_DONE", payload };
}

const apiError = (payload) => {
  return { type: "API_ERROR", payload };
}
// Example usage: 
// let message = encodeURI('Jag testar att skriva på svenska')
// props.dispatch(apiRequest('http://localhost:3000/api/language_queries?content=' + message, 'POST'));

// this method comes from 'redux-oauth' and varifies user with the back end
const apiRequest = (url, httpMethod) => {
  return dispatch => {
    dispatch(apiStart());

    return dispatch(fetch(url, { method: httpMethod }))
      .then(parseResponse)
      .then(response => {
        // we need to think about this...
        dispatch(apiDone(response))
      })
      .catch(errors => dispatch(apiError(errors)));
  };
}

export { apiRequest }
