import React, {useState} from 'react'
import { Input } from 'semantic-ui-react'

const Time = () => {

    const [state, setState] = useState(null)

    return (
        <Input type='time' value={state} onChange={(e) => setState(e.target.value)}/>
    )
}

export default Time