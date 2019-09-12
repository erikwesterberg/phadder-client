import React, { useState } from "react";
import { Button } from "semantic-ui-react";



const DisplayServiceRequest = () => {
 const [showRequest, setShowRequest] = useState(false)
  

  return (
    <>
    <Button id="my-requests-button" onclick={setShowRequest(true)}>My requests</Button>
    </>
  )
}

export default DisplayServiceRequest;