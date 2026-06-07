import React, { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const AuthenticationContex = createContext();

export function AuthenticationProvider({ children }) {
  const [authView, setAuthView] = useLocalStorageState("hf_auth_view", "login");

  return (
    <AuthenticationContex.Provider value={{ authView, setAuthView }}>
      {children}
    </AuthenticationContex.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContex);
  if (context === undefined)
    throw new Error("useAuthentication was used outside of AuthenticationProvider");
  return context;
}
