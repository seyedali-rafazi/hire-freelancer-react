import React, { createContext, useContext, useState } from "react";

const AuthenticationContex = createContext();

export function AuthenticationProvider({ children }) {
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState();
  const [step, setStep] = useState();

  return (
    <AuthenticationContex.Provider
      value={{ phoneNumber, setphoneNumber, password, setpassword, setStep }}>
      {children}
    </AuthenticationContex.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContex);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
