import React, {useState} from 'react'
import { Input } from 'semantic-ui-react'

const Text = () => {

    const [state, setState] = useState('')

    return (
        <Input
            type='text'
            value={state}
            fluid
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default Text