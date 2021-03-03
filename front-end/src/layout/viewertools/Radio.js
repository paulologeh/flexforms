import React, {useState} from 'react'
import { Radio as RadiO } from 'semantic-ui-react'

const Radio = () => {

    const [state, setState] = useState(false)
    const toggle = () => {
        let checked = state ? false : true
        setState(checked)
    }

    return (
        <RadiO
            checked={state}
            onChange={toggle}
        />
    )
}

export default Radio