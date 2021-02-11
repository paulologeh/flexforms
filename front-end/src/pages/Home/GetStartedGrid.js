import React, {useState } from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import createform from "assets/createform.gif"
import respondtoform from "assets/respondtoform.gif"
import viewresponses from "assets/viewresponses.gif"
import discontinue from "assets/discontinue.gif"
import {CREATOR, RESPONDER, VIEWER, DESTROYER} from "navigation/CONSTANTS"


const GetStartedGrid = () => {

    const [mode, setMode] = useState(null);

    return (
        <Grid columns={'equal'} container>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h2' textAlign='center'>Create A New Form</Header>
                    <Image
                        src={createform}
                        fluid
                        bordered={mode === 'createform'}
                        onMouseEnter={() => setMode('createform')}
                        onMouseLeave={() => setMode(null)}
                        href={CREATOR}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2' textAlign='center'>Fill Out A Form</Header>
                    <Image
                        src={respondtoform}
                        fluid
                        bordered={mode === 'respondtoform'}
                        onMouseEnter={() => setMode('respondtoform')}
                        onMouseLeave={() => setMode(null)}
                        href={RESPONDER}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h2' textAlign='center'>Check My Form's Responses</Header>
                    <Image
                        name='viewresponses'
                        src={viewresponses}
                        fluid
                        bordered={mode === 'viewresponses'}
                        onMouseEnter={() => setMode('viewresponses')}
                        onMouseLeave={() => setMode(null)}
                        href={VIEWER}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2' textAlign='center'>Cancel My Form</Header>
                    <Image
                        name='discontinue'
                        src={discontinue}
                        fluid
                        bordered={mode === 'discontinue'}
                        onMouseEnter={() => setMode('discontinue')}
                        onMouseLeave={() => setMode(null)}
                        href={DESTROYER}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default GetStartedGrid;