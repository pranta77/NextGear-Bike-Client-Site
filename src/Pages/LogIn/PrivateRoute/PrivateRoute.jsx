import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (user.email) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
}
