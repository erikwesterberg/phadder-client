import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import "../css/style.css";

const CityFetcher = () => {
 const [cityFetch, setCityFetch] = useState()
 const [city, newCity] = useState()

 async getArticles(cityFetch) {
  const response = await axios.get(`/city/${cityFetch}`);;
  if (response.data.length > 0) { 
    newCity(city)
    };
  }

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
            <input id="post-code-input" placeholder="Enter your post code" onChange={setCityFetch(cityFetch)} />
          </Form.Field>
        </Form>
      </Modal.Description>
      {city}
      <Button>GET STARTED</Button>
      <Button>CANCEL</Button>
    </Modal.Content>
  </Modal>
    )
  };

export default CityFetcher;
