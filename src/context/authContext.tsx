import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { UserData } from "../types/userData";

interface AuthContextType {
  user: UserData | null;
  login: (UserData: UserData) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userSession");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("userSession");
      }
    }
  }, []);
  const login = (UserData: UserData) => {
    localStorage.setItem("userSession", JSON.stringify(UserData));
    setUser(UserData);
  };
  const logout = () => {
    localStorage.removeItem("userSession");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}/
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser ultilizado dentro de un AuthProvider");
  }
  return context;
};
