import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'admin' or 'user'

  const login = (username) => {
    if (username === "admin") setRole("admin");
    else setRole("user");
  };

  return (
    <AuthContext.Provider value={{ role, login }}>
      {children}
    </AuthContext.Provider>
  );
};
