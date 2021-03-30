import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import logo from 'assets/FlexFormsLogoNoText.png';

export const SignUp = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        <Image src={logo} /> Create a new account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
          <Form.Input fluid icon='user outline' iconPosition='left' placeholder='Last Name'/>
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
          <Form.Input fluid icon='phone' iconPosition='left' placeholder='Mobile' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Enter Password'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
          />
          <Button color='black' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)