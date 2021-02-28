import React, { useContext } from 'react'
import { Checkbox as CheckBox } from 'semantic-ui-react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'

const Checkbox = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const handleClick = (event) => {
        // onclick update the selected tool in the store with this
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
            // maxHeight={props.maxHeight}
            maxWidth={props.maxWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            onDragStop={handleDrag}
            onResizeStop={handleResize}
            default={props.default}
        >
            <CheckBox
                onClick={handleClick}
                onKeyDown={handleKeys}
                readOnly
            />
        </Rnd>
    )
}

export default Checkbox;
