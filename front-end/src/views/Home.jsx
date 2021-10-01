import React, { Component } from "react";
import FlexForms500x500Transparent from "assets/images/FlexForms500x500Transparent.png";
import { Image, Header, Container, Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router";
import { EDITOR } from "navigation/CONSTANTS";

const HomeContainer = ({ mobile = false }) => {
  const history = useHistory();

  return (
    <Container text>
      <Header
        as="h1"
        content="Imagine-a-Form"
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
        }}
      />
      <Header
        as="h2"
        content="That actually does what you want ..."
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.0em",
        }}
      />
      <Button primary size="huge" onClick={() => history.push(EDITOR)}>
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};

class Home extends Component {
  render() {
    return (
      <>
        <Image
          src={FlexForms500x500Transparent}
          size={"medium"}
          inline={true}
        />
        <HomeContainer />
      </>
    );
  }
}

export default Home;
