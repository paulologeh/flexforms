import cloneDeep from "lodash/cloneDeep";

export const updateToolPosition = (
  toolId,
  position,
  toolStore,
  updateToolStore
) => {
  let oldToolStore = cloneDeep(toolStore);
  let allToolProps = oldToolStore.allToolProps;

  for (let i = 0; i < allToolProps.length; i++) {
    if (allToolProps[i].toolId === toolId) {
      allToolProps[i].x = position.x;
      allToolProps[i].y = position.y;
      oldToolStore.allToolProps = allToolProps;
      updateToolStore(oldToolStore);
      break;
    }
  }
};
