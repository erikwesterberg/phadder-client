import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import { registerUser } from "../state/actions/reduxTokenAuthConfig";
import "../css/style.css";

const SignUp = props => {
  const { register, handleSubmit } = useForm();

  const saveNewUserHandler = (data, e) => {
    e.preventDefault()
    const { registerUser } = props;
    const { email, firstName, password } = data;
    registerUser({ email, firstName, password })
      .then()
      .catch(error => {
        props.flashActions.dispatchMessage(error.response.data.errors, "error");
      });
  };

  return (
    <div>
      <Modal
        trigger={<Button id="sign-up-button">REGISTER AS A CLIENT</Button>}
        centered={false}
      >
        <Modal.Header>Join us!</Modal.Header>
        <Modal.Content>
          <Form id="signup-form" onSubmit={handleSubmit(saveNewUserHandler)}>
            <Form.Field>
              <label>First Name</label>
              <input
                id="first-name"
                name="firstName"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <input
                id="last-name"
                name="lastName"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <label>Email Adress</label>
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

            <Form.Field>
              <label>Password Confirmation</label>
              <input
                id="password-confirmation"
                name="passwordConfirmation"
                type="password"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Button id="submit-account-button" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch),
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
)(SignUp);
