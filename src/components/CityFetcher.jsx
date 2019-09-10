import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import "../css/style.css";
import axios from "axios";

const CityFetcher = () => {
  const [location, setLocation] = useState();
  const [getStarted, setGetStarted] = useState();

  const getLocation = async val => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/post_code_queries",
        { val }
      );
      if (response.status === 200) {
        setLocation(response.data.message);
        setGetStarted(<Button>GET STARTED</Button>);
      }
    } catch (error) {
      setLocation(error.response.data.message);
    }
  };
  const onChangeHandler = e => {
    const val = e.target.value;
    let regex = /[0-9]|\s/;
    if (val.length >= 5 && regex.test(val)) {
      getLocation(val);
    }
  };

  return (
    <Modal
      size="mini"
      trigger={<Button id="get-location-button">GET LOCATION</Button>}
    >
      <Modal.Header>Step 1: Enter your post code</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <input
                id="post-code-input"
                placeholder="Enter your post code"
                type="number"
                onChange={e => {
                  onChangeHandler(e);
                }}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
        {location}
        {getStarted}
        <Button>CANCEL</Button>
      </Modal.Content>
    </Modal>
  );
};

export default CityFetcher;
