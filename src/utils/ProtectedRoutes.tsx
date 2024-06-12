// import AuthContext from "@/context/auth-context";
// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";

// export const ProtectedRoute = () => {
//   const isAuthenticated = useContext(AuthContext);
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export const ProtectedAuth = () => {
//   const isAuthenticated = useContext(AuthContext);
//   return !isAuthenticated ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/feed" state={{ from: location }} replace />
//   );
// };
