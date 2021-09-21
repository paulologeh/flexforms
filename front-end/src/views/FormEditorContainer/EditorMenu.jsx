import React from "react";
import { Menu, Dropdown, Image, Icon } from "semantic-ui-react";
import logo from "assets/images/FlexFormsLogoNoText.png";

export const EditorMenuMobile = () => {
  return (
    <Menu>
      <Menu.Item>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <Dropdown item icon="sidebar" simple>
        <Dropdown.Menu>
          <Dropdown.Item>Home</Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Templates</span>
            <Dropdown.Menu>
              <Dropdown.Item>Sample Form</Dropdown.Item>
              <Dropdown.Item>Load Templates</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Options</span>
            <Dropdown.Menu>
              <Dropdown.Item>Save</Dropdown.Item>
              <Dropdown.Item>Clear Canvas</Dropdown.Item>
              <Dropdown.Item>Publish Form</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Help</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item header>Form Editor</Menu.Item>
    </Menu>
  );
};

export const EditorMenuDesktop = () => {
  return (
    <Menu secondary>
      <Menu.Item>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <Menu.Item header>Form Editor</Menu.Item>
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Dropdown item simple text="Templates">
        <Dropdown.Menu>
          <Dropdown.Item>Sample Form</Dropdown.Item>
          <Dropdown.Item>Load Templates</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item simple text="Options">
        <Dropdown.Menu>
          <Dropdown.Item>Save</Dropdown.Item>
          <Dropdown.Item>Clear Canvas</Dropdown.Item>
          <Dropdown.Item>Publish Form</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as="a">
        <Icon name="help" />
        Help
      </Menu.Item>
    </Menu>
  );
};
