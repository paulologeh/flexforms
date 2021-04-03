import React from "react";
import { Tab } from "semantic-ui-react";
import { DashboardMenu } from "./components/DashboardMenu";
import { Profile } from "./components/Profile";
import { useAuth } from "context/AuthContext";

const dashStyle = {
  flexGrow: 1,
  height: "100vh",
};

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
      menuItem: { key: "my-forms", icon: "archive", content: "My Forms" },
      render: () => <Tab.Pane>My Forms</Tab.Pane>,
    },
    {
      menuItem: { key: "editor", icon: "wpforms", content: "Form Editor" },
      render: () => <Tab.Pane>Edit Forms</Tab.Pane>,
    },
    {
      menuItem: { key: "settings", icon: "setting", content: "Settings" },
      render: () => <Tab.Pane>Settings</Tab.Pane>,
    },
  ];

  return (
    <div className="App">
      <DashboardMenu userEmail={user.email} />
      <Tab
        menu={{ fluid: true, vertical: true, text: true }}
        menuPosition="left"
        panes={panes}
      />
    </div>
  );
};
