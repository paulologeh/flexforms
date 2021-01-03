import {isObjInvalid} from 'utils/invalidObject'


export const handleToolClick = (localId, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)) // deep copy
    tempStore.selectedTool = localId
    localUpdateStore(tempStore)
}

export const handleToolProps = (localId, localStore) => {
    for (let i in localStore.canvasTools) {
        if (isObjInvalid(localStore.canvasTools[i].id)) {
            continue
        }
        if (localId === localStore.canvasTools[i].id) {
            return localStore.canvasTools[i]
        }
    }
    return null
}

export const handleComponentState = (storeObject, localState, localSetState) => {
    let newState = { ...localState }
    if (isObjInvalid(storeObject)) {
        return
    }
    let keys = Object.keys(storeObject)
    for (let i in keys) {
        // Update values except id and condition
        if (keys[i] === 'id' || keys[i] === 'conditions') {
            continue
        }
        newState[keys[i]] = storeObject[keys[i]]
    }
    localSetState(newState)
}