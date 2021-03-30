import React from 'react'
import {useAuth} from 'context/AuthContext'

export function Studio() {
    const {currentUser} = useAuth()

    return (
        <div>
            Studio
            <br/>  
             {currentUser.email}
        </div>
    )
}
