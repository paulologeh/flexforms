import React from "react";
import { Grid } from "semantic-ui-react";
import "../App.css";
import {
  Canvas,
  EditorPanel,
  ToolBar,
  EditorMenuDesktop,
  EditorMenuMobile,
} from "./FormEditorContainer";
import { Media } from "styles/mediaStyles";

const FormEditorView = () => {
  return (
    <>
      <Media at="mobile">
        <EditorMenuMobile toolBar={<ToolBar mobile={true} />} />
        <EditorPanel mobile={true} />
        <Canvas />
      </Media>
      <Media greaterThan="mobile">
        <EditorMenuDesktop />
        <Grid
          style={{ overflow: "auto" }}
          textAlign="center"
          padded
          columns="equal"
        >
          <Grid.Row>
            <EditorPanel />
          </Grid.Row>
          <Grid.Column width={2} style={{ maxWidth: 115, minWidth: 100 }}>
            <ToolBar mobile={false} />
          </Grid.Column>
          <Grid.Column width={10} style={{ minWidth: 600 }}>
            <Canvas />
          </Grid.Column>
        </Grid>
      </Media>
    </>
  );
};

export default FormEditorView;
