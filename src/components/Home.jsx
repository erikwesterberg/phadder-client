import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";
import SignUp from "./SignUp";

const Home = () => {
  const [explain, setExplain] = useState(<BuyersExplain />);
  const [signupForm, setSignUpForm ] = useState();

  return (
    <Container>
      <Button id="sign-up-button" onClick={() => setSignUpForm(<SignUp />)}>REGISTER AS A CLIENT</Button>
      {signupForm}
      <h1>Phadder</h1>
      <Button id="buyers-button" onClick={() => setExplain(<BuyersExplain />)}>Buyers</Button>
      <Button id="suppliers-button" onClick={() => setExplain(<SuppliersExplain />)}>Suppliers</Button>
      {explain}
    </Container>
  );
};

export default Home;
