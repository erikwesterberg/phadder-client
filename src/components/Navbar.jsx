import React from "react";
import { Container, Menu } from "semantic-ui-react";
import LogIn from "./LogIn";
import { connect } from "react-redux";
import "../css/style.css";

const Navbar = props => {
  let logInActions;
  props.currentUser.isSignedIn === false
    ? (logInActions = <LogIn />)
    : (logInActions = "");

  return (
    <div className="ui inverted menu" id="nav-bar">
      <Container>
        <Menu.Item id="home-button" to="/">
          Phadder
        </Menu.Item>
        <Menu.Item id="login-button">{logInActions}</Menu.Item>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(mapStateToProps)(Navbar);
