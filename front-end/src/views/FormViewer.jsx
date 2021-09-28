import React, { useState, useEffect } from "react";
import { Grid, Segment, Header, Button } from "semantic-ui-react";
import { formData } from "./FormViewerContainer/example";
import { tools } from "utils/tools";
import { ViewerTool } from "components";
import { Media } from "styles/mediaStyles";

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
      let toolProps = null;
      // Different logic for labels
      if (allTools[i].tool === "static-label") {
        toolProps = {};
        toolProps.component = StaticLabel;
        toolProps.props = { value: allTools[i].label };
      } else {
        for (let j = 0; j < tools.length; j++) {
          if (tools[j].name === allTools[i].tool) {
            toolProps = {};
            toolProps.props = tools[j].props;
            toolProps.component = tools[j].component;
            break;
          }
        }
      }

      if (toolProps === null) {
        continue;
      }

      toolProps.key = i; // key
      toolProps.toolId = i;
      toolProps.style = {
        position: "absolute",
        top: allTools[i].y,
        left: allTools[i].x,
        fontWeight: allTools[i].bold ? "bold" : "normal",
        fontStyle: allTools[i].italic ? "italic" : "normal",
        textDecoration: allTools[i].underline ? "underline" : "",
        fontSize: allTools[i].textSize,
      };

      newToolState.push(React.createElement(ViewerTool, toolProps));
    }
    setToolState(newToolState);
  }, []);

  return (
    <div>
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
            <br />
            <Button positive>Submit</Button>
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
            <br />
            <Button positive>Submit</Button>
          </Grid.Column>
        </Grid>
      </Media>
    </div>
  );
};

export default FormViewer;
