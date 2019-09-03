import React from "react";
import { Container } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";

const Home = () => {
  return (
    <Container>
      <h1>Phadder</h1>
      <BuyersExplain />
      <SuppliersExplain />
    </Container>
  );
}

export default Home;
