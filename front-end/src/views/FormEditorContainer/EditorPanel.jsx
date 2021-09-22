import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { ToolStore } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";

export const EditorPanel = ({ mobile, height = 200 }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);

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
    console.debug(toolId, `deleted ${toolId} from store ${oldToolStore}`);
  };

  const onRefresh = (event) => {
    let oldToolStore = cloneDeep(toolStore);
    oldToolStore.selectedTool = "";
    oldToolStore.allToolProps = [];
    oldToolStore.allTools = [];
    updateToolStore(oldToolStore);
    console.debug(`cleared the store`);
  };

  const renderMobile = () => {
    return (
      <div style={{ alignSelf: "center", marginLeft: 10 }}>
        <Button basic circular icon="trash" onClick={onTrash}></Button>
        <Button basic circular icon="refresh" onClick={onRefresh}></Button>
        <Button disabled basic circular icon="redo"></Button>
        <Button disabled basic circular icon="undo"></Button>
        <Button disabled basic circular icon="bold"></Button>
        <Button disabled basic circular icon="italic"></Button>
        <Button disabled basic circular icon="underline"></Button>
        <Button disabled basic circular icon="font"></Button>
        <Button disabled basic circular icon="copy"></Button>
        <Button disabled basic circular icon="paste"></Button>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <Button.Group basic>
        <Button circular icon="trash" onClick={onTrash}></Button>
        <Button circular icon="refresh" onClick={onRefresh}></Button>
        <Button disabled circular icon="redo"></Button>
        <Button disabled circular icon="undo"></Button>
        <Button disabled circular icon="bold"></Button>
        <Button disabled circular icon="italic"></Button>
        <Button disabled circular icon="underline"></Button>
        <Button disabled circular icon="font"></Button>
        <Button disabled circular icon="copy"></Button>
        <Button disabled circular icon="paste"></Button>
      </Button.Group>
    );
  };

  return mobile ? renderMobile() : renderDesktop();
};
