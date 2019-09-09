import React from "react";
import { Container, Menu } from "semantic-ui-react";
import LogIn from "./LogIn";
import { connect } from "react-redux";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";

const Navbar = props => {
  let logInActions;
  let profileButton;
  let welcomeName =
    props.currentUser.attributes.firstName ||
    props.currentUser.attributes.email;

  if (props.currentUser.isSignedIn) {
    profileButton = (
      <Menu.Item as={NavLink} to="/profile" id="profile-button">
        Profile
      </Menu.Item>
    );
    props.flashActions.dispatchMessage(`Welcome ${welcomeName}!`, "success");
  } else {
    logInActions = <LogIn />;
  }

  return (
    <div className="ui inverted menu" id="nav-bar">
      <Container>
        <Menu.Item id="home-button" as={NavLink} to="/">
          Phadder
        </Menu.Item>
        <Menu.Item id="login-button">{logInActions}</Menu.Item>
        {profileButton}
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    flashActions: bindActionCreators(flashActions, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
