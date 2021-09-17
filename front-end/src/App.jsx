import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute } from "utils";

//Css files
import "./App.css";

// Views
import { Home, CreateForm, ViewForm } from "views";

const App = () => {
  return (
    <Switch>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/home" component={Home} />
      <AppRoute exact path="/createform" component={CreateForm} />
      <AppRoute exact path="/viewform" component={ViewForm} />
    </Switch>
  );
};

export default App;
