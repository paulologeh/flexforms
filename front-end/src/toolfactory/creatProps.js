export function createProps(type, kind, object) {
    let props = {}
    // attributes
    props.key = new Date().getTime()
    props.id = props.key
    props.minHeight = 10
    props.minWidth = 100
    props.maxWidth = 200 // lenght of the container
    props.maxHeight = 200 // height of the container
    props.bounds = '.canvas'
    props.enableResizing = kind === 'canvas' ? true : false
    props.disableDragging = kind === 'canvas' ? false : true
    props.default = {x: 0, y:0, width: 100, height: 10}
    // methods
    props.handleToolClick = onToolClick
    props.deleteFromStore = onToolDelete
    props.handleDrag = onToolDrag
    props.handleResize = onToolResize
    return props
}


const onToolClick = (id, getContext, setContext) => {
    if (!(id in getContext)) {
        console.error(`${id} not in store`)
        return 
    } 
    let tempStore = JSON.parse(JSON.stringify(getContext)); // deep copy
    tempStore[id].selected = true
    setContext(tempStore)
}

const onToolDelete = (id, getContext, setContext) => {
    if (!(id in getContext)) {
        console.error(`${id} not in store`)
        return 
    } 
    let tempStore = JSON.parse(JSON.stringify(getContext)); // deep copy
    delete tempStore[id]
    setContext(tempStore)
}

const onToolDrag = (id, d, getContext, setContext) => {
    if (!(id in getContext)) {
        console.error(`${id} not in store`)
        return 
    } 
    let tempStore = JSON.parse(JSON.stringify(getContext)); // deep copy
    // set %
    tempStore[id].xPct = (d.x + 22) / (d.node.offsetParent.offsetWidth - tempStore[id].width)
    tempStore[id].yPct = (d.y + 22) / (d.node.offsetParent.offsetHeight - tempStore[id].height)
    setContext(tempStore)
}

const onToolResize = (id, ref, getContext, setContext) => {
    if (!(id in getContext)) {
        console.error(`${id} not in store`)
        return 
    } 
    let tempStore = JSON.parse(JSON.stringify(getContext)); // deep copy
    tempStore[id].width = ref.style.width === "auto" ? 100 : Number(ref.style.width.replace('px',''))
    tempStore[id].height = ref.style.height === "auto" ? 10 : Number(ref.style.height.replace('px',''))
    setContext(tempStore)
}