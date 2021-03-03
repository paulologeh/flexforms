import React, {useState} from 'react'
import { TextArea as Textarea, Form} from 'semantic-ui-react'

const TextArea = () => {

    const [state, setState] = useState('')

    return (
        <Form>
            <Textarea
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
       </Form>
    )
}

export default TextArea