import { Button, Grid, List, Header, Popup, Segment } from 'semantic-ui-react'

const allTools = [
    {
        icon: 'square outline', value: 'Panel', text: 'Panel'
    },
    {
        icon: 'calculator', value: 'Number', text: 'Number'
    },
    {
        icon: 'text height', value: 'TextInput', text: 'Text'
    },
    {
        icon: 'check square outline', value: 'Checkbox', text: 'Checkbox'
    },
    {
        icon: 'dot circle outline', value: 'Radio', text: 'Radio'
    },
    {
        icon: 'text width', value: 'TextArea', text: 'Text Area'
    },
    {
        icon: 'calendar outline', value: 'Dates', text: 'Dates'
    },
    {
        icon: 'time', value: 'Time', text: 'Time'
    },
    {
        icon: 'text cursor', value: 'StaticLabel', text: 'Static Label'
    },
    {
        icon: 'heading', value: 'Heading', text: 'Heading'
    }
]


const Tools = (props) => {

    const handleClick = (e, data) => {
        props.sendTool(data.value)
        console.debug('sent back tool: ', data.value)
    }

    return (
        <Segment
            color='blue'
            inverted
            padded
        >
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
                                        trigger={<Button size='large' color='blue' value={obj.value} icon={obj.icon} key={i} onClick={handleClick} />}
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
                                        trigger={<Button size='large' color='blue' value={obj.value} icon={obj.icon} key={i} onClick={handleClick} />}
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