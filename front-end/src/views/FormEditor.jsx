import React from "react";
import { ToolStoreProvider } from "contexts/toolsContext";
import { Grid } from "semantic-ui-react";
import "../App.css";
import {
  Canvas,
  EditorPanel,
  ToolBar,
  EditorMenuDesktop,
  EditorMenuMobile,
} from "./FormEditorContainer";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const FormEditorView = () => {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <ToolStoreProvider>
          <Media at="mobile">
            <EditorMenuMobile />
            <ToolBar isHorizontal={true} />
            <EditorPanel height={90} />
            <Canvas height={320} />
          </Media>
          <Media greaterThan="mobile">
            <EditorMenuDesktop />
            <Grid
              style={{ overflow: "auto" }}
              textAlign="center"
              padded
              columns="equal"
            >
              <Grid.Column width={2} style={{ maxWidth: 115, minWidth: 100 }}>
                <ToolBar isHorizontal={false} />
              </Grid.Column>
              <Grid.Column width={10} style={{ maxWidth: 600 }}>
                <Canvas />
              </Grid.Column>
              <Grid.Column width={4} style={{ maxWidth: 258 }}>
                <EditorPanel />
              </Grid.Column>
            </Grid>
          </Media>
        </ToolStoreProvider>
      </MediaContextProvider>
    </>
  );
};

export default FormEditorView;
