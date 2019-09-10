import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import "../css/style.css";
import axios from "axios";

const CityFetcher = () => {
 const [location, setLocation] = useState()
 const [postCode, setPostCode] = useState()

 getLocation = async () => {
   try {
     let response = await axios.post("/post_code_queries", postCode);
     if (response.status === 200) {
       setLocation(response)
     }
   } catch (error) {
     console.log(error)
   }
 };

  const onChangeHandler = event => {
    setPostCode(event.target.value);
    getLocation();
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
                onChange={onChangeHandler()}
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
