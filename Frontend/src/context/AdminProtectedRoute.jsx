import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("qwe2eDSA3r2");
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      return navigate("/not-found");
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Don't render the protected component
  }

  return element; // Render protected component if authenticated
};

export default AdminProtectedRoute;
