/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Segment } from 'semantic-ui-react'
import 'App.css'


const Canvas = (props) => {

    return (
            <Segment className='canvas' padded>
                <div >
                {props.canvasBody}
                </div>
            </Segment>
    )
}

export default Canvas;