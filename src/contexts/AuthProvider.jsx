import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //? Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //? Signin User:
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //? Update User:
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    //? Email Verification:
    const SentEmailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    //? Forgot Password:
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //? SignOut:
    const userSignout = () => {
        setLoading(true);
        return signOut(auth);
    };

    //? Observation :
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
            // console.log('Observed user: ', currentUser);
        });

        return () => {
            unSubscribe();  // cleanup
        };
    }, []); // ✅ empty dependency list


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        updateUser,
        SentEmailVerification,
        forgotPassword,
        userSignout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
