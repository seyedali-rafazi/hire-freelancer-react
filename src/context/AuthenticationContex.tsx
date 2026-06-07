import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import type { ChildrenProps } from "../types";

type AuthView = "login" | "signup";

interface AuthenticationContextValue {
  authView: AuthView;
  setAuthView: React.Dispatch<React.SetStateAction<AuthView>>;
}

const AuthenticationContex = createContext<AuthenticationContextValue | undefined>(
  undefined
);

export function AuthenticationProvider({ children }: ChildrenProps) {
  const [authView, setAuthView] = useLocalStorageState<AuthView>(
    "hf_auth_view",
    "login"
  );

  return (
    <AuthenticationContex.Provider value={{ authView, setAuthView }}>
      {children}
    </AuthenticationContex.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContex);
  if (context === undefined)
    throw new Error(
      "useAuthentication was used outside of AuthenticationProvider"
    );
  return context;
}
