import React, {useState} from 'react'
import { Input } from 'semantic-ui-react'

const Dates = () => {

    const [state, setState] = useState('')

    return (
        <Input
            type='date'
            value={state}
            fluid
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default Dates