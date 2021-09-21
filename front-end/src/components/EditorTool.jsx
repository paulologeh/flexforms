import React, { useContext } from "react";
import { Rnd } from "react-rnd";
import { ToolStore } from "contexts/toolsContext";

export const EditorTool = ({
  component: Component,
  props,
  toolId,
  onToolDragStop,
  onToolKeyDown,
  onToolClick,
}) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);

  const handleClick = (event) => {
    onToolClick(toolId, toolStore, updateToolStore);
  };

  const handleDragStop = (event, position) => {
    onToolDragStop(toolId, position, toolStore, updateToolStore);
  };

  const handleKeys = (event) => {
    if (event.keyCode === 8 || event.keyCode === 46) {
      onToolKeyDown(toolId, toolStore, updateToolStore);
    }
  };
  return (
    <Rnd
      onClick={handleClick}
      onGotPointerCapture={handleClick}
      onDragStop={handleDragStop}
      onKeyDown={handleKeys}
      bounds=".Canvas"
    >
      <Component {...props} />
    </Rnd>
  );
};
