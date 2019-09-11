import React, { useState } from "react";
import { connect } from "react-redux";
import * as modalActions from "../state/actions/modalActions";
import * as flashActions from "../state/actions/flashActions";
import { bindActionCreators } from "redux";
import { Button, Form, Modal, Checkbox } from "semantic-ui-react";
import useForm from "react-hook-form";
import { saveRequest } from "../modules/saveRequest";
import axios from 'axios'

const CreateRequest = props => {
  props.showCreateServiceRequestModal();
  const { register, handleSubmit } = useForm();
  const [ liveLanguage, setLiveLanguage ] = useState();

  const saveServiceRequestHandler = async data => {
    const { title, category, details, budget, timeframe } = data;
    let response = await saveRequest(
      title,
      category,
      details,
      budget,
      timeframe
    );
    if (response.status === 200) {
      props.dispatchMessage(response.data.message, "success");
      props.hideCreateServiceRequestModal();
    } else {
      props.dispatchMessage(response.data.errors, "error");
    }
  };

  const getLanguage = async val => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/language_queries",
        { val }
      );
      if (response.status === 200) {
        setLiveLanguage(response.data.message);
        document.getElementById(`${response.data.lang_code}`).checked = true;
      }
    } catch {}
  };

  const onChangeHandler = e => {
    const val = e.target.value;
    if (val.length > 20) {
      getLanguage(val);
    }
  };

  return (
    <>
      {props.showModal && (
        <Modal
          centered={false}
          trigger={
            <Button
              onClick={() => props.showCreateServiceRequestModal()}
              id="create-request-button"
            >
              CREATE A REQUEST
            </Button>
          }
        >
          <Modal.Header>Create a Service Request</Modal.Header>
          <Modal.Content>
            <Form
              id="request-form"
              onSubmit={handleSubmit(saveServiceRequestHandler)}
            >
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
                  <option
                    className="options"
                    name="construction_and_maintenance"
                  >
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
                <label>I can receive bids in the following languages</label>
                <Checkbox id="se" label="Swedish" />
                <Checkbox id="en" label="English" />
              </Form.Field>
              <Form.Field>
                {liveLanguage}
                <textarea
                  placeholder="Please describe your need"
                  id="details"
                  name="details"
                  ref={register({ required: true })}
                  style={{ minHeight: 100 }}
                  onChange={e => {
                    onChangeHandler(e);
                  }}
                />
              </Form.Field>

              <Form.Field>
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

              <Form.Field>
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
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    showModal: state.modalState.displayCreateServiceRequestModal
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...modalActions, ...flashActions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRequest);
