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
  onLabelEdit,
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

  const handleSave = (value) => {
    onLabelEdit(toolId, value, toolStore, updateToolStore);
  };

  return (
    <Rnd
      onClick={handleClick}
      onGotPointerCapture={handleClick}
      onDragStop={handleDragStop}
      onKeyDown={handleKeys}
      enableResizing={false}
      bounds=".Canvas"
    >
      {"initialValue" in props && props.initialValue === "StaticLabel" ? (
        <Component {...props} save={(value) => handleSave(value)} />
      ) : (
        <Component {...props} />
      )}
    </Rnd>
  );
};
