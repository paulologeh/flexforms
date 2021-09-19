import React, { useContext } from "react";
import { Rnd } from "react-rnd";
import { ToolStore } from "contexts/toolsContext";

export const EditorTool = ({
  component: Component,
  props,
  toolId,
  updateToolPosition,
}) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);

  const handleDragStop = (e, position) => {
    updateToolPosition(toolId, position, toolStore, updateToolStore);
  };
  return (
    <Rnd onDragStop={handleDragStop} bounds=".Canvas">
      <Component {...props} />
    </Rnd>
  );
};
