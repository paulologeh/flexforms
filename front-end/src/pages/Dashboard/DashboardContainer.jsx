import React from "react";
import { Container, Tab } from "semantic-ui-react";
import { DashboardMenu } from "./components/DashboardMenu";
import { Profile } from "./components/Profile";
import { useAuth } from "context/AuthContext";
import { isMobile } from "utils";

export const DashboardContainer = () => {
  const { user } = useAuth();
  const panes = [
    {
      menuItem: { key: "profile", icon: "user", content: "Profile" },
      render: () => (
        <Tab.Pane>
          <Profile userEmail={user.email} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: "my-forms", icon: "archive", content: "Forms" },
      render: () => <Tab.Pane>Forms</Tab.Pane>,
    },
    {
      menuItem: { key: "editor", icon: "wpforms", content: "Editor" },
      render: () => <Tab.Pane>Editor</Tab.Pane>,
    },
    {
      menuItem: { key: "settings", icon: "setting", content: "Settings" },
      render: () => <Tab.Pane>Settings</Tab.Pane>,
    },
  ];

  return (
    <div>
      <DashboardMenu userEmail={user.email} />
      <Container>
        <Tab
          menu={{ fluid: true, vertical: !isMobile(), text: isMobile() }}
          menuPosition={isMobile() ? null : "left"}
          panes={panes}
          style={{ alignItems: "center", textAlign: "left" }}
        />
      </Container>
    </div>
  );
};
