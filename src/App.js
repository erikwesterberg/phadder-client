import React from "react";
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = props => {
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
