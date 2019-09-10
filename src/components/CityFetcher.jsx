import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import "../css/style.css";
import axios from "axios";

const CityFetcher = () => {
  const [location, setLocation] = useState();

  const getLocation = async val => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/post_code_queries",
        { val }
      );
      if (response.status === 200) {
        setLocation(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeHandler = e => {
    const val = e.target.value;
    if (val.length >= 5 && /^(\s*|\d+)$/.test(val)) {
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
                onChange={e => {
                  onChangeHandler(e);
                }}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
        {location}
        <Button>GET STARTED</Button>
        <Button>CANCEL</Button>
      </Modal.Content>
    </Modal>
  );
};

export default CityFetcher;
