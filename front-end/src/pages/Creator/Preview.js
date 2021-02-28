import React, {useState, useContext} from 'react'
import {  Modal } from 'semantic-ui-react'
import { CreatorsContext } from 'context/contextCreator'
import { createToolsFromObj } from 'utils/index';

export default function Preview (props) {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState({offsetHeight: 0, offsetWidth: 0})
    const [createdTools] = useContext(CreatorsContext)

    const refCallback = element => {
        
        if (element) {
            if (element.ref.current === null)
            {
                setState(null)
            }
            else
            {
                let newState = {
                    offsetHeight: element.ref.current.offsetHeight,
                    offsetWidth: element.ref.current.offsetWidth,
                    offsetLeft: element.ref.current.offsetLeft,
                    offsetTop: element.ref.current.offsetTop
                }
                if (state === null)
                {
                    setState(newState)    
                }
                if (state !== null && newState.offsetWidth !== state.offsetWidth && newState.offsetHeight !== state.offsetHeight) {
                    setState(newState)
                }
            }
        }
    };


    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={props.children}
        style={{ minHeight: '100%', maxWidth: '650px' }}
        ref={refCallback} 
        >
            {createToolsFromObj(createdTools, open, state)}
        </Modal>
    )
}