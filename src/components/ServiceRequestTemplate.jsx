import React from "react";
import { Container, Divider, Header, Placeholder } from "semantic-ui-react";

const RequestTemplate = props => {
  const serviceRequest = props.serviceRequest;
  console.log(serviceRequest)
  debugger;
  return (
    <>
      <Container>
        <div id={`serviceRequest_${serviceRequest.id}`}>
          <Header size="medium" textAlign="left" id="title">
            {serviceRequest.title}
          </Header>
          <Header as="h5" textAlign="right" id="category">
            {serviceRequest.category}
          </Header>
          <Placeholder.Paragraph id="details">
            {serviceRequest.details}
          </Placeholder.Paragraph>
          <Header as="h5" textAlign="right" id="budget">
            {serviceRequest.budget}
          </Header>
          <Header as="h5" textAlign="right" id="timeframe">
            {serviceRequest.timeframe}
          </Header>
          <Divider />
        </div>
      </Container>
    </>
  );
};

export default RequestTemplate;
