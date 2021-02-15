import React, { useContext } from 'react'
import { Rnd } from 'react-rnd'
import { CreatorsContext } from 'context/contextCreator'


const panelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    // background: "#f0f0f0",
};

const Panel = (props) => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const handleClick = (event) => {
        // onclick update the selected tool in the store with this
        // console.log(event)
        let storeProps = {id: props.id, toolName: props.toolname}
        props.handleToolClick(storeProps, createdTools, updateCreated)
    }

    const handleKeys = (event) => {
        console.log(event)
        if (event.keyCode === 8 || event.keyCode === 46)
        {
         props.deleteFromStore(props.id, createdTools, updateCreated)   
        }
    } 

    return (
        <Rnd
            minHeight={props.minHeight}
            minWidth={props.minWidth}
            bounds={props.bounds}
            enableResizing={props.enableResizing}
            style={panelStyle}
            default={{ x: 0, y: 0, width: 320, height: 200 }}
            onClick={handleClick}
            onKeyDown={handleKeys}
            tabIndex="1"
        >
        </Rnd>
    )
}

export default Panel;
