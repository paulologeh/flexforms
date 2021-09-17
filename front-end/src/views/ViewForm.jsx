import React, { useState, useEffect } from "react";
import { Grid, Segment, Header, Input } from "semantic-ui-react";

const allTools = [
  {
    key: 0,
    tool: "GeneralInput",
    tool_id: 0,
    x: 187,
    y: 22,
  },
  {
    key: 1,
    tool: "GeneralInput",
    tool_id: 1,
    x: 188,
    y: 94,
  },
];

const GeneralInput = ({ x, y }) => {
  return <Input style={{ position: "absolute", top: y, left: x }} />;
};

const ViewForm = () => {
  const [toolState, setToolState] = useState([]);
  const [formTitle] = useState("Form Title");

  useEffect(() => {
    let newToolState = [];
    for (let i = 0; i < allTools.length; i++) {
      newToolState.push(
        React.createElement(GeneralInput, {
          key: i,
          x: allTools[i].x,
          y: allTools[i].y,
        })
      );
    }
    setToolState(newToolState);
  }, []);

  return (
    <div>
      <Grid
        style={{ overflow: "auto" }}
        textAlign="center"
        padded
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 700, minWidth: 700 }}>
          <Grid.Row>
            <Segment secondary>
              <Header as="h2">{formTitle}</Header>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment
              style={{
                position: "relative",
                height: "900px",
                maxHeight: "900px",
                minHeight: "700px",
                marginTop: 10,
              }}
            >
              {toolState}
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ViewForm;
