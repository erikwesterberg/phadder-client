import React from "react";
import { Menu, Button } from "semantic-ui-react";
import LogIn from "./LogIn";
import { connect } from "react-redux";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import LanguageSelect from "./LanguageSelect";
import "../css/style.css";

const Navbar = props => {
  let logInActions;
  let profileButton;
  let welcomeName =
    props.currentUser.attributes.firstName ||
    props.currentUser.attributes.email;

  if (props.currentUser.isSignedIn) {
    profileButton = (
      <Menu.Item>
        <Button primary as={NavLink} to="/profile" id="profile-button">
          Profile
        </Button>
      </Menu.Item>
    );
    props.flashActions.dispatchMessage(`Welcome ${welcomeName}!`, "success");
  } else {
    logInActions = (
      <Menu.Item>
        <Button primary id="login-button">
          <LogIn />
        </Button>
      </Menu.Item>
    );
  }

  return (
    <Menu id="nav-bar">
      <div id="logo-bg">
        <div id="phadder-logo" />
      </div>
      <Menu.Item id="home-button" as={NavLink} to="/" name="Phadder" />
      <Menu.Menu position="right">
        {profileButton}
        {logInActions}
        <LanguageSelect />
      </Menu.Menu>
    </Menu>
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
