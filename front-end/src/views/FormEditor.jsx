import React, { useContext } from "react";
import { ToolStore, ToolStoreProvider } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";
import { Grid, Segment, Header, Menu, Icon } from "semantic-ui-react";
import { EditorTool } from "components";
import { updateToolPosition } from "utils";
import { tools } from "utils/tools";
import "../App.css";

var COUNTER = 0;

const Canvas = () => {
  const [toolStore] = useContext(ToolStore);

  console.log("Canvas: ", toolStore);

  return (
    <Segment
      padded
      className="Canvas"
      style={{
        height: "900px",
        maxHeight: "900px",
        minHeight: "700px",
      }}
    >
      {"allTools" in toolStore && toolStore.allTools
        ? toolStore.allTools
        : null}
    </Segment>
  );
};

const ToolBar = () => {
  const [toolStore, updateToolStore] = useContext(ToolStore);

  const handleClick = (e, data) => {
    // send to tools context
    let oldToolStore = cloneDeep(toolStore);
    let toolProps = {
      key: COUNTER,
      toolId: COUNTER,
      updateToolPosition: updateToolPosition,
    };
    // Determine which tool was clicked
    let toolName = null;
    for (let i = 0; i < tools.length; i++) {
      if ("icon" in tools[i] && "name" in data && tools[i].icon === data.name) {
        toolName = tools[i].name;
        if ("component" in tools[i]) toolProps.component = tools[i].component;
        if ("props" in tools[i]) toolProps.props = tools[i].props;
        break;
      }
    }

    // update tools context
    if ("component" in toolProps) {
      oldToolStore.allTools.push(React.createElement(EditorTool, toolProps));
      oldToolStore.allToolProps.push({
        key: COUNTER,
        tool: toolName,
        toolId: COUNTER,
      });
      updateToolStore(oldToolStore);
      COUNTER++;
    } else {
      console.error("No Component for", toolName);
    }
  };

  return (
    <Menu style={{ marginBottom: 10 }}>
      {tools.map((tool, i) => (
        <Menu.Item key={i} onClick={handleClick} name={tool.icon}>
          <Icon name={tool.icon} />
        </Menu.Item>
      ))}
      <Menu.Item style={{ marginLeft: 2 }}>Tool Bar</Menu.Item>
    </Menu>
  );
};

const FormEditor = () => {
  return (
    <ToolStoreProvider>
      <div className="App">
        <Grid
          style={{ overflow: "auto" }}
          textAlign="center"
          padded
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 702, minWidth: 700 }}>
            <Grid.Row>
              <Segment secondary style={{ marginBottom: 10 }}>
                <Header as="h2">Form Editor</Header>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <ToolBar />
            </Grid.Row>
            <Grid.Row>
              <Canvas />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    </ToolStoreProvider>
  );
};

export default FormEditor;
