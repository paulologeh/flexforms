import React, { useContext } from 'react'
import { Input } from 'semantic-ui-react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/store'

// function getTodayString() {
//     let today = new Date()
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();
//     return `${yyyy}-${mm}-${dd}`
// }


const Dates = (props) => {

    const [getContext, setContext] = useContext(CreatorsContext)
    const handleClick = (event) => {
        // onclick update the selected tool in the store with this
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, getContext, setContext)
    }

    const handleKeys = (event) => {
        if (event.keyCode === 8 || event.keyCode === 46)
        {
         props.deleteFromStore(props.id, getContext, setContext)   
        }
    }

    const handleDrag = (event, d) => {
        props.handleDrag(props.id, d, getContext, setContext)
    }

    const handleResize = (event, direction, ref, delta, position) => {
        props.handleResize(props.id, ref,getContext, setContext)
    }
    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={160}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            onDragStop={handleDrag}
            onResizeStop={handleResize}
            default={props.default}
        >
            <Input
                type='date'
                onClick={handleClick}
                onKeyDown={handleKeys}
                fluid
                readOnly
            />
        </Rnd>
    )
}

export default Dates;
