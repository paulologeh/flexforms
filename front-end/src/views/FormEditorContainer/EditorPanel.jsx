import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { ToolStore } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";

export const EditorPanel = ({ mobile, height = 200 }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);

  const onToolDelete = (event) => {
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

  const renderMobile = () => {
    return (
      <div style={{ alignSelf: "center", marginLeft: 10 }}>
        <Button circular icon="trash" onClick={onToolDelete}></Button>
        <Button circular icon="refresh"></Button>
        <Button circular icon="redo"></Button>
        <Button circular icon="undo"></Button>
        <Button circular icon="bold"></Button>
        <Button circular icon="italic"></Button>
        <Button circular icon="underline"></Button>
        <Button circular icon="font"></Button>
        <Button circular icon="copy"></Button>
        <Button circular icon="paste"></Button>
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <Button.Group>
        <Button circular icon="trash" onClick={onToolDelete}></Button>
        <Button circular icon="refresh"></Button>
        <Button circular icon="redo"></Button>
        <Button circular icon="undo"></Button>
        <Button circular icon="bold"></Button>
        <Button circular icon="italic"></Button>
        <Button circular icon="underline"></Button>
        <Button circular icon="font"></Button>
        <Button circular icon="copy"></Button>
        <Button circular icon="paste"></Button>
      </Button.Group>
    );
  };

  return mobile ? renderMobile() : renderDesktop();
};
