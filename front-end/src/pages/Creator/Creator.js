import React, {useContext, useState} from "react"
import * as styles from 'styles/index'
import { Grid } from 'semantic-ui-react'
import { CreatorMenu, Tools, Canvas } from 'pages/Creator/index'
import { CreatorsContext } from 'context/store'
import { canvasActions, contextActions } from 'pages/Creator/actions'
import { manufactureTool } from 'toolfactory/toolfactory'

const Creator = () => {

    const [getContext, setContext] = useContext(CreatorsContext)
    const [canvas, setCanvas] = useState([])

    const getAction = (action) => {
        contextActions(getContext, setContext, action)
        canvasActions(canvas, setCanvas, action)
        console.debug('called back action: ', action)
    }

    const createTool = (tool) => {
        let created = manufactureTool(tool, 'canvas')
        let action = 'add'
        console.debug('created tool ', created)
        contextActions(getContext, setContext, action, created.props)
        canvasActions(canvas, setCanvas, action, created)
        console.debug('called back tool: ', tool)
    }

    console.debug(getContext)
    console.debug(canvas)

    return (
        <div style={styles.rootStyle}>
            <div style={{marginTop: '50px'}}>
                <CreatorMenu sendAction={getAction} />
            </div>
            <Grid centered padded columns={2} >
                <Grid.Row>
                    <Grid.Column style={styles.toolsStyle} >
                        <Grid.Row stretched>
                            <Tools sendTool={createTool}/>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column  stretched style={styles.canvasStyle}>
                        <Canvas body={canvas} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Creator