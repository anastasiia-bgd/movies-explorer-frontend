import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  return (
    props.isLogged ? <Component {...props} replace /> : <Navigate to='/' replace />
  )
}

export default ProtectedRoute;