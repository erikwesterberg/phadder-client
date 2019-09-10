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
            <h1>{translate("buyerh1-1")}</h1>
            <p>{translate("buyerParagraph-1")}</p>
            <p>{translate("buyerParagraph-2")}</p>
            <p>{translate("buyerParagraph-3")}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <div id="buyer2-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>{translate("buyerh1-2")}</h1>
            <p>{translate("buyerParagraph-4")}</p>
            <p>{translate("buyerParagraph-5")}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <div id="buyer3-logo" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>{translate("buyerh1-3")}</h1>
            <p>{translate("buyerParagraph-6")}</p>
            <p>{translate("buyerParagraph-7")}</p>
            <p>{translate("buyerParagraph-8")}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BuyersExplain;
