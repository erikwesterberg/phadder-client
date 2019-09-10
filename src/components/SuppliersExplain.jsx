import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import "../css/style.css";
import { I18nContext } from "../i18n/index";

const SuppliersExplain = () => {
  const { translate } = useContext(I18nContext);
  return (
    <Container>
      <div id="selected-option">
        <div id="inactive-stroke"></div>
        <div id="active-stroke"></div>
      </div>
      <div id="suppliers-bar">
        <h1>{translate("supplier-banner")}</h1>
      </div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div id="supplier1-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Join the elite</h1>
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
            <div id="supplier2-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Build your reputation</h1>
            <p>
              Networks and referrals are the main reasons for accepting bids and
              making purchases. With Phadder, your business will be able to
              build an online reputation and grow your business.
            </p>
            <p>
              Make diversity into a competitive advantage. Benefit from the
              multi-cultural composition of your team. The unique multi-language
              approach of Phadder makes it possible for your clients to
              communicate with you in their native language.
            </p>
          </Grid.Column>
        </Grid.Row>

          <Grid.Row>
          <Grid.Column width={8}>
            <div id="supplier3-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>The decisive advantage</h1>
            <p>
              A basic membership on Phadder is FREE, but even the paid Verified
              Supplier Badge costs significantly less than many other classic
              sales channels and can generate up to three times as many leads.
            </p>
            <p>
              In addition, the majority of business owners, prefer to look for
              suppliers and service providers online.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SuppliersExplain;
