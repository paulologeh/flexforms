import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export const NotFound = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="dont" />
      Page Not Found
    </Header>
    <Button primary onClick={() => (window.location = "/")}>
      Take me home
    </Button>
  </Segment>
);
