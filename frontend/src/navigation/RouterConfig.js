import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  FormEditorView,
  FormViewer,
  Published,
  FormResponse,
} from "views";
import { NotFound } from "navigation/NotFound";
import { ROOT, EDITOR, VIEWER, PUBLISHED, RESPONSE } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path={ROOT} component={Home} />
      <Route exact path={EDITOR} component={FormEditorView} />
      <Route exact path={VIEWER} component={FormViewer} />
      <Route exact path={PUBLISHED} component={Published} />
      <Route exact path={RESPONSE} component={FormResponse} />
      <Route component={NotFound} />
    </Switch>
  );
};
