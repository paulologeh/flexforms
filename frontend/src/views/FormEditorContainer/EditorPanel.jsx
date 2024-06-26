import React, { useContext, useState, useEffect } from "react";
import { Button, Dropdown, Popup } from "semantic-ui-react";
import { ToolStore } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";
import _ from "lodash";

const fontSizeOptions = [
  { key: 1, text: "Small", value: 7 },
  { key: 2, text: "Normal", value: 14 },
  { key: 3, text: "Large", value: 28 },
  { key: 4, text: "Huge", value: 56 },
];

const MAXLEN = 30;

export const EditorPanel = ({ mobile }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);
  const [undo, setUndo] = useState(false);
  const [redo, setRedo] = useState(false);
  const [fontSize, setFontSize] = useState(null);

  const onTrash = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    let toolId = oldToolStore.selectedTool;
    oldToolStore.allToolProps = oldToolStore.allToolProps.filter(
      (obj) => obj.toolId !== toolId
    );
    oldToolStore.allTools = oldToolStore.allTools.filter(
      (obj) => obj.key !== `${toolId}`
    );
    updateToolStore(oldToolStore);
  };

  const onRefresh = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    oldToolStore.selectedTool = "";
    oldToolStore.allToolProps = [];
    oldToolStore.allTools = [];
    updateToolStore(oldToolStore);
  };

  const onBold = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    let toolId = oldToolStore.selectedTool;
    for (let i = 0; i < oldToolStore.allToolProps.length; i++) {
      if (toolId === oldToolStore.allToolProps[i].toolId) {
        let bold = cloneDeep(oldToolStore.allToolProps[i].bold);
        oldToolStore.allToolProps[i].bold = !bold;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  const onItalic = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    let toolId = oldToolStore.selectedTool;
    for (let i = 0; i < oldToolStore.allToolProps.length; i++) {
      if (toolId === oldToolStore.allToolProps[i].toolId) {
        let italic = cloneDeep(oldToolStore.allToolProps[i].italic);
        oldToolStore.allToolProps[i].italic = !italic;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  const onUnderline = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    let toolId = oldToolStore.selectedTool;
    for (let i = 0; i < oldToolStore.allToolProps.length; i++) {
      if (toolId === oldToolStore.allToolProps[i].toolId) {
        let underline = cloneDeep(oldToolStore.allToolProps[i].underline);
        oldToolStore.allToolProps[i].underline = !underline;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  const onFontSizeChange = (event, data) => {
    let textSize = data.value;
    let oldToolStore = cloneDeep(toolStore);
    let toolId = oldToolStore.selectedTool;
    for (let i = 0; i < oldToolStore.allToolProps.length; i++) {
      if (toolId === oldToolStore.allToolProps[i].toolId) {
        oldToolStore.allToolProps[i].textSize = textSize;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  const onUndo = () => {
    setUndo(true);
    if (past.length <= 1) {
      setUndo(false);
      return;
    }

    let history = cloneDeep(past);
    let futureState = cloneDeep(future);
    futureState.push(history.pop()); // remove last state and put it in the future
    if (futureState.length > MAXLEN) futureState.shift();
    let present = history[history.length - 1];
    updateToolStore(present);
    setPast(history);
    setFuture(futureState);
    setUndo(false);
  };

  const onRedo = () => {
    setRedo(true);
    if (future.length < 1) {
      setRedo(false);
      return;
    }

    let history = cloneDeep(past);
    let futureState = cloneDeep(future);
    let present = futureState.pop();
    history.push(present); // put future back in past
    if (history.length > MAXLEN) history.shift();
    updateToolStore(present);
    setPast(history);
    setFuture(futureState);
    setRedo(false);
  };

  const handleClick = (event, data) => {
    let selectedTool = toolStore.selectedTool;
    let selectedFontSize = null;
    for (let i = 0; i < toolStore.allToolProps.length; i++) {
      if (toolStore.allToolProps[i].toolId === selectedTool) {
        selectedFontSize = toolStore.allToolProps[i].textSize;
        break;
      }
    }
    if (selectedFontSize !== null) {
      setFontSize(selectedFontSize);
    }
  };

  useEffect(() => {
    if (undo || redo) return;

    let pastState = cloneDeep(past);
    let newState = cloneDeep(toolStore);
    newState.selectedTool = "";
    if (_.isEqual(newState, past[past.length - 1])) return;

    pastState.push(newState);
    if (pastState.length > MAXLEN) pastState.shift();
    setPast(pastState);
    setFuture([]); // reset the future state

    // eslint-disable-next-line
  }, [toolStore.allToolProps, toolStore.allTools]);

  const renderMobile = () => {
    return (
      <div style={{ alignSelf: "center", marginLeft: 10 }}>
        <Button basic circular icon="trash" onClick={onTrash}></Button>
        <Button basic circular icon="refresh" onClick={onRefresh}></Button>
        <Button basic circular icon="redo" onClick={onRedo}></Button>
        <Button basic circular icon="undo" onClick={onUndo}></Button>
        <Button basic circular icon="bold" onClick={onBold}></Button>
        <Button basic circular icon="italic" onClick={onItalic}></Button>
        <Button basic circular icon="underline" onClick={onUnderline}></Button>
        <Dropdown
          circular
          button
          basic
          text="Text Size"
          options={fontSizeOptions}
          onChange={onFontSizeChange}
          onClick={handleClick}
          value={fontSize}
        />
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <Button.Group basic>
        <Popup
          content="Delete"
          mouseEnterDelay={500}
          mouseLeaveDelay={500}
          on="hover"
          trigger={<Button icon="trash" onClick={onTrash}></Button>}
        />
        <Popup
          content="Refresh"
          mouseEnterDelay={500}
          mouseLeaveDelay={500}
          on="hover"
          trigger={<Button icon="refresh" onClick={onRefresh}></Button>}
        />
        <Popup
          content="Redo"
          mouseEnterDelay={500}
          mouseLeaveDelay={500}
          on="hover"
          trigger={<Button icon="redo" onClick={onRedo}></Button>}
        />
        <Popup
          content="Undo"
          mouseEnterDelay={500}
          mouseLeaveDelay={500}
          on="hover"
          trigger={<Button icon="undo" onClick={onUndo}></Button>}
        />
        <Button icon="bold" onClick={onBold}></Button>
        <Button icon="italic" onClick={onItalic}></Button>
        <Button icon="underline" onClick={onUnderline}></Button>
        <Dropdown
          button
          basic
          text="Text Size"
          options={fontSizeOptions}
          onChange={onFontSizeChange}
          onClick={handleClick}
          value={fontSize}
        />
      </Button.Group>
    );
  };

  return mobile ? renderMobile() : renderDesktop();
};
