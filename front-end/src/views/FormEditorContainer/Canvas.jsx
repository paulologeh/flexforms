import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import { ToolStore } from "contexts/toolsContext";

export const Canvas = ({ height = 800 }) => {
  const [toolStore] = useContext(ToolStore);

  console.debug("Canvas: ", toolStore);

  return (
    <Segment
      textAlign="center"
      padded
      className="Canvas"
      style={{ height: height }}
    >
      {"allTools" in toolStore && toolStore.allTools
        ? toolStore.allTools
        : null}
    </Segment>
  );
};
