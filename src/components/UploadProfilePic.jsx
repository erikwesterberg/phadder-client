  
import React, { useState } from "react";
import { Button, Form, Modal, Image } from "semantic-ui-react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileuploadMessage, setFileuploadMessage] = useState();
  const [uploadedFile, setupLoadedFile] = useState({})

  const onChange = e => {
    setFile(e.target.files[0]);  
    console.log(e.target.files[0])
    debugger;
  };

  const savePictureHandler = async e => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:3000/api/image_upload",
        { file }
      );
      const { FileName } = response.data;

      setupLoadedFile({FileName})
      
      if (response.status === 200) {

        setFileuploadMessage(response.data.message);
        
      }
    } catch {
      setFileuploadMessage("Something went wrong");
    }
  };

  return (
    <>
    <Modal
      size="mini"
      trigger={<Button id="edit-profile-pic-button">Edit</Button>}
      centered={false}
    >
      <Modal.Header>Edit picture</Modal.Header>
      <Modal.Content>
        <Form id="choose-profile-picture-form" onSubmit={savePictureHandler}>
          <Form.Field>
            <input
              type="file"
              id="choose-picture-input"
              onChange={onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>
            {fileuploadMessage}
            </label>
          </Form.Field>
          <Button id="save-profile-picture-submit" type="submit">
            Submit Changes
          </Button>
        </Form>
      </Modal.Content>
      
    </Modal>
        <div>
          <Image src={uploadedFile} size='medium' rounded />
      </div>
    </>
  );
};

export default FileUpload;