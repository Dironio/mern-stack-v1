import { createContext } from "react";

interface AuthContextProps {
    token: null | string;
    userId: null | string;
    login: (jwtToken: any, id: any) => void | undefined;
    logout: () => void;
    isAuth: boolean;
}

export const AuthContext = createContext<Required<AuthContextProps>>({
    token: null,
    userId: null,
    login: (jwtToken: any, id: any) => { },
    logout: () => { },
    isAuth: false,
});