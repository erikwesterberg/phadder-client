import React, { useState } from "react";
import axios from "axios"
import { Image } from "semantic-ui-react";

const ProfileImageUpload = () => {
  const [selectedPicture, setSelectedPicture] = useState();
  const [uploadStatus, setUploadStatus] = useState();
  const [newProfilePic, setNewProfilePic] = useState()

  const fileSelectedHandler = event => {
    setSelectedPicture(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const image = new FormData();
    image.append('image', selectedPicture, selectedPicture.name)
    axios.post("http://localhost:3000/api/profile_update", image)
    .then(response => {
      setUploadStatus(response.data.message);
      setNewProfilePic(response.data.message)
    })
    .catch(error => {
      setUploadStatus(error.response.data.message);
    })
  };

  return (
    <>
    <div>
      <input
        id="select-image"
        accept="image/png, image/jpeg"
        type="file"
        onChange={fileSelectedHandler}
      />
      <button id="upload-button" onClick={fileUploadHandler}>
        Upload Picture
      </button>
      {uploadStatus}
    </div>
    <div>
    <Image src={newProfilePic || "../css/images/defaultAvatar.png"} size='medium' rounded />
    </div>
    </>
  );
};

export default ProfileImageUpload;