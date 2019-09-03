import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";

const Home = () => {
  const [explain, setExplain] = useState(<BuyersExplain />);

  return (
    <Container>
      <h1>Phadder</h1>
      <button id="buyers-button" onClick={() => setExplain(<BuyersExplain />)}>Buyers</button>
      <button id="suppliers-button" onClick={() => setExplain(<SuppliersExplain />)}>
        Suppliers
      </button>
      {explain}
    </Container>
  );
};

export default Home;
