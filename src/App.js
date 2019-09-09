import React, { Suspense } from "react";
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = props => {

  if (props.flashMessage) {
    toast(props.flashMessage.message, { type: props.flashMessage.type })
  }
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Navbar />
        <ToastContainer />
        <Home />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashes.message
  }
}

export default connect(mapStateToProps)(App);
