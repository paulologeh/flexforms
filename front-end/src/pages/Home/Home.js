import React, { Component } from 'react'
import FlexForms500x500 from "assets/FlexForms500x500.png"
import flexforms from "assets/flexforms.gif"
import createform from "assets/createform.gif"
import respondtoform from "assets/respondtoform.gif"
import {Image, Header, Container, Button, Icon, Grid, Modal} from 'semantic-ui-react'


const ImageGrid = () => (
    <Grid
        columns={2}
        // style={{
        //         width: '50%',
        //         height: '50%'
        // }}
        container
    >
        <Grid.Row>
            <Grid.Column>
                <Header as='h3'>Create a Form</Header>
                <Image src={createform} wrapped/>
            </Grid.Column>
            <Grid.Column>
                <Header as='h3'>Respond to a Form</Header>
                <Image src={respondtoform} wrapped />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Header as='h3'>View My Form's Responses</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/image-square.png' wrapped/>
            </Grid.Column>
            <Grid.Column>
                <Header as='h3'>Close my form</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/image-square.png' wrapped/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const HomeContainer = ({ mobile = false }) => {

    const [open, setOpen] = React.useState(false)

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
            >
                <Modal.Header>Hi There, <br></br>What would you like to do today?</Modal.Header>
                <Modal.Content>
                    <ImageGrid/>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)} positive>Go</Button>
                </Modal.Actions>
            </Modal>
            <Image
                src={flexforms}
                verticalAlign={'bottom'}
                style={{
                    marginTop: mobile ? '2em' : '4em'
                }}
            />
        </Container>
        )
}


class Home extends Component{

    render() {
        return (
            <>
                <Image src={FlexForms500x500} size={'medium'} inline={true} />
                <HomeContainer />
            </>
        )
    }
    
}

export default Home;