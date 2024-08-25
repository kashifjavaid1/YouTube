import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapaid";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    const fetchAllData = async (query) => {
      setLoading(true);
      try {
        const res = await fetchData(`search/?q=${query}`);
        setData(res.data.contents);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData(value);
  }, [value]);

  return (
    <AuthContext.Provider value={{ value, setValue, data, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
