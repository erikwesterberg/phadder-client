import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import "../css/style.css";
import { I18nContext } from "../i18n/index";

const BuyersExplain = () => {
  const { translate } = useContext(I18nContext);
  return (
    <Container>
      <div id="selected-option">
        <div id="active-stroke"></div>
        <div id="inactive-stroke"></div>
      </div>
      <div id="buyers-bar">
        <h1>{translate("buyer-banner")}</h1>
      </div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div id="buyer1-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Get Started</h1>
            <p>
              Select a location and project category that best matches your
              business need
            </p>
            <p>
              Tell us about your project to ensure we're able to match you to
              the right pro for your job
            </p>
            <p>
              Phadder has several service providers specializing in over 20
              business categories
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <div id="buyer2-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Get Connected</h1>
            <p>
              Your request will be presented to up to four pre-screened,
              verified, local Phadder Service Suppliers
            </p>
            <p>
              After 24 h, your request will be listed on our site for other
              Phadder Service Suppliers to see and respond to
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <div id="buyer3-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Get The Job Done</h1>
            <p>
              Shortly after posting your service request, you start receiving
              bids and proposals to choose from
            </p>
            <p>
              Connect with your selected service providers to negotiate terms
            </p>
            <p>
              Use Phadders Smart E-greements Service to secure the legal
              agreement with your selected provider (optional)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BuyersExplain;
