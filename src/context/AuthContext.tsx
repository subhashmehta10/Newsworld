import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        // In a real app, we would validate against a backend
        // Here we just look up the user in "registeredUsers"
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const foundUser = registeredUsers.find((u: any) => u.email === email);

        if (foundUser) {
            localStorage.setItem('currentUser', JSON.stringify({ name: foundUser.name, email: foundUser.email }));
            setUser({ name: foundUser.name, email: foundUser.email });
        }
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
