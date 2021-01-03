import React, { useState } from 'react'

export const CustomLabel = () => {

    const [state, setState] = useState('Label')

    return (
        <label> {state} </label>
    )
}
