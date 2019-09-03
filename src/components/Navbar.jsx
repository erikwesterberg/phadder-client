import React from "react";
import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <div className="ui stackable menu">
      <Container>
        <Menu.Item to="/">Phadder</Menu.Item>
        <Menu.Item id="login-button">Log In</Menu.Item>
      </Container>
     </div>
    
  );
}


export default Navbar;