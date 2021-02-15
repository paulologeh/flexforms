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

const onToolDrag = (id, d, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)); // deep copy
    for (let i in tempStore.tools)
    {
        if (tempStore.tools[i].key === id)
        {
            tempStore.tools[i].x = d.x
            tempStore.tools[i].y = d.y
            localUpdateStore(tempStore)
            break
        }
    }
}

const onToolResize = (id, ref, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)); // deep copy
    for (let i in tempStore.tools)
    {
        if (tempStore.tools[i].key === id)
        {
            tempStore.tools[i].width = ref.style.width
            tempStore.tools[i].height = ref.style.height
            localUpdateStore(tempStore)
            break
        }
    }
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
        deleteFromStore: onToolDelete,
        handleDrag: onToolDrag,
        handleResize: onToolResize
    })
}