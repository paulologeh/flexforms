import React, {useRef} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import {SIGN_IN} from 'navigation/CONSTANTS'
import logo from 'assets/FlexFormsLogoNoText.png';

export const Reset = () => {

    const emailRef = useRef()

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    <Image src={logo} /> Reset your password
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' required ref={emailRef}/>
                        <Button color='black' fluid size='large' type='submit'>Reset Password</Button>
                        <br />
                        <Form.Button fluid size='large' href={SIGN_IN}> Log In </Form.Button>    
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}