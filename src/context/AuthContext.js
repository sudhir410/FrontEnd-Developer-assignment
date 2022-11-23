import { useContext, createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [data, setData] = useState([])
    const [id, setId] = useState(101)
    const [togglePostForm, setTogglePostForm] = useState(false)
    const [toggleEditForm, setToggleEditForm] = useState(false)
    const [updelid, setUpDelId] = useState('')

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            googleSignIn, logout, user, data, setData, id, setId
            , togglePostForm, setTogglePostForm,
            setToggleEditForm, toggleEditForm,
            setUpDelId, updelid
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}