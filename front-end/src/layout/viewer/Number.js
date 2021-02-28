import React, {useState} from 'react'
import { Input } from 'semantic-ui-react'

const Number = () => {

    const [state, setState] = useState('')

    return (
        <Input
            type='number'
            value={state}
            fluid
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default Number