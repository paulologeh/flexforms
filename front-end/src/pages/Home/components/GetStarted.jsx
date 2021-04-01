import React, { useState } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import createform from "assets/createform.gif";
import respondtoform from "assets/respondtoform.gif";
import viewresponses from "assets/viewresponses.gif";
import discontinue from "assets/discontinue.gif";

export const GetStartedGrid = () => {
  const [mode, setMode] = useState(null);

  return (
    <Grid columns={"equal"} container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Create Form
          </Header>
          <Image src={createform} fluid bordered={mode === "createform"} onMouseEnter={() => setMode("createform")} onMouseLeave={() => setMode(null)} />
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Fill Form
          </Header>
          <Image src={respondtoform} fluid bordered={mode === "respondtoform"} onMouseEnter={() => setMode("respondtoform")} onMouseLeave={() => setMode(null)} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Check Responses
          </Header>
          <Image name="viewresponses" src={viewresponses} fluid bordered={mode === "viewresponses"} onMouseEnter={() => setMode("viewresponses")} onMouseLeave={() => setMode(null)} />
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Cancel Form
          </Header>
          <Image name="discontinue" src={discontinue} fluid bordered={mode === "discontinue"} onMouseEnter={() => setMode("discontinue")} onMouseLeave={() => setMode(null)} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
