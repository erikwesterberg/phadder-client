import React, { useState } from "react";
import axios from "axios";
import { Image, Button, Modal } from "semantic-ui-react";

const ProfileImageUpload = () => {
  const [selectedPicture, setSelectedPicture] = useState();
  const [uploadStatus, setUploadStatus] = useState();
  const [newProfilePic, setNewProfilePic] = useState();

  const fileSelectedHandler = event => {
    setSelectedPicture(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const image = new FormData();
    image.append("image", selectedPicture, selectedPicture.name);
    axios
      .post("http://localhost:3000/api/profile_update", image)
      .then(response => {
        setUploadStatus(response.data.message);
        setNewProfilePic(response.data.message);
      })
      .catch(error => {
        setUploadStatus(error.response.data.message);
      });
  };

  return (
    <>
      <div>
        <Image
          src={
            newProfilePic ||
            "https://villageinsurancedirect.com/wp-content/uploads/2016/06/default_avatar_community.png"
          }
          size='small' circular
        />
      </div>
      <Modal
        trigger={<Button id="edit-profile-picture">Edit</Button>}
        centered={false}
      >
        <Modal.Header>Select a new Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src={
              selectedPicture ||
              "https://react.semantic-ui.com/images/avatar/large/rachel.png"
            }
          />
          <Modal.Description>
            <p>
            A new picture helps making your site more personal, and sometimes thats helps for better deals.
            </p>
          </Modal.Description>
          <input
            id="select-image"
            accept="image/png, image/jpeg"
            type="file"
            onChange={fileSelectedHandler}
          />
          <Button id="upload-button" onClick={fileUploadHandler} >
            Upload Picture
          </Button>
          {uploadStatus}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ProfileImageUpload;
