import React, { useState, useEffect } from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import { formData } from "./FormViewerContainer/example";
import { tools } from "utils/tools";
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

const StaticLabel = (props) => {
  return <span style={props.style}>{props.value}</span>;
};

const FormViewer = () => {
  const [toolState, setToolState] = useState([]);
  const [formTitle, setFormTitle] = useState("No Title");

  useEffect(() => {
    if ("title" in formData) setFormTitle(formData.title);

    let allTools = formData.allToolProps;
    let newToolState = [];
    for (let i = 0; i < allTools.length; i++) {
      let tool = null;
      // Different logic for labels
      if (allTools[i].tool === "static-label") {
        tool = {};
        tool.component = StaticLabel;
        tool.props = { value: allTools[i].label };
      } else {
        for (let j = 0; j < tools.length; j++) {
          if (tools[j].name === allTools[i].tool) {
            tool = tools[j];
            break;
          }
        }
      }

      if (tool === null) {
        continue;
      }

      console.log(tool);

      tool.props.key = i; // key
      let props = {
        ...tool.props,
        style: {
          position: "absolute",
          top: allTools[i].y,
          left: allTools[i].x,
          fontWeight: allTools[i].bold ? "bold" : "normal",
          fontStyle: allTools[i].italic ? "italic" : "normal",
          textDecoration: allTools[i].underline ? "underline" : "",
          fontSize: allTools[i].textSize,
        },
      };
      newToolState.push(React.createElement(tool.component, props));
    }
    setToolState(newToolState);
  }, []);

  return (
    <div>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Media at="mobile">
          <Grid
            style={{ overflow: "auto" }}
            textAlign="center"
            padded
            verticalAlign="middle"
          >
            <Grid.Column>
              <Grid.Row>
                <Segment secondary>
                  <Header as="h2">{formTitle}</Header>
                </Segment>
              </Grid.Row>
              <Grid.Row width={10}>
                <Segment
                  style={{
                    position: "relative",
                    height: 800,
                    marginTop: 10,
                    minWidth: 600,
                  }}
                >
                  {toolState}
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Media>
        <Media greaterThan="mobile">
          <Grid
            style={{ overflow: "auto" }}
            textAlign="center"
            padded
            verticalAlign="middle"
          >
            <Grid.Column width={10}>
              <Grid.Row>
                <Segment secondary>
                  <Header as="h2">{formTitle}</Header>
                </Segment>
              </Grid.Row>
              <Grid.Row>
                <Segment
                  style={{
                    position: "relative",
                    height: 800,
                    marginTop: 10,
                    minWidth: 600,
                  }}
                >
                  {toolState}
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default FormViewer;
