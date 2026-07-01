import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtecterRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default ProtecterRoute;
