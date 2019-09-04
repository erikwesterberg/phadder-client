import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from 'react-hook-form'

const SignUp = () => {
  const {register, handleSubmit} = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      <Modal
        trigger={<Button id="sign-up-button">REGISTER AS A CLIENT</Button>}
        centered={false}
      >
        <Modal.Header>Join us!</Modal.Header>
        <Modal.Content>
          <Form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <label>First Name</label>
              <input id="first-name" name="firstname" ref={register({required: true})}/> 
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <input id="last-name" name="lastname" ref={register({required: true})}/> 
            </Form.Field>

            <Form.Field>
              <label>Email Adress</label>
              <input id="email" name="email" ref={register({required: true})}/> 
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input id="password" name="passsword" type="password" ref={register({required: true})}/> 
             
            </Form.Field>

            <Form.Field>
              <label>Password Confirmation</label>
              <input id="password-confirmation" name="password_confirmation" type="password" ref={register({required: true})}/> 
             
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
