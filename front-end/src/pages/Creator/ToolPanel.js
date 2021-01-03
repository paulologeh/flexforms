import React from 'react'
import {Segment, Container, Header, Input, Button} from 'semantic-ui-react'


const ToolPanel = () => {

    return (
        <Segment
            color='blue'
            inverted
        >
            <Container>
                <Header as="h5" inverted>Tool Panel</Header>
                <label>ID:</label>
                <br/>
                <label>Label</label>
                <Input fluid type="text" size="small"  />
                <label>Tooltip</label>
                <Input fluid type="text" size="small" />
                <br/>
                <Button  negative size='tiny'>Delete</Button>
            </Container>
        </Segment>
    )
}

export default ToolPanel;