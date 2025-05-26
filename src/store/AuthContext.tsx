import React, { createContext, useContext, useEffect, useState } from 'react';
import { getRequest } from '../http/httpService';

interface Student {
    level: String;
    plan: String;
    plan_expiry: string;
}

interface User {
    id: String;
    first_name: String;
    last_name: String;
    email: String;
    user_type: String;
    student?: Student;
}

interface LoginData {
    user: User;
    token: string;
    firebase_token: string;
}

interface AuthContextType {
    user: User | undefined;
    login: (data: LoginData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const login = async (data: LoginData) => {
        localStorage.setItem("obodo-auth", data.token);
        localStorage.setItem("obodo-firebase", data.firebase_token);
        getRequest("api", "user")?.then((res) => {
            setUser(res.data.user);
        });
    };

    const logout = async () => {
        setUser(undefined);
        localStorage.removeItem("obodo-auth");
        localStorage.removeItem("obodo-firebase");
    }

    useEffect(() => {
        const obodoAuth = localStorage.getItem("obodo-auth");
        const obodoFirebase = localStorage.getItem("obodo-firebase");

        if (obodoAuth) {
            getRequest("api", "user")?.then((res) => {
                setUser(res.data.user);
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType | undefined => {
    return useContext(AuthContext);
}