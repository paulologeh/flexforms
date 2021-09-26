import React, { useContext, useState, useEffect } from "react";
import { Button, Dropdown } from "semantic-ui-react";
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
    console.debug(`deleted ${toolId} from store`);
  };

  const onRefresh = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    oldToolStore.selectedTool = "";
    oldToolStore.allToolProps = [];
    oldToolStore.allTools = [];
    updateToolStore(oldToolStore);
    console.debug(`cleared the store`);
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
    console.debug(`${toolId} made bold`);
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
    console.debug(`${toolId} made italic`);
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
    console.debug(`${toolId} made underlined`);
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
    console.debug(`${toolId} made ${textSize}`);
  };

  const onUndo = () => {
    setUndo(true);
    if (past.length <= 1) {
      console.debug("No past to undo");
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
      console.debug("No future to redo");
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
        />
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <Button.Group basic>
        <Button icon="trash" onClick={onTrash}></Button>
        <Button icon="refresh" onClick={onRefresh}></Button>
        <Button icon="redo" onClick={onRedo}></Button>
        <Button icon="undo" onClick={onUndo}></Button>
        <Button icon="bold" onClick={onBold}></Button>
        <Button icon="italic" onClick={onItalic}></Button>
        <Button icon="underline" onClick={onUnderline}></Button>
        <Dropdown
          button
          basic
          text="Text Size"
          options={fontSizeOptions}
          onChange={onFontSizeChange}
        />
      </Button.Group>
    );
  };

  return mobile ? renderMobile() : renderDesktop();
};
