/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Segment } from 'semantic-ui-react'
import { isObjInvalid } from "utils/invalidObject"


const Canvas = (props) => {

    const [canvasBody, setCanvasBody] = useState([])

    const addToCanvas = () => {
        if (isObjInvalid(props.currentTool)) {
            return
        }
        let newCanvasBody = [...canvasBody]
        newCanvasBody.push(props.currentTool)
        setCanvasBody(newCanvasBody)
    }

    useEffect(
        () => {
            addToCanvas();
        }, [props.currentTool]
    )

    return (
            <Segment padded>
                <div id='current-canvas'>
                    {canvasBody}
                </div>
            </Segment>
    )
}

export default Canvas;