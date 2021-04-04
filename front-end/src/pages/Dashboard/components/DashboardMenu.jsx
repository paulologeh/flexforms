import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { DASHBOARD, ROOT } from "navigation/CONSTANTS";
import { PopUpError } from "components";
import { useAuth } from "context/AuthContext";
import { isMobile } from "utils";
import logo from "assets/FlexFormsLogoNoText.png";
import avatar from "assets/rachel.png";

const centerImage = {
  marginLeft: "auto",
  marginRight: "auto",
};

export const DashboardMenu = ({ userEmail }) => {
  const [error, setError] = useState();
  const { logout } = useAuth();
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
        setError("Failed to logout");
      }
    }
  };

  return (
    <>
      <Menu
        inverted
        borderless
        // stackable
        style={{ textAlign: "center", width: "100%" }}
      >
        <Menu.Menu>
          <Menu.Item>
            <Image size="mini" src={logo} />
            {!isMobile() && <Link to={DASHBOARD}>Flex-Forms</Link>}
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position={"right"}>
          <Menu.Item>{userEmail}</Menu.Item>
          <Menu.Item as="a">
            <Image
              src={avatar}
              alt="avatar"
              size="mini"
              circular
              style={centerImage}
            />
          </Menu.Item>
          <Menu.Item as="a" onClick={handleLogout}>
            {"Logout"}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <PopUpError error={error} errorType="Error" />
    </>
  );
};
