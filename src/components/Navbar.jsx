import React from "react";
import { Container, Menu } from 'semantic-ui-react';
import "../css/style.css"

const Navbar = () => {
  return (
    <div className="ui inverted menu" id="nav-bar">
      <Container>
        <Menu.Item className="ui left aligned container" id="home-button" to="/">
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