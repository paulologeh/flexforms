import React, { useContext } from "react";
import { FormStore } from "contexts/formContext";
import cloneDeep from "lodash/cloneDeep";

export const ViewerTool = ({ component: Component, props, style, toolId }) => {
  const [formStore, updateFormStore] = useContext(FormStore);

  const handleChange = (event, data) => {
    let oldFormStore = cloneDeep(formStore);

    if ("value" in data) {
      oldFormStore[toolId] = data.value;
    }
    if ("checked" in data) {
      oldFormStore[toolId] = data.checked;
    }
    if ("radio" in data) {
      oldFormStore[toolId] = data.radio;
    }

    updateFormStore(oldFormStore);
  };

  return <Component {...props} style={style} onChange={handleChange} />;
};
