/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react'
import CreatorMenu from 'pages/Creator/CreatorMenu'
import { Grid } from 'semantic-ui-react'
import Tools, {createComponent} from 'pages/Creator/Tools'
import Canvas from 'pages/Creator/Canvas'
import { isObjInvalid, arrayHasKey, defaultToolCords } from "utils/index"
import { CreatorsContext } from 'context/contextCreator'
import 'App.css'
import
{
    applicationForm
}
    from 'pages/Creator/templates'

const rootStyle = { minHeight: '100vh', backgroundColor: '#F0F0F0', marginTop: 0 }
const canvasStyle = { flexGrow: 1, minHeight: '250%', maxWidth: '650px' }
const toolsStyle = { width: '200px', textAlign: 'center' }
const toolSchema = { key: '', toolName: '', toolValue: null, x: 0, xPercentage: 0, yPercentage: 0, y: 0, height: 10, width: 100}


const Creator = () => {

    const [createdTools, updateCreated] = useContext(CreatorsContext)
    const [canvasBody, setCanvasBody] = useState([])

    const callbackChildComponent = (component) => {
        if (isObjInvalid(component)) {
            console.log('ERROR! -> Tool not recognised')
            return
        }
        addToCanvas(component) // add to canvas
        addToCreatedTools(component) // add to store

    }

    const callbackActive = (active) => {
        if (active === 'Clear Canvas' && canvasBody.length !== 0)
        {
            setCanvasBody([])
            updateCreated({selectedTool: '', tools: []})
        }
        else if (active === 'Application Form')
        {
            let newCanvasBody = []
            for (let i in applicationForm)
            {
                let temp = createComponent(applicationForm[i].toolName, applicationForm[i])
                newCanvasBody.push(temp)
            }
            setCanvasBody(newCanvasBody)
            updateCreated({selectedTool: '', tools: applicationForm})
        }
    }

    const addToCanvas = (tool) => {
        if (isObjInvalid(tool)) {
            return
        }
        let newCanvasBody = [...canvasBody]
        newCanvasBody.push(tool)
        setCanvasBody(newCanvasBody)
    }

    const addToCreatedTools = (component) => {
        if (isObjInvalid(component)) {
            return
        }
        let newContext = JSON.parse(JSON.stringify(createdTools))
        let newTool = { ...toolSchema }
        newTool.key = component.key
        newTool.toolName = component.props.toolname
        defaultToolCords(newTool)
        newContext.tools.push(JSON.parse(JSON.stringify(newTool)))
        updateCreated(newContext)
    }

    useEffect(
        // effect to check if a tool in the canvas has been removed from the store
        () =>
        {
            let newCanvasBody = canvasBody.filter((element) => arrayHasKey(element, createdTools.tools))
            setCanvasBody(newCanvasBody)
            },[createdTools]
    )

    return (
            <div style={rootStyle}>
                <div style={{marginTop: '50px'}}>
                    <CreatorMenu callbackActive={callbackActive}/>
                </div>
                <Grid centered padded columns={2} >
                    <Grid.Row>
                        <Grid.Column style={toolsStyle} >
                            <Grid.Row stretched>
                                <Tools callbackComponent={callbackChildComponent}
                                />
                            </Grid.Row>
                            <br/>
                        </Grid.Column>
                        <Grid.Column  stretched style={canvasStyle}>
                            <Canvas canvasBody={canvasBody}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
    )
}

export default Creator