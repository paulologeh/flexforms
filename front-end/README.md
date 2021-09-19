```javascript
const GeneralInput = ({ tool_id }) => {
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const handleDragStop = (e, d) => {
    let oldToolStore = cloneDeep(toolStore);
    let allToolProps = oldToolStore.allToolProps;
    for (let i = 0; i < allToolProps.length; i++) {
      if (allToolProps[i].tool_id === tool_id) {
        let X = d.x;
        let Y = d.y;
        /********************************* Improve later *************************************
        let parentWidth = d.node.offsetParent.offsetWidth;
        let parentHeight = d.node.offsetParent.offsetHeight;
        let clientWidth = d.node.offsetWidth;
        let clientHeight = d.node.offsetHeight;
        console.log(X, Y, parentWidth, parentHeight, clientWidth, clientHeight);
        allToolProps[i].x = `${100 * (X / (parentWidth - clientWidth))}%`;
        allToolProps[i].y = `${100 * (Y / (parentHeight - clientHeight))}%`;
        */
        allToolProps[i].x = X;
        allToolProps[i].y = Y;
        oldToolStore.allToolProps = allToolProps;
        updateToolStore(oldToolStore);
        break;
      }
    }
  };

  return (
    <Rnd onDragStop={handleDragStop} bounds=".Canvas">
      <Input />
    </Rnd>
  );
};
```
