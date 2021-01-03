import React, { Component, useState } from 'react'
import FlexForms500x500Transparent from "assets/FlexForms500x500Transparent.png"
import {Image, Header, Container, Button, Icon, Modal} from 'semantic-ui-react'
import GetStartedGrid from "./GetStartedGrid";


const HomeContainer = ({ mobile = false }) => {

    const [open, setOpen] = useState(false)

    return (
        <Container text>
            <Header
                as='h1'
                content='Imagine-a-Form'
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                }}
            />
            <Header
                as='h2'
                content='That actually does what you want ...'
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.0em',
                }}
            />
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Button primary size='huge'>
                        Get Started
                            <Icon name='right arrow' />
                    </Button>
                }
                size='small'
            >
                <Modal.Content>
                    <GetStartedGrid/>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                    {/* <Button onClick={() => setOpen(false)} positive>Go</Button> */}
                </Modal.Actions>
            </Modal>
        </Container>
        )
}


class Home extends Component{

    render() {
        return (
            <>
                <Image src={FlexForms500x500Transparent} size={'medium'} inline={true} />
                <HomeContainer />
            </>
        )
    }
    
}

export default Home;