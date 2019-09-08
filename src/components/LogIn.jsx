import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import { signInUser } from "../state/actions/reduxTokenAuthConfig";
import OauthButton from './OuthButton'
import "../css/style.css";


const LogIn = props => {
  const { register, handleSubmit } = useForm();
  const loginHandler = data => {
    const { email, password } = data;
    signInUser({ email, password })
      .then()
      .catch(error => {
        props.flashActions.dispatchMessage(error.response.data.errors, "error");
      });
  };
  return (
    <>
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
          <OauthButton provider="facebook"/>
        </Modal.Content>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInUser: bindActionCreators(signInUser, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
