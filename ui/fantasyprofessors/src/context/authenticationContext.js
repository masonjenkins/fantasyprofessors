import { createContext } from "react";

export const AuthContext = createContext({ isLoggedIn: false, token: null, isAdmin: false, login: () => {}, logout: () => {} })