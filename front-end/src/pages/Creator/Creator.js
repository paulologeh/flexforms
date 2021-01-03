import React, {useState} from 'react'
import CreatorMenu from 'pages/Creator/CreatorMenu'
import { Grid } from 'semantic-ui-react'
import Tools from 'pages/Creator/Tools'
import ToolPanel from 'pages/Creator/ToolPanel'
import Canvas from 'pages/Creator/Canvas'
import { StoreProvider } from 'context/Store'
import { isObjInvalid } from "utils/invalidObject"
import {CreateTool} from 'components/ToolFactory'


const toolsStyle = { width: '15%' }
const canvasStyle = { flexGrow: 1, height: '250%' }

const Creator = () => {

    const [selectedTool, setSelectedTool] = useState(null)

    const callbackChildTool = (tool) => {
        if (isObjInvalid(tool)) {
            console.log('ERROR! -> Tool not recognised')
            return
        }
        let newTool = CreateTool(tool)
        setSelectedTool(newTool)
    }

    return (
        <StoreProvider>
            <div>
                <div className='menu-header'>
                    <CreatorMenu/>
                </div>
                <div className='App'>
                    <Grid columns={2} padded>
                        <Grid.Row centered>
                            <Tools callbackTool={callbackChildTool}/>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={toolsStyle}>
                                <Grid.Row stretched>
                                    <ToolPanel/>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column stretched style={canvasStyle}>
                                <Canvas
                                    currentTool = {selectedTool}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        </StoreProvider>
    )
}

export default Creator