import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { signInUser } from "../state/actions/reduxTokenAuthConfig";
import "../css/style.css";

const LogIn = props => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();

  const loginHandler = data => {
    const { signInUser } = props;
    const { email, password } = data;
    signInUser({ email, password })
      .then()
      .catch(error => {
        setError(error.response.data.errors); // will be changed when we implement flash messages
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
          {error}
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
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default connect(
  null,
  { signInUser }
)(LogIn);
