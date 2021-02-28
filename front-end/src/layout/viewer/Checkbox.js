import React, {useState} from 'react'
import { Checkbox as CheckBox } from 'semantic-ui-react'

const Checkbox = () => {

    const [state, setState] = useState(false)
    const toggle = () => {
        let checked = state ? false : true
        setState(checked)
    }

    return (
        <CheckBox
            checked={state}
            onChange={toggle}
        />
    )
}

export default Checkbox