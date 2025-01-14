import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const { infoUser, setInfoUser, isLogging, setIsLogging } =
    useContext(AuthContext);
  const [data, error, isLoading, setError] = useFetch({
    url: "http://127.0.0.1:8000/auth/session"
  });

  useEffect(() => {
    if (data.success !== true) {
      setInfoUser(null);
      setIsLogging(data.success);
      setError(data.message);
      return;
    }
    setIsLogging(data.success);
    setError(null);
    setInfoUser(data);
  }, [data]);

  return {
    infoUser,
    setInfoUser,
    isLogging,
    setIsLogging,
    data,
    error,
    isLoading,
    setError
  };
  
}
