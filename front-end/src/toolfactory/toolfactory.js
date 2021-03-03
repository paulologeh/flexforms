import { createCanvasTool } from './createCanvasTool'
import { createViewerTool } from './createViewerTool'
import { createProps } from './creatProps'

export function manufactureTool(type, kind)
{
    let props = createProps(type, kind)
    console.debug('created props', props)
    let tool = kind === 'canvas' ? createCanvasTool(type, props) : createViewerTool(type, props)
    console.debug('created tool', tool)
    return tool
}