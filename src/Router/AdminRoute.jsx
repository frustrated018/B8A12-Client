import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { userRole, userRoleLoading } = useUserRole();
  const location = useLocation();

  if (loading || userRoleLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && userRole === "admin") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
