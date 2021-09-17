import React, { useContext } from "react";
import { Grid, Segment, Header, Input, Menu, Icon } from "semantic-ui-react";
import { ToolStore, ToolStoreProvider } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";
import { Rnd } from "react-rnd";
import "../App.css";

var counter = 0;

const GeneralInput = ({ tool_id }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const handleDragStop = (e, d) => {
    let oldToolStore = cloneDeep(toolStore);
    let allToolProps = oldToolStore.allToolProps;
    for (let i = 0; i < allToolProps.length; i++) {
      if (allToolProps[i].tool_id === tool_id) {
        let X = d.x;
        let Y = d.y;
        /********************************* Improve later *************************************
        let parentWidth = d.node.offsetParent.offsetWidth;
        let parentHeight = d.node.offsetParent.offsetHeight;
        let clientWidth = d.node.offsetWidth;
        let clientHeight = d.node.offsetHeight;
        console.log(X, Y, parentWidth, parentHeight, clientWidth, clientHeight);
        allToolProps[i].x = `${100 * (X / (parentWidth - clientWidth))}%`;
        allToolProps[i].y = `${100 * (Y / (parentHeight - clientHeight))}%`;
        */
        allToolProps[i].x = X;
        allToolProps[i].y = Y;
        oldToolStore.allToolProps = allToolProps;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  return (
    <Rnd onDragStop={handleDragStop} bounds=".Canvas">
      <Input />
    </Rnd>
  );
};

const Canvas = () => {
  const [toolStore] = useContext(ToolStore);

  console.log(toolStore);

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

const ToolBar = ({ visible, handleSideBar }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const tools = [
    {
      icon: "calendar alternate outline",
      tool: "date-time",
      component: Input,
    },
  ];

  const handleClick = () => {
    // send to tools context
    let oldToolStore = cloneDeep(toolStore);
    let toolProps = { key: counter, tool_id: counter };
    oldToolStore.allTools.push(React.createElement(GeneralInput, toolProps));
    oldToolStore.allToolProps.push({
      key: counter,
      tool: "GeneralInput",
      tool_id: counter,
    });
    updateToolStore(oldToolStore);
    counter++;
  };

  return (
    <Menu style={{ marginBottom: 10 }}>
      <Menu.Item
        // component={tools[0].component}
        name={tools[0].icon}
        key={"1"}
        onClick={handleClick}
      >
        <Icon name={tools[0].icon} />
      </Menu.Item>
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
          <Grid.Column style={{ maxWidth: 700, minWidth: 700 }}>
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
