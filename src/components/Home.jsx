import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";
import SignUp from "./SignUp";
import { connect } from 'react-redux'; 

const Home = (props) => {
  const [explain, setExplain] = useState(<BuyersExplain />);
  const [signup, setSignUp] = useState(<SignUp />)
  
  if (props.currentUser.isSignedIn ? setSignUp("") : "")

  return (
    <Container>
      <div>
        
        {signup}
      </div>
      <div>
        <Button
          id="buyers-button"
          onClick={() => setExplain(<BuyersExplain />)}
        >
          Buyers
        </Button>
        <Button
          id="suppliers-button"
          onClick={() => setExplain(<SuppliersExplain />)}
        >
          Suppliers
        </Button>
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

export default connect(mapStateToProps
)(Home);


