import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";
import SignUp from "./SignUp";
import CreateRequest from "./CreateRequest";
import { connect } from "react-redux";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import "../css/style.css";
import CityFetcher from './CityFetcher';

const Home = props => {
  const [explain, setExplain] = useState(<BuyersExplain />);

  let signUpActions;
  if (props.currentUser.isSignedIn === false) {
    signUpActions = <SignUp />;
  } else {
    signUpActions = "";
    props.dispatchMessage(
      `Welcome ${props.currentUser.attributes.firstName}!`,
      "success"
    );
  }

  return (
    <Container>
      <div id="cover">
        <div id="main-actions">
          {signUpActions}
          <CreateRequest />

        </div>
      </div>
      <div id="explain-selector">
        <div id="buyer-button-div">
          <CityFetcher />
          <Button
            id="buyers-button"
            onClick={() => setExplain(<BuyersExplain />)}
          >
            BUYERS
          </Button>
        </div>
        <div id="supplier-button-div">
          <Button
            id="suppliers-button"
            onClick={() => setExplain(<SuppliersExplain />)}
          >
            SUPPLIERS
          </Button>
        </div>
      </div>
      {explain}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(flashActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
