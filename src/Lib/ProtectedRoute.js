// ProtectedRoute.js

import useAuth from "./useAuth";

const ProtectedRoute = ({ isAuthenticated, children, redirectPath }) => {
  return useAuth(isAuthenticated, children, redirectPath);
};

export default ProtectedRoute;
