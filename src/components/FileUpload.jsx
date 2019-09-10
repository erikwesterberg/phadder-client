import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const FileUpload = () => {


  return (
    <Modal trigger={<Button id="edit-profile-pic">Edit</Button>} centered={false}>
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
          <label >
             
            </label>
          </Form.Field>

          <Button id="save-profile-picture-submit" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default FileUpload;

