import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import * as authActions from "../state/actions/reduxTokenAuthConfig";
import FacebookAuth from 'react-facebook-auth';
import OAuthSignInButton from './OAuthSignInButton'
import "../css/style.css";

const LogIn = props => {
  const { register, handleSubmit } = useForm();
  const { signInUser, registerUser } = props.auth;
  const responseFacebook = (response) => {
    console.log(response);
    // try {
    //   registerUser({ email: response.email, password: response.userID, provider: 'facebook' })
      
    // } catch {
    //   registerUser({ email: response.email, password: response.userID })
    //     .then(response => {
    //       props.flashActions.dispatchMessage(response.data.message, "success");
    //     })
    //     .catch(error => {
    //       props.flashActions.dispatchMessage(error.message, "error");
    //     })

    // }


  }


  const facebookButton = ({ onClick }) => (
    <button className="ui facebook button" onClick={onClick}>
      <i className="facebook icon"></i>
      Login with facebook
    </button>
  );

  const loginHandler = data => {
    const { email, password } = data;
    signInUser({ email, password })
      .then()
      .catch(error => {
        props.flashActions.dispatchMessage(error.response.data.errors, "error");
      });
  };
  return (
    <div>
      <Modal
        trigger={<Button id="login-button">Log in</Button>}
        centered={false}
      >
        <Modal.Header>Log in</Modal.Header>
        <Modal.Content>
          <Form id="login-form" onSubmit={handleSubmit(loginHandler)}>
            <Form.Field>
              <label>Email</label>
              <input
                id="email"
                name="email"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Button id="login-form-submit" type="submit">
              Log in
            </Button>
          </Form>
          <OAuthSignInButton provider='facebook'/>
          <FacebookAuth
            appId="216978619108390"
            callback={responseFacebook}
            component={facebookButton}
            fields="first_name, last_name, email, picture"
            redirectUri="http://localhost:3000/omniauth/facebook/callback/"
            disableRedirect={false}
          />
        </Modal.Content>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    auth: bindActionCreators(authActions, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
