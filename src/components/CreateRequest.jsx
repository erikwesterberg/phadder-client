import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import useForm from "react-hook-form";

const CreateRequest = () => {
  const { register, handleSubmit } = useForm();
 

  const saveServiceRequestHandler = data => {
    console.log(data)
    const { title, category, details, budget, timeframe } = data
    
  };



  return (
    <div>
      <Modal
        trigger={<Button id="create-request-button">CREATE A REQUEST</Button>}
        centered={false}
      >
        <Modal.Header>Describe your needs below</Modal.Header>
        <Modal.Content>
          <Form id="request-form" onSubmit={handleSubmit(saveServiceRequestHandler)}>
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
              <select
                id="category"
                name="category"
                ref={register({ required: true })}
              >
                <option className="options" disabled>
                  Choose Category
                </option>
                <option className="options" name="accounting">
                  Accounting
                </option>
                <option className="options" name="cleaning_service">
                  Cleaning Service
                </option>
                <option className="options" name="construction_and_maintenance">
                  Construction and Maintenance
                </option>
                <option className="options" name="education">
                  Education
                </option>
                <option className="options" name="financial_service">
                  Financial Service
                </option>
                <option className="options" name="health_care">
                  Health Care
                </option>
                <option className="options" name="insurance">
                  Insurance
                </option>
                <option className="options" name="it_service">
                  IT Service
                </option>
                <option className="options" name="legal_services">
                  Legal Services
                </option>
                <option className="options" name="software_development">
                  Software Development
                </option>
              </select>
            </Form.Field>

            <Form.Field>
              <textarea
                placeholder="Please describe your need"
                id="details"
                name="details"
                ref={register({ required: true })}
                style={{ minHeight: 100 }}
              />
            </Form.Field>

            <Form.Field compact>
              <label>Budget</label>
              <select
                id="budget"
                name="budget"
                ref={register({ required: true })}
              >
                <option className="options" disabled>
                  Choose Budget
                </option>
                <option className="options" name="small">
                  Small
                </option>
                <option className="options" name="medium">
                  Medium
                </option>
                <option className="options" name="big">
                  Big
                </option>
              </select>
            </Form.Field>

            <Form.Field compact>
              <label>Time-frame</label>
              <select
                id="timeframe"
                name="timeframe"
                ref={register({ required: true })}
              >
                <option className="options" disabled>
                  Choose Time-Frame
                </option>
                <option className="options" name="urgent">
                  Urgent
                </option>
                <option className="options" name="moderate">
                  Moderate
                </option>
                <option className="options" name="long_term">
                  Long Term
                </option>
              </select>
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
