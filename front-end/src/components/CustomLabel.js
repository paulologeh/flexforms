import React, { useState } from 'react'

export const CustomLabel = () => {

    const [state ] = useState('Static Label')

    return (
        <label> {state} </label>
    )
}
