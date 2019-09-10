import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileuploadMessage, setFileuploadMessage] = useState();
  const [upLoadedFile, setupLoadedFile] = useState({})

  const onChange = e => {
    setFile(e.target.files[0]);  
    console.log(file)
    debugger;
  };

  const savePictureHandler = async e => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:3000/api/update_picture",
        { file }
      );
      const { FileName } = response.data;
      if (response.status === 200) {
        setFileuploadMessage(response.data.message);
        setupLoadedFile({FileName})
      }
    } catch {
      setFileuploadMessage("Something went wrong");
    }
  };

  return (
    <Modal
      size="mini"
      trigger={<Button id="edit-profile-pic">Edit</Button>}
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
      {uploadedFile ? (<img style={{ width: '100%' }}/>) : null}
    </Modal>

  );
};

export default FileUpload;
