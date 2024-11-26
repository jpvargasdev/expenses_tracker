import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useAxios = <U, P extends any = []>(
    delegate: (params?: P) => Promise<U>,
    params?: P
)=> {
    const [data, setData] = useState<U>();
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
      controllerRef.current.abort();
    };
  
    useEffect(() => {
      (async () => {
        try {
          const response = await delegate(params)
  
          setData(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
            setError(error.response?.data?.message || error.message);
            } else {
            setError((error as Error).message);
            }
        } finally {
          setLoaded(true);
        }
      })();

      return () => cancel();

    }, [delegate, params]);
  
    return { cancel, data, error, loaded };
  };