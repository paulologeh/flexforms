import React, {useState, createContext, useEffect, useContext} from 'react'
import {auth} from '../firebase'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => (
            setCurrentUser(user)
        ))
        setLoading(false)

        return unsubscribe
    }, [])

    const value = { currentUser, signup, login }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
