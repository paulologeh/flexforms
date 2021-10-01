import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Segment,
  Header,
  Button,
  TransitionablePortal,
} from "semantic-ui-react";
import { getForm } from "services";
import { tools } from "utils/tools";
import { ViewerTool } from "components";
import { Media } from "styles/mediaStyles";
import { FormStore } from "contexts/formContext";
import { addFormResponse } from "services";

const StaticLabel = (props) => {
  return <span style={props.style}>{props.value}</span>;
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FormViewer = () => {
  const [toolState, setToolState] = useState([]);
  const [formTitle, setFormTitle] = useState("No Title");
  const [error, setError] = useState("");
  const [formStore] = useContext(FormStore);
  const [open, setOpen] = useState(false);
  const query = useQuery();

  console.log("FormViewer", formStore);

  useEffect(() => {
    async function fetchForm() {
      let uuid = query.get("uuid");

      let request;
      try {
        request = await getForm(uuid);
      } catch (e) {
        console.log(request);
        setError("Failed to fetch form");
        return;
      }

      let response = request.data;
      if ("title" in response) setFormTitle(response.title);

      let allTools = response.form_obj;
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
    }

    fetchForm();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    setError("");
    let uuid = query.get("uuid");
    try {
      const response = await addFormResponse(uuid, {
        data: formStore,
      });
      console.debug("handleSubmit -->", response);
    } catch (e) {
      setError(e);
    }
  };

  const renderSubmitButton = () => {
    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        openOnTriggerClick
        trigger={
          <Button
            content={open ? "Close" : "Submit"}
            negative={open}
            positive={!open}
            onClick={handleSubmit}
          />
        }
      >
        <Segment
          style={{ left: "40%", position: "fixed", top: "50%", zIndex: 1000 }}
        >
          <Header>{error ? <p>{error}</p> : <p>Submitted</p>}</Header>
        </Segment>
      </TransitionablePortal>
    );
  };

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
                {error}
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
                {error}
              </Segment>
            </Grid.Row>
            <br />
            {renderSubmitButton()}
            {/* <Button positive onClick={handleSubmit}>
              Submit
            </Button> */}
          </Grid.Column>
        </Grid>
      </Media>
    </div>
  );
};

export default FormViewer;
