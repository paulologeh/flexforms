import React, { Component } from "react";
import { Button, Menu, Header } from "semantic-ui-react";
import { SIGN_IN, SIGN_UP, ROOT } from "navigation/CONSTANTS";

export class AppHeader extends Component {
  state = { activeItem: null };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu borderless inverted fixed="top">
        <Menu.Item position="center" href={ROOT}>
          <Header as="h3" inverted>
            Flex-Forms
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Button href={SIGN_IN}>Log In</Button>
          <Button color="grey" style={{ marginLeft: "0.5em" }} href={SIGN_UP}>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
