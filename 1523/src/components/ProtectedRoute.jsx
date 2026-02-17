import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

export default function ProtectedRoute({ children, redirectTo = "/login" }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to={redirectTo} replace />;
  return children;
}