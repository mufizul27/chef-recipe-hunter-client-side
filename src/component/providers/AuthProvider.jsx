/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

        const googleLogin = () => {
            setLoading(true);
          return  signInWithPopup(auth, googleProvider);
          };

    const githubLogIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
        return signOut(auth);
    }
    //updateProfile
    const updateProfileUser=async (userName,imageUrl)=>{
        console.log("userName"+userName+"URL"+imageUrl);
   return  updateProfile(auth.currentUser, {
        displayName: userName, photoURL: imageUrl
      });
    }

    // observer user auth state 
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogIn,
        updateProfileUser,
        setUser,
     
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;