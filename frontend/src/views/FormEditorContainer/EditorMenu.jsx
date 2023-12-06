import React from "react";
import { Menu, Dropdown, Image, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { ROOT } from "navigation/CONSTANTS";
import logo from "assets/images/FlexFormsLogoNoText.png";

export const EditorMenuMobile = ({ toolBar, editorPanel, handlePublish }) => {
  const handleClick = () => handlePublish(true);
  const history = useHistory();

  return (
    <Menu>
      <Menu.Item>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <Menu.Item header>Form Editor</Menu.Item>
      <Dropdown item icon="sidebar" simple>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => history.push(ROOT)}>Home</Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Templates</span>
            <Dropdown.Menu>
              <Dropdown.Item disabled>Sample Form</Dropdown.Item>
              <Dropdown.Item disabled>Load Templates</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Options</span>
            <Dropdown.Menu>
              <Dropdown.Item disabled>Save</Dropdown.Item>
              <Dropdown.Item onClick={handleClick}>Publish Form</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-fiCEQaMl37x5l5KfxWoYOSnvwNZeoKk/view?usp=sharing"
              )
            }
          >
            Help
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {toolBar}
      {editorPanel}
    </Menu>
  );
};

export const EditorMenuDesktop = ({ handlePublish }) => {
  const handleClick = () => handlePublish(true);
  const history = useHistory();

  return (
    <Menu secondary>
      <Menu.Item>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <Menu.Item header>Form Editor</Menu.Item>
      <Menu.Item as="a" onClick={() => history.push(ROOT)}>
        <Icon name="home" />
        Home
      </Menu.Item>
      <Dropdown item simple text="Templates">
        <Dropdown.Menu>
          <Dropdown.Item disabled>Sample Form</Dropdown.Item>
          <Dropdown.Item disabled>Load Templates</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item simple text="Options">
        <Dropdown.Menu>
          <Dropdown.Item disabled>Save</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Publish Form</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item
        as="a"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1-fiCEQaMl37x5l5KfxWoYOSnvwNZeoKk/view?usp=sharing"
          )
        }
      >
        <Icon name="help" />
        Help
      </Menu.Item>
    </Menu>
  );
};
