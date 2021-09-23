import React, { useEffect, useState, useContext } from "react";
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
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [textSize, setTextSize] = useState(14);

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

  // Label Only
  const handleSave = (value) => {
    onLabelEdit(toolId, value, toolStore, updateToolStore);
  };

  // Label Only - Check if tool id is Bold
  useEffect(() => {
    for (let i in toolStore.allToolProps) {
      if (toolId !== toolStore.allToolProps[i].toolId) continue;
      if (bold !== toolStore.allToolProps[i].bold) {
        setBold(toolStore.allToolProps[i].bold);
      }
      if (italic !== toolStore.allToolProps[i].italic) {
        setItalic(toolStore.allToolProps[i].italic);
      }
      if (underline !== toolStore.allToolProps[i].underline) {
        setUnderline(toolStore.allToolProps[i].underline);
      }
      if (textSize !== toolStore.allToolProps[i].textSize) {
        setTextSize(toolStore.allToolProps[i].textSize);
      }

      break;
    }
    // eslint-disable-next-line
  }, [toolStore]);

  const getX = () => {
    for (let i in toolStore.allToolProps) {
      if (toolId === toolStore.allToolProps[i].toolId) {
        console.log("x is", toolStore.allToolProps[i].x);
        return toolStore.allToolProps[i].x;
      }
    }

    return 0;
  };

  const getY = () => {
    for (let i in toolStore.allToolProps) {
      if (toolId === toolStore.allToolProps[i].toolId) {
        console.log("y is", toolStore.allToolProps[i].y);
        return toolStore.allToolProps[i].y;
      }
    }

    return 0;
  };

  return (
    <Rnd
      position={{ x: getX(), y: getY() }}
      onClick={handleClick}
      onGotPointerCapture={handleClick}
      onDragStop={handleDragStop}
      onKeyDown={handleKeys}
      enableResizing={false}
      bounds=".Canvas"
    >
      {props &&
      "initialValue" in props &&
      props.initialValue === "StaticLabel" ? (
        <Component
          {...props}
          save={(value) => handleSave(value)}
          bold={bold}
          italic={italic}
          underline={underline}
          textSize={textSize}
        />
      ) : (
        <Component {...props} />
      )}
    </Rnd>
  );
};
