import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";

const Home = () => {
  const [explain, setExplain] = useState(<BuyersExplain />);

  return (
    <Container>
      <h1>Phadder</h1>
      <Button id="buyers-button" onClick={() => setExplain(<BuyersExplain />)}>Buyers</Button>
      <Button id="suppliers-button" onClick={() => setExplain(<SuppliersExplain />)}>Suppliers</Button>
      {explain}
    </Container>
  );
};

export default Home;
