import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [infoUser, setInfoUser] = useState(null);
  const [isLogging, setIsLogging] = useState(false);

  return (
    <AuthContext.Provider value={{ infoUser, setInfoUser, isLogging, setIsLogging }}>
      {children}
    </AuthContext.Provider>
  );

}