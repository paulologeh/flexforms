import React, {useContext } from 'react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/store'

const Container = (props) => {

    const [getContext, setContext] = useContext(CreatorsContext)

    const handleDrag = (event, d) => {
        // update new x and y % in the store
        props.handleDrag(props.id, d, getContext, setContext)
    }

    const handleResize = (event, direction, ref, delta, position) => {
        // update widht and height in the store
        props.handleResize(props.id, ref,getContext, setContext)
    }

    const handleKeys = (event) => {
        // delete items from the store --> Note: useEffect will also remove fromt the canvas
       if (event.keyCode === 8 || event.keyCode === 46)
       {
            props.deleteFromStore(props.id, getContext, setContext)   
       }
    }

    const handleClick = (event) => {
        // onclick update the selected tool in the store with this
        props.handleToolClick(props.id, getContext, setContext)
    }
    
    return (
        <Rnd
            key={props.key}
            id={props.key}
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            maxHeight={props.maxHeight}
            maxWidth={props.maxWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            disableDragging={props.disableDragging}
            onDragStop={handleDrag}
            onResizeStop={handleResize}
            onKeyDown={handleKeys}
            onClick={handleClick}
            default={
                {
                    x: props.x,
                    y: props.y,
                    width: props.width,
                    height: props.height
                }
            }
            >
                {props.children}
        </Rnd>
    )
}

export default Container