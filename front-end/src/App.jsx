import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute } from "utils";

//Css files
import "./App.css";

// Views
import { Home, FormEditor, FormViewer } from "views";

import { NotFound } from "components/NotFound";

const App = () => {
  return (
    <Switch>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/home" component={Home} />
      <AppRoute exact path="/formeditor" component={FormEditor} />
      <AppRoute exact path="/formviewer" component={FormViewer} />
      <AppRoute component={NotFound} />
    </Switch>
  );
};

export default App;
