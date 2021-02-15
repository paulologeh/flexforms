import React from 'react'

const onToolClick = (storeProps, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)); // deep copy
    tempStore.selectedTool = storeProps.id; // set selected tool id
    localUpdateStore(tempStore)
}

const onToolDelete = (id, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)); // deep copy
    tempStore.tools = tempStore.tools.filter((obj) => obj.key !== id) // remove obj with this id from the store
    if (tempStore.selectedTool === id)
    {
        tempStore.selectedTool = null    
    }
    localUpdateStore(tempStore)
}

const noResize = ['Checkbox', 'Radio', 'StaticLabel', 'Heading']
const horizontalResize = ['Time', 'Date', 'Number', 'Text', 'TextArea']

export function createFormTool(tool)
{
    let enableResizing = true
    if (noResize.includes(tool.value))
    {
        enableResizing = false
    }
    else if (horizontalResize.includes(tool.value))
    {
        enableResizing = { top:false, right:true, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }
    }
    let id = `Tool_${new Date().getTime()}`
    return React.createElement(tool.component, {
        key: id,
        id: id,
        enableResizing: enableResizing,
        toolname: tool.value,
        bounds: '.canvas',
        minHeight: 10,
        minWidth: 100,
        handleToolClick: onToolClick,
        deleteFromStore: onToolDelete
    })
}