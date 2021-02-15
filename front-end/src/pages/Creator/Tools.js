import { Button, Grid, List, Header, Popup, Segment } from 'semantic-ui-react'
import { createFormTool } from "utils/toolfactory";
import {Checkbox, Radio, CustomLabel, Heading, Time, Number, Text, Dates, Panel, TextArea} from 'layout/creator/index'


const allTools = [
    {
        icon: 'square outline', value: 'Panel', text: 'Panel', component: Panel,
        help: 'Creates a bordered area'
    },
    {
        icon: 'calculator', value: 'Number', text: 'Number', component: Number,
        help: 'Create a numeric input'
    },
    {
        icon: 'text height', value: 'TextInput', text: 'Text', component: Text,
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
        icon: 'calendar outline', value: 'Dates', text: 'Dates', component: Dates,
        help: 'Creates a date'
    },
    {
        icon: 'time', value: 'Time', text: 'Time', component: Time,
        help: 'Create a time'
    },
    {
        icon: 'text cursor', value: 'StaticLabel', text: 'Static Label', component: CustomLabel,
        help: 'Creates a static label'
    },
    {
        icon: 'heading', value: 'Heading', text: 'Heading', component: Heading,
        help: 'Creates a header'
    }
    // TO DO
    // {
    //     icon: 'calendar alternate outline', value: 'DateTime', text: 'Date Time', component: Input, type: 'datetime-local',
    //     help: 'Creates a date time'
    // },
    // {
    //     icon: 'file outline', value: 'Attachment', text: 'Attachment', component: Input, type: 'file',
    //     help: 'Creates an attachment'
    // },
    // {
    //     icon: 'picture', value: 'Picture', text: 'Picture', component: Image,
    //     help: 'Creates an image'
    // },
    // {
    //     icon: 'dropdown', value: 'DropdownMenu', text: 'Dropdown', component: Dropdown,
    //     help: 'Creates a dropdown with a list of options to select from'
    // },
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
        let createdTool = createFormTool(tool)
        props.callbackComponent(createdTool) // Callback selected tool to the Creator component
    }

    return (
        <Segment color='blue' inverted padded>
            <Header as='h4'>Tools</Header>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List>
                            {allTools.slice(0,5).map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        basic
                                        content={obj.text}
                                        trigger={<Button size='large' color='blue' icon={obj.icon} key={i} onClick={handleClick} />}
                                    />
                                </List.Item>)}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            {allTools.slice(5,10).map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        basic
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