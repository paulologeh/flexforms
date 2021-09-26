import React, { useState, useContext } from "react";
import { Segment, List, Popup, Dropdown } from "semantic-ui-react";
import cloneDeep from "lodash/cloneDeep";
import { onToolDragStop, onToolDelete, onToolClick, onLabelEdit } from "utils";
import { tools } from "utils/tools";
import { ToolStore } from "contexts/toolsContext";
import { EditorTool } from "components";
import { Button } from "semantic-ui-react";

export const ToolBar = ({ mobile = false }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const [counter, setCounter] = useState(0);

  const handleClick = (e, data) => {
    console.log(data);
    // send to tools context
    let oldToolStore = cloneDeep(toolStore);
    let toolProps = {
      key: counter,
      toolId: counter,
      onToolDragStop: onToolDragStop,
      onToolDelete: onToolDelete,
      onToolClick: onToolClick,
      onLabelEdit: onLabelEdit,
    };

    // Determine which tool was clicked
    let toolName = null;
    for (let i = 0; i < tools.length; i++) {
      if ("icon" in tools[i] && "icon" in data && tools[i].icon === data.icon) {
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
        key: counter,
        tool: toolName,
        toolId: counter,
        bold: false,
        italic: false,
        underline: false,
        textSize: 14,
        x: 0,
        y: 0,
      });
      updateToolStore(oldToolStore);
      let newCounter = counter + 1;
      setCounter(newCounter);
    } else {
      console.error("No Component for", toolName);
    }
  };

  const renderDesktop = () => {
    return (
      <Segment textAlign="center">
        Tools
        <br />
        <List>
          {tools.map((obj, i) => (
            <List.Item key={i}>
              <Popup
                basic
                content={obj.name}
                trigger={
                  <Button
                    basic
                    size="large"
                    icon={obj.icon}
                    key={i}
                    onClick={handleClick}
                  />
                }
              />
            </List.Item>
          ))}
        </List>
      </Segment>
    );
  };

  const renderMobile = () => {
    return (
      <Dropdown item icon="setting">
        <Dropdown.Menu>
          {tools.map((obj, i) => (
            <Dropdown.Item
              icon={obj.icon}
              text={obj.name}
              onClick={handleClick}
              key={i}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return mobile ? renderMobile() : renderDesktop();
};
