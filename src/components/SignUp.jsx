import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const SignUp = () => {
  const {name, lastName, email, password, passwordConfirmation} = this.state
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
              <input id="first-name" value={name}
              onChange={e => this.setState({name: e.target.value})}/>
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <input id="last-name" vale={lastName} 
              onChange={e => this.setState({lastName: e.target.value})}/>
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <input id="email" value={email}
              onChange={e => this.setState({email: e.target.value})}/>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input id="password" type="password" value={password}
              onChange={e => this.setState({password: e.target.value})}/>
            </Form.Field>

            <Form.Field>
              <label>Password Confirmation</label>
              <input id="password-confirmation" type="password" value={passwordConfirmation} 
              onChange={e => this.setState({passwordConfirmation: e.target.value})}/>
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
