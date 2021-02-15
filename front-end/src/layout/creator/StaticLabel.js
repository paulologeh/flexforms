/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'


const EditableElement = (props) => {
  const { onChange } = props;
  const element = useRef();
  let elements = React.Children.toArray(props.children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  };
  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    onChange(value);
  });
  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
  return elements;
};

const CustomLabel = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const [state, setState] = useState('Label')
    const handleClick = () => {
        // onclick update the selected tool in the store with this
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, createdTools, updateCreated)
    }

    const handleKeys = (event) => {
        if (event.keyCode === 46)
        {
            props.deleteFromStore(props.id, createdTools, updateCreated)   
        }
    } 

    const handleChange = (value) => setState(value)

    const handleDrag = (event, d) => {
        props.handleDrag(props.id, d, createdTools, updateCreated)
    }

    const handleResize = (event, direction, ref, delta, position) => {
        props.handleResize(props.id, ref,createdTools, updateCreated)
    }

    useEffect(
        () => {
            let newContext = JSON.parse(JSON.stringify(createdTools))
            for (let i in newContext.tools)
            {
                if (newContext.tools[i].key === props.id)
                {
                    newContext.tools[i].toolValue = state.slice()
                    updateCreated(newContext)
                    break
                }
            }
        }, [state]
    )

    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            onClick={handleClick}
            onKeyDown={handleKeys}
            onDragStop={handleDrag}
            onResizeStop={handleResize}
        >
            <EditableElement onChange={handleChange}>
                <label>Label</label>
            </EditableElement>
        </Rnd>
    )
}

export default CustomLabel
