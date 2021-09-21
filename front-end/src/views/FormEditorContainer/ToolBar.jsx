import React, { useState, useContext } from "react";
import { Segment, List, Popup } from "semantic-ui-react";
import cloneDeep from "lodash/cloneDeep";
import { onToolDragStop, onToolKeyDown, onToolClick } from "utils";
import { tools } from "utils/tools";
import { ToolStore } from "contexts/toolsContext";
import { EditorTool } from "components";
import { Button } from "semantic-ui-react";

export const ToolBar = ({ isHorizontal = false }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const [counter, setCounter] = useState(0);

  const handleClick = (e, data) => {
    // send to tools context
    let oldToolStore = cloneDeep(toolStore);
    let toolProps = {
      key: counter,
      toolId: counter,
      onToolDragStop: onToolDragStop,
      onToolKeyDown: onToolKeyDown,
      onToolClick: onToolClick,
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
      });
      updateToolStore(oldToolStore);
      let newCounter = counter + 1;
      setCounter(newCounter);
    } else {
      console.error("No Component for", toolName);
    }
  };

  return (
    <Segment textAlign="center">
      Tools
      <br />
      <List horizontal={isHorizontal}>
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
