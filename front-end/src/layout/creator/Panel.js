import React, { useContext } from 'react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'


const panelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd"
};

const Panel = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const handleClick = (event) => {
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, createdTools, updateCreated)
    }

    const handleKeys = (event) => {
        if (event.keyCode === 8 || event.keyCode === 46)
        {
         props.deleteFromStore(props.id, createdTools, updateCreated)   
        }
    }

    const handleDrag = (event, d) => {
        props.handleDrag(props.id, d, createdTools, updateCreated)
    }

    const handleResize = (event, direction, ref, delta, position) => {
        props.handleResize(props.id, ref,createdTools, updateCreated)
    }

    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            style={panelStyle}
            default={{ x: props.default ? props.default.x : 0, y: props.default ? props.default.x : 0, width: 320, height: 200 }}
            onClick={handleClick}
            onKeyDown={handleKeys}
            tabIndex="1"
            onDragStop={handleDrag}
            onResizeStop={handleResize}
        >
        </Rnd>
    )
}

export default Panel;
