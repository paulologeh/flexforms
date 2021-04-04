import React from "react";
import {
  Image,
  Header,
  Container,
  Button,
  Icon,
  Modal,
} from "semantic-ui-react";
import { GetStartedGrid } from "pages/Home/components";
import PropTypes from "prop-types";
import FlexForms500x500Transparent from "assets/FlexForms500x500Transparent.png";
import { Banner } from "./components/Banner";
import { AppHeader, AppFooter } from "pages/Home/components";

export const HomeView = ({ closeGrid, openGrid, open, mobile = false }) => {
  return (
    <>
      <AppHeader />
      <Image src={FlexForms500x500Transparent} size={"medium"} inline={true} />
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
        <Modal
          onClose={closeGrid}
          onOpen={openGrid}
          open={open}
          trigger={
            <Button color="grey" size="huge">
              Get Started
              <Icon name="right arrow" />
            </Button>
          }
          size="small"
        >
          <Modal.Content>
            <GetStartedGrid />
          </Modal.Content>
        </Modal>
      </Container>
      <Banner />
      <AppFooter />
    </>
  );
};

HomeView.propTypes = {
  closeGrid: PropTypes.func.isRequired,
  openGrid: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  mobile: PropTypes.bool,
};
