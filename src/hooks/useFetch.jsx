import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

export function useFetch({ url, method = "GET", values, autoFetch = true }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      };

      if (method !== "GET" && values) {
        options.body = JSON.stringify(values);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        setError(`Error ${response.status}: ${response.statusText}`);
      }

      const responseData = await response.json();
      if(responseData.success !== true) {
        setError(responseData.message);
        return;
      }
      setData(responseData);
    } catch (e) {
      setError("Hubo un error en la petición...Inténtelo de nuevo");
    } finally {
      setIsLoading(false);
    }
  }, [url, method, values]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return {
    error,
    data,
    isLoading,
    setError,
    refetch: fetchData,
  };
}