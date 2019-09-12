import React from "react";
import { Container, Divider, Header, Placeholder } from "semantic-ui-react";

const RequestTemplate = props => {
  const serviceRequest = props.serviceRequest;
  return (
    <>
      <Container>
        <div id={`article_${serviceRequest.id}`}>
          <Header size="medium" textAlign="left" id="title">
            {serviceRequest.title}
          </Header>
          <Header as="h5" textAlign="right" id="author">
            {serviceRequest.category}
          </Header>
          <Placeholder.Paragraph id="body">
            {serviceRequest.details}
          </Placeholder.Paragraph>
          <Header as="h5" textAlign="right" id="date">
            {serviceRequest.budget}
          </Header>
          <Header as="h5" textAlign="right" id="city">
            {serviceRequest.timeframe}
          </Header>
          <Divider />
        </div>
      </Container>
    </>
  );
};

export default RequestTemplate;