import { useState } from "react"
import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => { 

    };

    return (<AuthenticationContext.Provider
        value={{
            user,
            isLoading,
            error,
            onLogin,
        }}
    >{children}
    </AuthenticationContext.Provider>
    )
}