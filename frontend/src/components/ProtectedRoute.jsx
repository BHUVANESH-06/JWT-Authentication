
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  // Token exists, render the protected component
  return children;
};

export default ProtectedRoute;

