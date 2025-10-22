import {useContext} from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(false);
const login = (token) => {
    if (token) {
        setIsUserLogged(true);
    }
}
    const logout = () => {
        setIsUserLogged(false);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ isUserLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
