import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const SignUp = () => {
  return (
    <div>
      <Modal
        trigger={<Button id="sign-up-button">REGISTER AS A CLIENT</Button>}
        centered={false}
      >
        <Modal.Header>Join us!</Modal.Header>
        <Modal.Content>
          <Form id="signup-form">
            <Form.Field>
              <label>First Name</label>
              <input id="first-name" />
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <input id="last-name" />
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <input id="email" />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input id="password" type="password" />
            </Form.Field>

            <Form.Field>
              <label>Password Confirmation</label>
              <input id="password-confirmation" type="password" />
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

export default SignUp;
