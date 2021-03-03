import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'



const ToolPanel = (props) => {

    // use effect
    // check selected tool in store
    // render menu based on prop type
    return (
        <Segment
            color='blue'
            inverted
            padded 
        >
            <Header as='h4'>Tool Panel</Header>
            <Container fluid>
                <label>{props.selectedTool} </label>
                <br/><br/>
                {props.children}
            </Container>
        </Segment>
    )
}

export default ToolPanel;