  
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import { signOutUser } from "../state/actions/reduxTokenAuthConfig";

const LogOut = props => {

  const signOut = (e) => {
  e.preventDefault();
  const { history, signOutUser } = props
  signOutUser()
    .then(() => {
      history.push("/");
      props.flashActions.dispatchMessage(
        `You have successfully logged out.`,
      );
    })
  };
 
return (
      <>
        <Menu.Item
          id="logout-button"
          as={Link}
          to="/"
          onClick={signOut}
        >
          Log Out
        </Menu.Item>
      </>
    )
  }
  

  const mapStateToProps = (state) => {
    return {
      state: state,
      currentUser: state.reduxTokenAuth.currentUser
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      signOutUser: bindActionCreators(signOutUser, dispatch),
      flashActions: bindActionCreators(flashActions, dispatch)
    };
  };

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LogOut));