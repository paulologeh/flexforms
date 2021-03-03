export function contextActions(getContext, setContext, action, object) {
    console.debug('Received action: ', action)
    switch (action) {
        case 'Clear Canvas':
            setContext({})
            break
        case 'add':
            console.debug('object is ', object)
            let newContext = JSON.parse(JSON.stringify(getContext))
            newContext[object.id] = sampleTool
            for (let key in object)
            {
                if ( key in newContext[object.id] ) newContext[object.id][key] = object[key]
            }
            setContext(newContext)
            break
        case 'remove':
            let oldContext = JSON.parse(JSON.stringify(getContext))
            delete oldContext[object.id]
            setContext(oldContext)
            break
        default:
            console.error('No action for ', action)
            return
    }
}

export function canvasActions(canvas, setCanvas, action, component) {
    console.debug('Received action: ', action)
    switch (action) {
        case 'Clear Canvas':
            setCanvas([])
            break
        case 'add':
            console.debug('component is ', component)
            let newCanvas = JSON.parse(JSON.stringify(canvas))
            newCanvas.push(component)
            setCanvas(newCanvas)
            break
        case 'remove':
            let oldCanvas = JSON.parse(JSON.stringify(canvas))
            oldCanvas = oldCanvas.filer(obj => obj.id !== component.id)
            setCanvas(oldCanvas)
            break
        default:
            console.error('No action for ', action)
            return
    }
}

const sampleTool = {
    id: 0,
    text: null,
    tool: null,
    xPct: 0,
    yPct: 0,
    width: 0,
    height: 0,
    selected: false,
}