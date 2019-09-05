import React from "react";
import { Button, Form, Modal, Dropdown, TextArea } from "semantic-ui-react";
import useForm from "react-hook-form";

const CreateRequest = () => {
  const { register, handleSubmit } = useForm();

  const budgetOptions = [
    { key: 1, text: "Small", value: 1 },
    { key: 2, text: "Medium", value: 2 },
    { key: 3, text: "Big", value: 3 }
  ];

  const timeOptions = [
    { key: 1, text: "Urgent", value: 1 },
    { key: 2, text: "Moderate", value: 2 },
    { key: 3, text: "Long term", value: 3 }
  ];

  const categoryOptions = [
    { key: 1, text: "Accounting", value: 1 },
    { key: 2, text: "Cleaning Service", value: 2 },
    { key: 3, text: "Construction & Maintance", value: 3 },
    { key: 4, text: "Education", value: 1 },
    { key: 5, text: "Finacal Service", value: 2 },
    { key: 6, text: "Health Care", value: 3 },
    { key: 7, text: "Insurance", value: 1 },
    { key: 8, text: "IT Service", value: 2 },
    { key: 9, text: "Legal Service", value: 3 },
    { key: 10, text: "Software Development", value: 3 }
  ];

  return (
    <div>
      <Modal
        trigger={<Button id="create-request-button">CREATE A REQUEST</Button>}
        centered={false}
      >
        <Modal.Header>Describe your needs below</Modal.Header>
        <Modal.Content>
          <Form id="request-form" onSubmit={handleSubmit()}>
            <Form.Field>
              <label>Title</label>
              <input
                id="title"
                name="title"
                ref={register({ required: true })}
              />
            </Form.Field>

            <Form.Field>
              <Dropdown
                placeholder="Select Category"
                fluid
                search
                selection
                id="category"
                name="category"
                options={categoryOptions}
                ref={register({required: false})}
              />
              
            </Form.Field>

            <Form.Field>
              <TextArea
                placeholder="Please describe your need"
                id="details"
                name="details"
                ref={register({ required: false })}
                style={{ minHeight: 100 }}
              />
            </Form.Field>

            <Form.Field compact>
              <Dropdown
                text="Budget"
                id="budget"
                options={budgetOptions}
                simple
                item
              />
            </Form.Field>

            <Form.Field compact>
              <Dropdown
                text="Time frame"
                id="timeframe"
                options={timeOptions}
                simple
                item
              />
            </Form.Field>

            <Button id="submit-request-button" type="submit">
              Create request
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default CreateRequest;
