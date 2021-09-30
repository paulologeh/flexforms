import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import "../App.css";
import {
  Canvas,
  EditorPanel,
  ToolBar,
  EditorMenuDesktop,
  EditorMenuMobile,
  Publisher,
} from "./FormEditorContainer";
import { Media } from "styles/mediaStyles";

const FormEditorView = () => {
  const [publishing, setPublishing] = useState(false);

  return (
    <>
      <Media at="mobile">
        <EditorMenuMobile
          toolBar={<ToolBar mobile={true} />}
          handlePublish={(value) => setPublishing(value)}
        />
        <EditorPanel mobile={true} />
        <Canvas />
      </Media>
      <Media greaterThan="mobile">
        <EditorMenuDesktop handlePublish={(value) => setPublishing(value)} />
        <Publisher
          publishing={publishing}
          openPublishing={() => setPublishing(true)}
          closePublishing={() => setPublishing(false)}
        />
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
