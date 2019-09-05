import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";
import SignUp from "./SignUp";
import CreateRequest from "./CreateRequest";
import { connect } from "react-redux";
import "../css/style.css"

const Home = props => {
  const [explain, setExplain] = useState(<BuyersExplain />);

  let signUpActions;
  let welcomeMessage; // to be removed when we install flash messages
  if (props.currentUser.isSignedIn === false) {
    signUpActions = <SignUp />;
  } else {
    signUpActions = "";
    welcomeMessage = `Welcome ${props.currentUser.attributes.firstName}!`; // to be removed when we install flash messages
  }

  return (
    <Container>
      <div id="cover">
        {welcomeMessage}
        <div id="main-actions">
          {signUpActions}
          <CreateRequest />
        </div>
      </div>
      <div id="explain-selector">
        <div id="buyer-button-div">
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

export default connect(mapStateToProps)(Home);
