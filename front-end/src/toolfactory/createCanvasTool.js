import React from 'react'
import * as CanvasTools from 'layout/canvastools/index'

export function createCanvasTool(type, props)
{
    switch (type)
    {
        case 'Number':
            return React.createElement(CanvasTools.Container, props, CanvasTools.Number)
        default:
            console.error('No case for tool type', type)
            return
    }
}