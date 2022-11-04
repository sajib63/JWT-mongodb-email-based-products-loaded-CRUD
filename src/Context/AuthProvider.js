import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firease.config';
export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState({});
    const [loader,setLoader]=useState(false)


    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser=()=>{
        localStorage.removeItem('genius-token')
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(true)
        })
        return()=>{
            return unsubscribed();
        }
    },[])

    const userInfo={
        user,
        createUser,
        loginUser,
        logoutUser,
        loader
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;