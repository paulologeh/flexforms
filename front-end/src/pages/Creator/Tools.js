import { Button, Grid, List, Popup, Dropdown, Segment, Input, TextArea, Checkbox, Radio, Image, Header } from 'semantic-ui-react'
import { CustomLabel } from 'components/CustomLabel'
import { CreateTool } from 'components/ToolFactory'


const allTools = [
    {
        icon: 'dropdown', value: 'DropdownMenu', text: 'Dropdown', component: Dropdown,
        help: 'Creates a dropdown with a list of options to select from'
    },
    {
        icon: 'square outline', value: 'Panel', text: 'Panel', component: Segment,
        help: 'Creates a bordered area'
    },
    {
        icon: 'calculator', value: 'Number', text: 'Number', component: Input, type: 'number',
        help: 'Create a numeric input'
    },
    {
        icon: 'text height', value: 'TextInput', text: 'Text', component: Input, type: 'text',
        help: 'Creates a text input'
    },
    {
        icon: 'check square outline', value: 'Checkbox', text: 'Checkbox', component: Checkbox,
        help: 'Creates a checkbox'
    },
    {
        icon: 'dot circle outline', value: 'Radio', text: 'Radio', component: Radio,
        help: 'Creates a radio'
    },
    {
        icon: 'text width', value: 'TextArea', text: 'Text Area', component: TextArea,
        help: 'Creates a text area'
    },
    {
        icon: 'calendar outline', value: 'Date', text: 'Date', component: Input, type: 'date',
        help: 'Creates a date'
    },
    {
        icon: 'calendar alternate outline', value: 'DateTime', text: 'Date Time', component: Input, type: 'datetime-local',
        help: 'Creates a date time'
    },
    {
        icon: 'file outline', value: 'Attachment', text: 'Attachment', component: Input, type: 'file',
        help: 'Creates an attachment'
    },
    {
        icon: 'picture', value: 'Picture', text: 'Picture', component: Image,
        help: 'Creates an image'
    },
    {
        icon: 'time', value: 'Time', text: 'Time', component: Input, type: 'time',
        help: 'Create a time'
    },
    {
        icon: 'text cursor', value: 'StaticLabel', text: 'Static Label', component: CustomLabel,
        help: 'Creates a static label'
    },
    {
        icon: 'heading', value: 'Heading', text: 'Heading', component: Header,
        help: 'Creates a header'
    }
]

function getTool(value)
{
    for (let i in allTools)
    {
        if (allTools[i].icon === value)
        {
            return allTools[i]
        }
    }
    return null
}

const Tools = (props) => {

    const handleClick = (e, data) => {
        let tool = getTool(data.icon)
        let createdTool = CreateTool(tool)
        props.callbackTool(createdTool) // Callback selected tool to the Creator component
    }

    return (
        <Segment color='blue' inverted padded>
            <Header as='h5'>Tools</Header>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List>
                            {allTools.slice(0,7).map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        content={obj.text}
                                        trigger={<Button size='large' color='blue' icon={obj.icon} key={i} onClick={handleClick} />}
                                    />
                                </List.Item>)}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            {allTools.slice(7,14).map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        content={obj.text}
                                        trigger={<Button size='large' color='blue' icon={obj.icon} key={i} onClick={handleClick} />}
                                    />
                                </List.Item>)}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
        </Segment>
    )
}

export default Tools;