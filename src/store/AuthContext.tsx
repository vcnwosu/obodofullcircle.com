import React, { createContext, useContext, useState } from 'react';

interface User {
    id: String;
    name: String;
    email: String;
}

interface AuthContextType {
    user: User | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType | undefined => {
    return useContext(AuthContext);
}