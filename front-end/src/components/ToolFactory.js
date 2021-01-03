import React from 'react'
import { Form } from 'semantic-ui-react'
import { Rnd } from 'react-rnd'
// import {getHeight, getWidth} from 'utils/getDocumentProps'
// import Draggable from 'components/Draggable'


function getDefaultDimensions(toolName) {
    
    return { minHeight: 10, minWidth: 100 }
}


export const CreateTool = (tool) => {
    let toolProps = {}
    toolProps.style = {}
    // Common Props
    let key = new Date().getTime()
    // let startPos = { x: getWidth() * 0.3, y: getHeight() * 0.1 }

    // Custom Props
    if (tool.type) {
        toolProps.type = tool.type      
    }

    if (tool.tool !== 'TextArea' || tool.tool !== 'Panel' || tool.tool !== 'StaticLabel') {
        toolProps.fluid = true
    }

    if (tool.tool === 'TextArea') {
        let newTool = React.createElement(tool.component, toolProps, null)
        return (
            <Rnd
                key={key}
                bound='window'
            >
            <Form>{newTool}</Form>
        </Rnd>
        )
    }

    if (tool.tool === 'Panel') {
        toolProps.placeholder = true
        // toolProps.style.flexGrow = 1
        // toolProps.style.height = '30%'
        let newTool = React.createElement(tool.component, toolProps, null)
        return (
            <Rnd
                key={key}
                bound='window'
            >
            {newTool}
            </Rnd>
        )
    }

    let newTool = React.createElement(tool.component, toolProps, null)
    // default dimensions
    let rndProps = getDefaultDimensions(tool.tool)
    rndProps.bound = 'window'
    rndProps.key = key
    let item = React.createElement(Rnd, rndProps, newTool)

    return item
}
