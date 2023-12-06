import React, { useState, createContext } from "react";

export const ToolStore = createContext();

const initialStore = {
  selectedTool: "",
  allTools: [],
  allToolProps: [],
};

export function ToolStoreProvider(props) {
  const [toolStore, updateToolStore] = useState(initialStore);

  return (
    <ToolStore.Provider value={[toolStore, updateToolStore]}>
      {props.children}
    </ToolStore.Provider>
  );
}
