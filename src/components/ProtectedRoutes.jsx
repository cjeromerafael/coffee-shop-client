import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";

  console.log("ProtectedRoutes active:", isAuthenticated); 

  if (!isAuthenticated) {
    console.log("Redirecting to /login...");
    return <Navigate to="/login" replace />;
  }

  console.log("Access granted");
  return children;
}

export default ProtectedRoutes;
