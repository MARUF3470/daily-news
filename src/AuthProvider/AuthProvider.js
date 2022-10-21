import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('')
    const logOut = () => {
        // setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = (provider) => {
        // setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const emailVarification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
        })
        setLoading(false)
        return () => unsubcribe()
    }, [])
    const authInfo = { user, googleSignIn, logOut, signIn, signUp, updateUserProfile, setLoading, emailVarification, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;