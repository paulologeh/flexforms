import React from 'react';
import {Rnd} from 'react-rnd'
import {Time, Text, TextArea, StaticLabel, Radio, Checkbox, Number, Heading, Dates} from 'layout/viewertools/index'


const panelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd"
}

export function createToolsFromObj(getContext, open, pos) {
    if (getContext.tools.length === 0) return null
    if (!open) return null
    if (pos === null) return null
    let height = pos.offsetHeight 
    let width = pos.offsetWidth
    let components = []
    let tempTools = JSON.parse(JSON.stringify(getContext))
    let tools = [...tempTools.tools]

    for (let i in tools)
    {
        let props = {}
        props.position = {
            x: Math.min(width, tools[i].xPercentage * (width - tools[i].width)),
            y: Math.min(height, tools[i].yPercentage * (height - tools[i].height))
        }
        props.size = {
            width: tools[i].width,
            height: tools[i].height
        }
        props.enableResizing = false
        props.disableDragging = true
        props.key = tools[i].key
        let element = null
        switch (tools[i].toolName) {
            case 'Time':
                element = React.createElement(Rnd, props, <Time/>)
                break;
            case 'TextArea':
                element = React.createElement(Rnd, props, <TextArea />)
                break;
            case 'TextInput':
                element = React.createElement(Rnd, props, <Text />)
                break;
            case 'StaticLabel':
                delete props.size
                element = React.createElement(Rnd, props, <StaticLabel label={tools[i].toolValue}/>)
                break
            case 'Radio':
                element = React.createElement(Rnd, props, <Radio/>)
                break
            case 'Panel':
                props.style = panelStyle;
                element = React.createElement(Rnd, props)
                break
            case 'Number':
                element = React.createElement(Rnd, props, <Number />)
                break
            case 'Heading':
                delete props.size
                element = React.createElement(Rnd, props, <Heading label={tools[i].toolValue} />)
                break
            case 'Dates':
                props.minWidth = 160
                element = React.createElement(Rnd, props, <Dates />)
                break
            case 'Checkbox':
                element = React.createElement(Rnd, props, <Checkbox />)
                break;
            default:
                break;
        }
        components.push(element)
    }
    return components
}