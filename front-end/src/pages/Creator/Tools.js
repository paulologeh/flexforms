import React from 'react'
import { Button, Icon, Popup, Dropdown, Segment, Input, TextArea, Checkbox, Radio, Image } from 'semantic-ui-react'
import {CustomLabel} from 'components/CustomLabel'


const misc = [
    { icon: 'dropdown', tool: 'DropdownMenu', component: Dropdown },
    { icon: 'square outline', tool: 'Panel', component: Segment },
    { icon: 'send', tool: 'Submit', component: Button }
]
const inputs = [
    { icon: 'calculator', tool: 'Number', component: Input, type:'number' },
    { icon: 'text height', tool: 'TextInput', component: Input, type:'text' },
    { icon: 'text width', tool: 'TextArea', component: TextArea },
    { icon: 'text cursor', tool: 'StaticLabel', component: CustomLabel}
]

const booleans = [
    { icon: 'check square outline', tool: 'Checkbox', component: Checkbox },
    { icon: 'dot circle outline', tool: 'Radio', component: Radio}
]

const datetime = [
    { icon: 'calendar outline', tool: 'Date', component: Input, type: 'date' },
    { icon: 'calendar alternate outline', tool: 'DateTime', component: Input, type: 'datetime-local'},
    { icon: 'time', tool: 'Time', component: Input, type: 'time' }
]

const inserts = [
    { icon: 'file outline', tool: 'Attachment', component: Input, type: 'file' },
    { icon: 'picture', tool: 'Picture', component: Image }
]

let all = []
all = all.concat(misc, inputs, booleans, datetime, inserts)


const Tools = (props) => {

    const handleClick = (e, data) => {
        console.log('clicked', data.tool.tool)
        props.callbackTool(data.tool) // Callback selected tool to the Creator component
    }

        return (
            <Button.Group size='medium' primary>
                {all.map((obj, i) =>
                    <Popup
                        key={i}
                        hideOnScroll
                        basic
                        content={obj.tool}
                        trigger={<Button onClick={handleClick} tool={obj} icon><Icon name={obj.icon}/></Button>}
                    />
                )}
            </Button.Group>
        )
}

export default Tools;
