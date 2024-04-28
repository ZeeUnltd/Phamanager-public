import { createContext, ReactNode, useState } from "react";

// Define the type for the auth context value
interface AuthContextValue {
    auth: any; // Change 'any' to the actual type of your auth object
    set_Auth: (auth: any) => void; // Change 'any' to the actual type of your auth object
}

// Create the AuthContext
const AuthContext = createContext<AuthContextValue>({ auth: {}, set_Auth: () => {} });

// Define the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, set_Auth] = useState<any>({}); // Initialize auth with an empty object

    const authContextValue: AuthContextValue = {
        auth,
        set_Auth
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
