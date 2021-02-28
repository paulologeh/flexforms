export function defaultToolCords(newTool) {
    if (newTool.toolName === 'Panel')
    {
            newTool.height = 200
            newTool.width = 320
    }
    if (newTool.toolName === 'TextArea')
    {
        newTool.height = 75
        newTool.width = 186
    }
}