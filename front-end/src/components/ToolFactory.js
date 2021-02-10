import React from 'react'
import { Form } from 'semantic-ui-react'
import { Rnd } from 'react-rnd'
import placeholderImage from 'assets/toolimage.png'


function getDefaultDimensions(toolName) {
    return { minHeight: 10, minWidth: 100 }
}


export const CreateTool = (tool) => {
    let toolProps = {}
    toolProps.style = {}
    // Common Props
    let key = `Tool_${new Date().getTime()}`
    toolProps.key = key

    // Custom Props
    if (tool.type) {
        toolProps.type = tool.type      
    }

    if (tool.type && tool.type === 'file') {
        toolProps.disabled = true
    }

    if (tool.tool === 'Submit') {
        let newTool = React.createElement(tool.component, toolProps, 'Submit')
        return (
            <Rnd
                key={key}
                bound='window'
            >
                {newTool}
            </Rnd>
        )
    }

    if (tool.tool === 'Picture') {
        toolProps.src = placeholderImage
        toolProps.draggable=false
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
        const panelStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
            // zIndex: '0'
        };

        return (
            <Rnd
                key={key}
                bound='window'
                style={panelStyle}
                default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200
                }}
            >
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
