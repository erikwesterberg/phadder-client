import React, { useState } from "react";
import { Container, Button, Modal } from "semantic-ui-react";
import BuyersExplain from "./BuyersExplain";
import SuppliersExplain from "./SuppliersExplain";
import SignUp from "./SignUp";

const Home = () => {
  const [explain, setExplain] = useState(<BuyersExplain />);

  return (
    <Container>
      <div>
        <Modal
          trigger={<Button id="sign-up-button">REGISTER AS A CLIENT</Button>}
          centered={false}
        >
          <Modal.Header>Join us!</Modal.Header>
          <Modal.Content>
            <SignUp />
          </Modal.Content>
        </Modal>
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

export default Home;
