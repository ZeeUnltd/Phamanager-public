import { createContext, ReactNode, useState, useReducer } from "react";

// Define the type for the auth context value
interface AuthContextValue {
  auth: any; // Change 'any' to the actual type of your auth object
  set_Auth: (auth: any) => void; // Change 'any' to the actual type of your auth object
  pharmacy: any;
  set_Pharmacy: (pharmacy: any) => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextValue>({
  auth: {},
  set_Auth: () => {},
  pharmacy: null,
  set_Pharmacy: () => {},
});

// Define the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, set_Auth] = useState<any>({}); // Initialize auth with an empty object
  const [pharmacy, set_Pharmacy] = useState<any>();
  // const [state, dispatch] = useReducer<any>();

  const authContextValue: AuthContextValue = {
    auth,
    pharmacy,
    set_Auth,
    set_Pharmacy,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
