import React, {useState} from 'react'
import CreatorMenu from 'pages/Creator/CreatorMenu'
import { Grid } from 'semantic-ui-react'
import Tools from 'pages/Creator/Tools'
import ToolPanel from 'pages/Creator/ToolPanel'
import Canvas from 'pages/Creator/Canvas'
import { isObjInvalid } from "utils/invalidObject"

const canvasStyle = { flexGrow: 1, minHeight: '700px', maxWidth: '650px' }
const toolsStyle = { width: '200px', textAlign: 'center', }

const Creator = () => {

    const [selectedTool, setSelectedTool] = useState(null)

    const callbackChildTool = (tool) => {
        if (isObjInvalid(tool)) {
            console.log('ERROR! -> Tool not recognised')
            return
        }
        setSelectedTool(tool)
    }


    return (
        <div>
            <div className='menu-header'>
                <CreatorMenu/>
            </div>
            <Grid centered padded columns={2}>
                <Grid.Row>
                    <Grid.Column style={toolsStyle} >
                        <Grid.Row stretched>
                            <Tools callbackTool={callbackChildTool} />
                        </Grid.Row>
                        <br/>
                        <Grid.Row stretched >
                            <ToolPanel/>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column stretched style={canvasStyle}>
                        <Canvas currentTool={selectedTool}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Creator