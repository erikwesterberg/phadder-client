import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [fileuploadMessage, setFileuploadMessage] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const savePictureHandler = async e => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:3000/api/update_picture",
        { file }
      );
      if (response.status === 200) {
        setFileuploadMessage(response.data.message);
      }
    } catch {
      setFileuploadMessage("Connection failed");
    }
  };

  return (
    <Modal
      trigger={<Button id="edit-profile-pic">Edit</Button>}
      centered={false}
    >
      <Modal.Header>Edit picture</Modal.Header>
      <Modal.Content>
        <Form id="choose-profile-picture-form" onSubmit={savePictureHandler}>
          <Form.Field>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
          </Form.Field>

          <Form.Field>
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </Form.Field>
          {fileuploadMessage}
          <Button id="save-profile-picture-submit" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default FileUpload;
