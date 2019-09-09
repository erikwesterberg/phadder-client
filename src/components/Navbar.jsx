import React from "react";
import { Dropdown, Menu, Button } from "semantic-ui-react";
import LogIn from "./LogIn";
import { connect } from "react-redux";
import "../css/style.css";

const Navbar = props => {
  let logInActions;
  !props.currentUser.isSignedIn && (logInActions = <LogIn />);

  return (
    <Menu id="nav-bar">
      <div id="logo-bg">
        <div id="phadder-logo" />
      </div>
      <Menu.Item id="home-button" name="Phadder" />
      <Menu.Menu position="right">
        <Dropdown item text="Language" id="language-select">
          <Dropdown.Menu>
            <Dropdown.Item id="english" onChange={languageChange(en)}>English</Dropdown.Item>
            <Dropdown.Item id="swedish" onChange={languageChange(sv)}>Swedish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button primary id="login-button">
            {logInActions}
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(mapStateToProps)(Navbar);
