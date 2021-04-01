import React, { useState } from "react";
import { Menu, Grid, Image } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { DASHBOARD, ROOT } from "navigation/CONSTANTS";
import logo from "assets/FlexFormsLogoNoText.png";
import { PopUpError } from "components";
import { useAuth } from "context/AuthContext";

const dashStyle = {
  height: "100vh",
};

const centerImage = {
  marginLeft: "auto",
  marginRight: "auto",
};

const segStyle = {
  flexGrow: 1,
  width: "100vh",
};

export const DashboardView = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const { history } = useHistory();

  const handleLogout = async () => {
    try {
      setError();
      await logout();
      history.push(ROOT);
    } catch (err) {
      if ("message" in err) {
        setError(err.message);
      } else {
        setError("Failed to login to account");
      }
    }
  };

  return (
    <Grid style={dashStyle}>
      <Grid.Column width="3" stretched>
        <Menu
          fluid
          vertical
          stackable
          borderless
          inverted
          // style={{ padding: "0.5vh" }}
        >
          <Menu.Item>
            <Image size="mini" src={logo} style={centerImage} />
            <Link to={DASHBOARD}>Flex-Forms</Link>
          </Menu.Item>
          <Menu.Item>
            <Image
              src="https://semantic-ui.com/images/avatar2/small/rachel.png"
              alt="avatar"
              size="tiny"
              circular
              style={centerImage}
              centered
            />
          </Menu.Item>
          <Menu.Item fitted="vertically" as="h2" style={{ marginTop: "0.5em" }}>
            Natalie Howman
          </Menu.Item>
          <Menu.Item>{currentUser.email}</Menu.Item>
          <Menu.Item as="a">Profile</Menu.Item>
          <Menu.Item as="a">Forms</Menu.Item>
          <Menu.Item as="a">Form Editor</Menu.Item>
          <Menu.Item as="a" onClick={handleLogout}>
            Logout
          </Menu.Item>
          <PopUpError error={error} errorType="Error" />
        </Menu>
      </Grid.Column>
      <Grid.Column style={segStyle}></Grid.Column>
    </Grid>
  );
};
