import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import "../css/style.css";

const CityFetcher = () => (
  <Modal
    size="mini"
    trigger={<Button id="get-location-button">GET LOCATION</Button>}
  >
    <Modal.Header>Step 1: Enter your post code</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.Field>
            <input id="post-code-input" placeholder="Enter your post code" />
          </Form.Field>
        </Form>
      </Modal.Description>
      <Button>GET STARTED</Button>
      <Button>CANCEL</Button>
    </Modal.Content>
  </Modal>
);

export default CityFetcher;
