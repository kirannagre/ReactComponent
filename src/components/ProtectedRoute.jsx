import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />; // Not logged in
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/login" />; // Not allowed

  return children;
};

export default ProtectedRoute;
