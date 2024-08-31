// useAuth.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (isAuthenticated, children, redirectPath = "/login") => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectPath]);

  return isAuthenticated ? children : null;
};

export default useAuth;
