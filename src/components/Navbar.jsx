import React from "react";
import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <div className="ui inverted menu">
      <Container>
        <Menu.Item className="ui left aligned container" to="/">
          Phadder
        </Menu.Item>
        <Menu.Item className="ui right aligned container" id="login-button">
          Log In
        </Menu.Item>
      </Container>
    </div>
  );
}


export default Navbar;