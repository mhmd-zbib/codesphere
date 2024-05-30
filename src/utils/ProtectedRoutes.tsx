import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
