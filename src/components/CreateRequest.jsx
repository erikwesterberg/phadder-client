import React from "react";
import { Button, Form, Modal, Dropdown } from "semantic-ui-react";
import useForm from "react-hook-form";

const CreateRequest = () => {
  const { register, handleSubmit } = useForm();

  const budgetOptions = [
    { key: 1, text: 'Small', value: 1 },
    { key: 2, text: 'Medium', value: 2 },
    { key: 3, text: 'Big', value: 3 }]

  return (
    <div>
      <Modal
        trigger={<Button id="sign-up-button">CREATE A REQUEST</Button>}
        centered={false}
      >
        <Modal.Header>Join us!</Modal.Header>
        <Modal.Content>
          <Form id="signup-form" onSubmit={handleSubmit()}>
            <Form.Field>
              <label>Title</label>
              <input
                id="title"
                name="title"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <label>Category</label>
              <input
                id="category"
                name="category"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <label>Details</label>
              <input
                id="details"
                name="details"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field compact>
                  <Dropdown text='Dropdown' options={budgetOptions} simple item />
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

export default CreateRequest;
