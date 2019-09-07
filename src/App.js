import React from "react";
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { apiRequest } from './state/actions/oauthActions'
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = props => {
  let message = encodeURI('Jag testar att skriva på svenska')
  props.dispatch(apiRequest('http://localhost:3000/api/language_queries?content=' + message));
  if (props.flashMessage) {
    toast(props.flashMessage.message, {type: props.flashMessage.type})
  }
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Home />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashes.message
  }
}

export default connect(mapStateToProps)(App);
