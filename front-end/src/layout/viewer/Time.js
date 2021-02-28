import React, {useState} from 'react'
import { Input } from 'semantic-ui-react'

const Time = () => {

    const [state, setState] = useState('')

    return (
        <Input
            type='time'
            value={state}
            fluid
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default Time