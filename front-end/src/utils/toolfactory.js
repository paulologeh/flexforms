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
            tempStore.tools[i].xPercentage = (d.x + 22) / (d.node.offsetParent.offsetWidth - tempStore.tools[i].width)
            tempStore.tools[i].yPercentage = (d.y + 22) / (d.node.offsetParent.offsetHeight - tempStore.tools[i].height)
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
            tempStore.tools[i].width = ref.style.width === "auto" ? 100 : Number(ref.style.width.replace('px',''))
            tempStore.tools[i].height = ref.style.height === "auto" ? 10 : Number(ref.style.height.replace('px',''))
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

    let props = {
        key: tool.key ? tool.key : id,
        id: tool.key ? tool.key : id,
        enableResizing: enableResizing,
        toolname: tool.value,
        text: tool.toolValue ? tool.toolValue : null,
        bounds: '.canvas',
        minHeight: tool.value === 'Panel' ? '100px' : '10px' ,
        minWidth: tool.value === 'Panel' ? '180px' : '100px',
        handleToolClick: onToolClick,
        deleteFromStore: onToolDelete,
        handleDrag: onToolDrag,
        handleResize: onToolResize
    }

    if (tool.value === 'Checkbox' || tool.value === 'Radio' || tool.value === 'StaticLabel')
    {
        delete props.minHeight
        delete props.minWidth
        if (tool.value !== 'StaticLabel')
        {
            props.maxWidth = '15px'
        }
    }

    if ('toolObj' in tool && 'default' in tool.toolObj)
    {
        props.default = {x: tool.toolObj.x, y: tool.toolObj.y}   
    }

    return React.createElement(tool.component, props )
}