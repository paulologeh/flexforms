import React, { useContext } from "react";
import { Segment, Button, Container } from "semantic-ui-react";
import { ToolStore } from "contexts/toolsContext";
import cloneDeep from "lodash/cloneDeep";

export const EditorPanel = ({ height = 530 }) => {
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
  return (
    <Segment textAlign="center" style={{ height: height }}>
      Panel
      <Container style={{ marginTop: 5 }}>
        <Button negative onClick={onToolDelete}>
          Delete
        </Button>
      </Container>
    </Segment>
  );
};
